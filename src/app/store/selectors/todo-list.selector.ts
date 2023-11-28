import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../../types/interfaces/todo-list/todo-list.interface';
import { featureKey, TodoListPageState } from '../reducers/todo-list.reducer';

export const selectTodoListFeature =
  createFeatureSelector<TodoListPageState>(featureKey);

export const selectLoadingState = createSelector(
  selectTodoListFeature,
  (state: TodoListPageState): boolean => state.loading
);

export const selectTodoListItemsState = createSelector(
  selectTodoListFeature,
  (state: TodoListPageState) => {
    return Object.values(state.entities) as TodoListItem[]; // Extract entities as array
  }
);

export const selectTodoListFilterState = createSelector(
  selectTodoListFeature,
  (state: TodoListPageState) => {
    return state.filterTerm;
  }
);

export const selectTodoListFilterTypeState = createSelector(
  selectTodoListFeature,
  (state: TodoListPageState) => {
    return state.filterType;
  }
);
