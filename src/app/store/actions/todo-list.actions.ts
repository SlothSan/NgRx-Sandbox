import { createAction, props } from '@ngrx/store';
import {TodoListItem} from "../../types/interfaces/todo-list/todo-list.interface";
export const addTodoItemClicked = createAction('[TODO] Add Item To To-do List', props<{ todoItemDetails: TodoListItem }>());

export const completeTodoItemClicked = createAction('[TODO] Mark Item As Complete', props<{ itemId: string }>());

// Remove item clicked
export const removeTodoItemClicked = createAction('[TODO] Remove Item From To-do List', props<{ itemId: string}>())

// Edit item clicked
export const changeTodoItemStatus = createAction('[TODO] Change Item Status', props<{ itemId: string, newStatus: string }>())

export const updateTodoItemDetails = createAction('[TODO] Update Todo Item Details', props<{ itemId: string, taskName: string, taskDescription: string }>())

// Mark as important clicked
