import { createAction, props } from '@ngrx/store';
import {TodoListItem} from "../../types/interfaces/todo-list/todo-list.interface";
export const addTodoItemClicked = createAction('[TODO] Add Item To To-do List', props<{ todoItemDetails: TodoListItem }>());

export const completeTodoItemClicked = createAction('[TODO] Mark Item As Complete', props<{ itemId: string }>());

// Remove item clicked

// Edit item clicked

// Mark as important clicked
