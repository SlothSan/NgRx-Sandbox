import { Component, Input, OnInit } from '@angular/core';
import { TodoListItem } from '../../../../types/interfaces/todo-list/todo-list.interface';
import { TodoItemStatusConstant } from '../../../../types/constants/todo-list/todo-item-status.constant';
import * as TodoActions from '../../../../store/actions/todo-list.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { GenericKeyValueInterface } from '../../../../types/interfaces/shared/generic-keyvalue.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() public itemDetails!: TodoListItem;
  protected readonly TodoItemStatusConstant = TodoItemStatusConstant;
  protected TodoItemStatuses: GenericKeyValueInterface[];

  constructor(private store: Store, private router: Router) {
    this.TodoItemStatuses = this.TodoItemStatusConstant.statuses();
  }

  ngOnInit() {
    this.TodoItemStatuses = this.returnFilteredStatuses();
  }

  public returnFilteredStatuses(): GenericKeyValueInterface[] {
    return this.TodoItemStatuses.filter((curr: GenericKeyValueInterface) => {
      return curr.value !== this.itemDetails?.statusId;
    });
  }

  public removeItem(): void {
    this.store.dispatch(
      TodoActions.removeTodoItemClicked({ itemId: this.itemDetails.id })
    );
  }

  public completeItem(): void {
    this.store.dispatch(
      TodoActions.completeTodoItemClicked({ itemId: this.itemDetails.id })
    );
  }

  public uncompleteItem(): void {
    this.store.dispatch(
      TodoActions.uncompleteTodoItemClicked({ itemId: this.itemDetails.id })
    );
  }

  public updateStatus(statusValue: string): void {
    this.store.dispatch(
      TodoActions.changeTodoItemStatusClicked({
        itemId: this.itemDetails.id,
        newStatus: statusValue,
      })
    );
  }

  public editTaskInfo(): void {
    this.router.navigate(['/edit', this.itemDetails.id]);
  }

  public toggleImportance(): void {
    this.store.dispatch(
      TodoActions.markTodoAsImportantClicked({
        itemId: this.itemDetails.id,
      })
    );
  }
}
