import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { TodoItemStatusConstant } from '../../../../types/constants/todo-list/todo-item-status.constant';
import { GenericKeyValueInterface } from '../../../../types/interfaces/shared/generic-keyvalue.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../../../store/actions/todo-list.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss'],
})
export class TaskFilterComponent implements OnInit {
  public dropdownOptions: GenericKeyValueInterface[] =
    TodoItemStatusConstant.statuses();
  private form?: FormGroup;
  private destroyRef: DestroyRef = Inject(DestroyRef);

  constructor(private store: Store) {}

  ngOnInit() {
    this.dropdownOptions.unshift({ key: 'None', value: 'None' });
    this.buildForm();
    this.taskFilterInputFormControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) =>
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
