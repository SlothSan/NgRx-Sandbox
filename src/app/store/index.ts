import {ActionReducerMap} from "@ngrx/store";

import * as TodoListActions from './actions/todo-list.actions';
import * as TodoListSelectors from './selectors/todo-list.selector';
import * as TodoListReducers from './reducers/todo-list.reducer';

export interface ApplicationState {
  [TodoListReducers.featureKey]?: TodoListReducers.TodoListPageState;
}
export const reducers: ActionReducerMap<ApplicationState> = {
  'app.todoList': TodoListReducers.reducer,
}
