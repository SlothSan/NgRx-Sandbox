import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { TodoListItem } from "../../types/interfaces/todo-list/todo-list.interface";
import * as Actions from './../actions/todo-list.actions';
import {TodoItemStatusConstant} from "../../types/constants/todo-list/todo-item-status.constant";
import * as uuid from 'uuid';

export const featureKey: 'app.todoList' = 'app.todoList';

export interface TodoListPageState {
  loading: boolean;
  todoItems: TodoListItem[];
}

const initialState: TodoListPageState = {
  loading: false,
  todoItems: [
    {
      id: uuid.v4(),
      statusId: TodoItemStatusConstant.NEW,
      title: 'Time log',
      description: 'Ensure all completed work is logged',
    },
    {
      id: uuid.v4(),
      statusId: TodoItemStatusConstant.COMPLETE,
      title: 'QA Handover',
      description: 'Handover story #22222 to Tom',
    },
  ]
};

const sharedReducer: ActionReducer<TodoListPageState> = createReducer(
  initialState,

  on(Actions.addTodoItemClicked, (state: TodoListPageState, action: { todoItemDetails: TodoListItem }) => ({
    ...state,
    todoItems: [...state.todoItems, action.todoItemDetails]
  })),

  on(Actions.completeTodoItemClicked, (state: TodoListPageState, action: { itemId: string }) => {
    return {
      ...state,
      todoItems: state.todoItems.map((item) => {
        if (item.id === action.itemId) {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            statusId: TodoItemStatusConstant.COMPLETE
          }
        } else {
          return item
        }
      })
    }
  }),
);

export function reducer(state: TodoListPageState | undefined, action: Action): TodoListPageState {
  return sharedReducer(state, action);
}
