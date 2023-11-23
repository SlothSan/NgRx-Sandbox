import { createSelector } from '@ngrx/store';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import {
  selectLoadingState,
  selectTodoListFilterState,
  selectTodoListItemsState,
} from '../../../../store/selectors/todo-list.selector';

export type TodoListingViewModel = {
  loading: boolean;
  todoItems: TodoListItem[];
  filterTerm: string;
};

export const selectTodoListingViewModel = createSelector(
  selectLoadingState,
  selectTodoListItemsState,
  selectTodoListFilterState,
  (
    loading: boolean,
    todoItems: TodoListItem[],
    filterTerm: string
  ): TodoListingViewModel => {
    const filteredTodoItems =
      filterTerm.length >= 3
        ? todoItems.filter((item: TodoListItem) => {
            return item.taskName
              .toLowerCase()
              .includes(filterTerm.toLowerCase());
          })
        : todoItems;

    return {
      loading,
      todoItems: filteredTodoItems,
      filterTerm,
    };
  }
);
