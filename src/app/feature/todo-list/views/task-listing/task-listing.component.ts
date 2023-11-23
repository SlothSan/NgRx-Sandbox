import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectTodoListingViewModel,
  TodoListingViewModel,
} from './task-listing.selector';
import { TodoItemStatusConstant } from '../../../../types/constants/todo-list/todo-item-status.constant';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.scss'],
})
export class TaskListingComponent {
  public vm$: Observable<TodoListingViewModel> = this.store.select(
    selectTodoListingViewModel,
  );
  constructor(private store: Store) {}

  protected readonly TodoItemStatusConstant = TodoItemStatusConstant;
}
