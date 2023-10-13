import {Component, Input, OnInit} from '@angular/core';
import {TodoListItem} from "../../../../types/interfaces/todo-list/todo-list.interface";
import {TodoItemStatusConstant} from "../../../../types/constants/todo-list/todo-item-status.constant";
import * as TodoActions from "../../../../store/actions/todo-list.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() public itemDetails!: TodoListItem;

  constructor(private store: Store) {}

  ngOnInit() {

  }

  public completeItem(): void {
    this.store.dispatch(TodoActions.completeTodoItemClicked({ itemId: this.itemDetails.id }))
  }

  protected readonly TodoItemStatusConstant = TodoItemStatusConstant;
}
