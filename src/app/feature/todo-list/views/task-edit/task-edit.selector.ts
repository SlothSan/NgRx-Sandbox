import { createSelector } from '@ngrx/store';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import { selectTodoListItemsState } from '../../../../store/selectors/todo-list.selector';

export type TodoEditViewModel = {
  loading: boolean;
  todoItems: TodoListItem;
};

export const selectTodoItemById = (itemId: string | null) =>
  createSelector(selectTodoListItemsState, (todoItems: TodoListItem[]) => {
    return todoItems.find((item) => item.id === itemId);
  });
