import { createSelector } from '@ngrx/store';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import { selectTodoListFeature } from '../../../../store/selectors/todo-list.selector';
import { TodoListPageState } from '../../../../store/reducers/todo-list.reducer';

export type TodoListingViewModel = {
  loading: boolean;
  todoItems: TodoListItem[];
};

export const selectTodoListingViewModel = createSelector(
  selectTodoListFeature,
  (todoListFeature: TodoListPageState): TodoListingViewModel => {
    return {
      loading: todoListFeature.loading,
      todoItems: todoListFeature.todoItems,
    };
  },
);
