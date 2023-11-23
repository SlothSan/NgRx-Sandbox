import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as TodoActions from '../../../../store/actions/todo-list.actions';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss'],
})
export class TaskSearchComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  private form?: FormGroup;
  @Output() searchTermEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.buildForm();
    this.taskSearchInputFormControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) => {
        this.store.dispatch(TodoActions.searchTermUpdated({ searchTerm: val }));
      });
  }

  buildForm() {
    this.form = new FormGroup({
      taskSearchInput: new FormControl('', Validators.minLength(3)),
    });
  }

  get taskSearchInputFormControl(): FormControl {
    return this.form?.get('taskSearchInput') as FormControl;
  }
}
