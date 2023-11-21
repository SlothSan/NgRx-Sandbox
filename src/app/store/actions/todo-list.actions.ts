import { createAction, props } from '@ngrx/store';
import {TodoListItem} from "../../types/interfaces/todo-list/todo-list.interface";
export const addTodoItemClicked = createAction('[TODO] Add Item To To-do List', props<{ todoItemDetails: TodoListItem }>());

export const completeTodoItemClicked = createAction('[TODO] Mark To-do Item As Complete', props<{ itemId: string }>());

// Remove item clicked
export const removeTodoItemClicked = createAction('[TODO] Remove To-do Item From To-do List', props<{ itemId: string}>())

// Edit item clicked
export const changeTodoItemStatusClicked = createAction('[TODO] Change To-do Item Status', props<{ itemId: string, newStatus: string }>())

export const updateTodoItemDetailsClicked = createAction('[TODO] Update To-do Item Details', props<{ itemId: string, taskName: string, taskDescription: string }>())

// Mark as important clicked
