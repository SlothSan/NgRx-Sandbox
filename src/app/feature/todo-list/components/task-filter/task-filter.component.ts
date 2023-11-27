import { Component, OnInit } from '@angular/core';
import { TodoItemStatusConstant } from '../../../../types/constants/todo-list/todo-item-status.constant';
import { GenericKeyValueInterface } from '../../../../types/interfaces/shared/generic-keyvalue.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../../../store/actions/todo-list.actions';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss'],
})
export class TaskFilterComponent implements OnInit {
  public dropdownOptions: GenericKeyValueInterface[] =
    TodoItemStatusConstant.statuses();
  private form?: FormGroup;

  constructor(private store: Store) {}

  ngOnInit() {
    this.dropdownOptions.unshift({ key: 'None', value: 'None' });
    this.buildForm();
    this.taskFilterInputFormControl.valueChanges.subscribe((val) =>
      this.store.dispatch(TodoActions.filterUpdated({ filterType: val }))
    );
  }

  buildForm(): void {
    this.form = new FormGroup<any>({
      taskFilterInput: new FormControl(this.dropdownOptions[0].value),
    });
  }

  get taskFilterInputFormControl(): FormControl {
    return this.form?.get('taskFilterInput') as FormControl;
  }
}
