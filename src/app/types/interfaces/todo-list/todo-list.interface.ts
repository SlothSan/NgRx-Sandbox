import {TodoItemStatusConstant} from "../../constants/todo-list/todo-item-status.constant";

export interface TodoListItem {
  id: string;
  statusId: TodoItemStatusConstant;
  title: string;
  description: string;
}
