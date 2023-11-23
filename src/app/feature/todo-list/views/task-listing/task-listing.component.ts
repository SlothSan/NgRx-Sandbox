import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
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
export class TaskListingComponent implements OnInit {
  public searchTerm: string = '';
  public vm$: Observable<TodoListingViewModel> = this.store.select(
    selectTodoListingViewModel
  );

  constructor(private store: Store) {}

  ngOnInit() {}

  handleSearchTermEvent(eventData: string) {
    this.searchTerm = eventData;
  }

  protected readonly TodoItemStatusConstant = TodoItemStatusConstant;
}
