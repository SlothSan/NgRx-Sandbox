import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { TodoListItem } from '../../types/interfaces/todo-list/todo-list.interface';
import * as Actions from './../actions/todo-list.actions';
import { TodoItemStatusConstant } from '../../types/constants/todo-list/todo-item-status.constant';
import * as uuid from 'uuid';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const featureKey: 'app.todoList' = 'app.todoList';

export interface TodoListPageState extends EntityState<TodoListItem> {
  loading: boolean;
  todoItems: TodoListItem[];
}

export const todoListAdapter: EntityAdapter<TodoListItem> =
  createEntityAdapter<TodoListItem>({});

const initialState: TodoListPageState = todoListAdapter.getInitialState({
  loading: false,
  todoItems: [
    {
      id: uuid.v4(),
      statusId: TodoItemStatusConstant.NEW,
      taskName: 'Time log',
      taskDescription: 'Ensure all completed work is logged',
      important: false,
    },
    {
      id: uuid.v4(),
      statusId: TodoItemStatusConstant.NEW,
      taskName: 'QA Handover',
      taskDescription: 'Handover story #22222 to Tom',
      important: true,
    },
  ],
});

const sharedReducer: ActionReducer<TodoListPageState> = createReducer(
  initialState,

  on(
    Actions.addTodoItemClicked,
    (state: TodoListPageState, action: { todoItemDetails: TodoListItem }) => ({
      ...state,
      todoItems: [...state.todoItems, action.todoItemDetails],
    })
  ),

  on(
    Actions.completeTodoItemClicked,
    (state: TodoListPageState, action: { itemId: string }) => {
      return {
        ...state,
        todoItems: state.todoItems.map((item) => {
          if (item.id === action.itemId) {
            return {
              ...item,
              statusId: TodoItemStatusConstant.COMPLETE,
            };
          } else {
            return item;
          }
        }),
      };
    }
  ),
  on(
    Actions.removeTodoItemClicked,
    (state: TodoListPageState, action: { itemId: string }) => {
      return {
        ...state,
        todoItems: state.todoItems.filter((curr) => curr.id !== action.itemId),
      };
    }
  ),
  on(
    Actions.changeTodoItemStatusClicked,
    (
      state: TodoListPageState,
      action: { itemId: string; newStatus: string }
    ) => {
      return {
        ...state,
        todoItems: state.todoItems.map((curr) => {
          if (curr.id !== action.itemId) return curr;
          else {
            let updated = JSON.parse(JSON.stringify(curr));
            updated.statusId = action.newStatus;
            return updated;
          }
        }),
      };
    }
  ),
  on(Actions.updateTodoItemDetailsClicked, (state, { todo }) => {
    return todoListAdapter.updateOne(todo, state);
  }),
  // on(
  //   Actions.updateTodoItemDetailsClicked,
  //   (
  //     state: TodoListPageState,
  //     action: { itemId: string; taskName: string; taskDescription: string }
  //   ) => {
  //     return {
  //       ...state,
  //       todoItems: state.todoItems.map((curr) => {
  //         if (curr.id !== action.itemId) return curr;
  //         else {
  //           let updated = JSON.parse(JSON.stringify(curr));
  //           updated.taskName = action.taskName;
  //           updated.taskDescription = action.taskDescription;
  //           return updated;
  //         }
  //       }),
  //     };
  //   }
  // ),
  on(
    Actions.markTodoAsImportantClicked,
    (state: TodoListPageState, action: { itemId: string }) => {
      return {
        ...state,
        todoItems: state.todoItems.map((curr) => {
          if (curr.id !== action.itemId) return curr;
          else {
            let updated = JSON.parse(JSON.stringify(curr));
            updated.important = !updated.important;
            return updated;
          }
        }),
      };
    }
  )
);

export function reducer(
  state: TodoListPageState | undefined,
  action: Action
): TodoListPageState {
  return sharedReducer(state, action);
}
