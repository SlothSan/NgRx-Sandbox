import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss'],
})
export class TaskSearchComponent implements OnInit, OnChanges {
  private form?: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.form);
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
