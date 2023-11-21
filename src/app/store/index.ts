import { ActionReducerMap } from '@ngrx/store';
import * as TodoListReducers from './reducers/todo-list.reducer';

export interface ApplicationState {
  [TodoListReducers.featureKey]?: TodoListReducers.TodoListPageState;
}
export const reducers: ActionReducerMap<ApplicationState> = {
  'app.todoList': TodoListReducers.reducer,
};
