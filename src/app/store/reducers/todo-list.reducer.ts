import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { TodoListItem } from '../../types/interfaces/todo-list/todo-list.interface';
import * as Actions from './../actions/todo-list.actions';
import { TodoItemStatusConstant } from '../../types/constants/todo-list/todo-item-status.constant';

export const featureKey: 'app.todoList' = 'app.todoList';

export interface TodoListPageState extends EntityState<TodoListItem> {
  loading: boolean;
  filterTerm: string;
}

const todoListAdapter: EntityAdapter<TodoListItem> =
  createEntityAdapter<TodoListItem>();

const initialState: TodoListPageState = todoListAdapter.getInitialState({
  filterTerm: '',
  loading: false,
  ids: [
    '0b09d99c-84d8-4b2d-bf30-9f77dc802c21',
    '329b87e5-decf-437c-880a-2a40bf76c7c0',
  ],
  entities: {
    '0b09d99c-84d8-4b2d-bf30-9f77dc802c21': {
      id: '0b09d99c-84d8-4b2d-bf30-9f77dc802c21',
      statusId: TodoItemStatusConstant.NEW,
      taskName: 'Time log',
      taskDescription: 'Ensure all completed work is logged',
      important: false,
    },
    '329b87e5-decf-437c-880a-2a40bf76c7c0': {
      id: '329b87e5-decf-437c-880a-2a40bf76c7c0',
      statusId: TodoItemStatusConstant.NEW,
      taskName: 'QA Handover',
      taskDescription: 'Handover story #22222 to Tom',
      important: true,
    },
  },
});

const reducer = createReducer(
  initialState,

  on(Actions.addTodoItemClicked, (state, action) =>
    todoListAdapter.addOne(action.todoItemDetails, state)
  ),

  on(Actions.completeTodoItemClicked, (state, action) =>
    todoListAdapter.updateOne(
      {
        id: action.itemId,
        changes: { statusId: TodoItemStatusConstant.COMPLETE },
      },
      state
    )
  ),

  on(Actions.uncompleteTodoItemClicked, (state, action) =>
    todoListAdapter.updateOne(
      {
        id: action.itemId,
        changes: { statusId: TodoItemStatusConstant.NEW },
      },
      state
    )
  ),

  on(Actions.removeTodoItemClicked, (state, action) =>
    todoListAdapter.removeOne(action.itemId, state)
  ),

  on(Actions.changeTodoItemStatusClicked, (state, action) =>
    todoListAdapter.updateOne(
      {
        id: action.itemId,
        changes: { statusId: action.newStatus },
      },
      state
    )
  ),

  on(Actions.updateTodoItemDetailsClicked, (state, action) =>
    todoListAdapter.updateOne(
      {
        id: action.itemId,
        changes: {
          taskName: action.taskName,
          taskDescription: action.taskDescription,
        },
      },
      state
    )
  ),

  on(Actions.markTodoAsImportantClicked, (state, action) =>
    todoListAdapter.updateOne(
      {
        id: action.itemId,
        changes: { important: !state.entities[action.itemId]?.important },
      },
      state
    )
  ),

  on(Actions.searchTermUpdated, (state, action) => {
    return {
      ...state,
      filterTerm: action.searchTerm,
    };
  })
);

export function todoListReducer(
  state: TodoListPageState | undefined,
  action: Action
): TodoListPageState {
  return reducer(state, action);
}
