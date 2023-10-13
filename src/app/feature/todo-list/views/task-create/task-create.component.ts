import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import * as uuid from 'uuid';

import * as TodoActions from './../../../../store/actions/todo-list.actions'
import {TodoListItem} from "../../../../types/interfaces/todo-list/todo-list.interface";
import {TodoItemStatusConstant} from "../../../../types/constants/todo-list/todo-item-status.constant";

@Component({
  selector: 'app-todo-item-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  constructor(private store: Store) {}

  addTask(): void {
    // Get Form values

    const todoItemDetails: TodoListItem = {
      // title: this.form.get('title').value,
      title: 'test',
      description: 'test...',
      statusId: TodoItemStatusConstant.NEW,
      id: uuid.v4()
    };

    this.store.dispatch(TodoActions.addTodoItemClicked({ todoItemDetails: todoItemDetails }))
  }
}
