import { createSelector } from '@ngrx/store';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import {
  selectLoadingState,
  selectTodoListFilterState,
  selectTodoListFilterTypeState,
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
  selectTodoListFilterTypeState,
  (
    loading: boolean,
    todoItems: TodoListItem[],
    filterTerm: string,
    filterType: string | null
  ): TodoListingViewModel => {
    let filteredTodoItems = filterTerm.length
      ? todoItems.filter((item: TodoListItem) => {
          return item.taskName.toLowerCase().includes(filterTerm.toLowerCase());
        })
      : todoItems;
    if (filterType) {
      filteredTodoItems = filteredTodoItems.filter((curr) => {
        if (filterType !== 'None') return curr.statusId === filterType;
        return curr;
      });
    }
    return {
      loading,
      todoItems: filteredTodoItems,
      filterTerm,
    };
  }
);
