import { createSelector } from '@ngrx/store';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import {
  selectLoadingState,
  selectTodoListItemsState,
} from '../../../../store/selectors/todo-list.selector';

export type TodoListingViewModel = {
  loading: boolean;
  todoItems: TodoListItem[];
};

export const selectTodoListingViewModel = createSelector(
  selectLoadingState,
  selectTodoListItemsState,
  (loading: boolean, todoItems: TodoListItem[]): TodoListingViewModel => {
    return {
      loading,
      todoItems,
    };
  }
);
