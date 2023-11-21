import { createFeatureSelector, createSelector } from '@ngrx/store';
import {TodoListItem} from "../../types/interfaces/todo-list/todo-list.interface";
import {featureKey, TodoListPageState} from "../reducers/todo-list.reducer";

const selector = <T>(mapping: (state: TodoListPageState) => T) => createSelector(selectTodoListFeature, mapping);

export const selectTodoListFeature = createFeatureSelector<TodoListPageState>(featureKey);

export const selectLoadingState = selector((state: TodoListPageState): boolean => state.loading);

export const selectTodoListItemsState = selector((state: TodoListPageState): TodoListItem[] => state.todoItems);
