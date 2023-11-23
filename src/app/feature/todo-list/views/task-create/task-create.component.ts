import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';

import * as TodoActions from './../../../../store/actions/todo-list.actions';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import { TodoItemStatusConstant } from '../../../../types/constants/todo-list/todo-item-status.constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  public form?: FormGroup;
  constructor(private store: Store) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = new FormGroup({
      taskName: new FormControl(null, Validators.required),
      taskDescription: new FormControl(null, Validators.required),
    });
  }
  addTask(): void {
    const taskName = this.taskNameFormControl.value;
    const taskDescription = this.taskDescriptionFormControl.value;

    const todoItemDetails: TodoListItem = {
      taskName: taskName,
      taskDescription: taskDescription,
      statusId: TodoItemStatusConstant.NEW,
      id: uuid.v4(),
      important: false,
    };

    this.store.dispatch(
      TodoActions.addTodoItemClicked({ todoItemDetails: todoItemDetails })
    );
  }

  get taskNameFormControl(): FormControl {
    return this.form?.get('taskName') as FormControl;
  }

  get taskDescriptionFormControl(): FormControl {
    return this.form?.get('taskDescription') as FormControl;
  }
}
