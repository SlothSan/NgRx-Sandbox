import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import * as TodoActions from './../../../../store/actions/todo-list.actions'
import {selectTodoItemById} from "./task-edit.selector";
import {TodoListItem} from "../../../../types/interfaces/todo-list/todo-list.interface";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  public form?: FormGroup;
  public taskId: string;
  public vm$?: TodoListItem | undefined
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
   this.taskId = this.route.snapshot.paramMap.get('id') || '';
    this.store.select(selectTodoItemById(this.taskId)).subscribe((item) => {
      this.vm$ = item;
    })
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = new FormGroup({
      taskName: new FormControl(this.vm$?.taskName, Validators.required),
      taskDescription: new FormControl(this.vm$?.taskDescription, Validators.required)
    })
  }

  updateTask(): void {
    const itemId = this.taskId
    const taskName = this.taskNameFormControl.value;
    const taskDescription = this.taskDescriptionFormControl.value;
    this.store.dispatch(TodoActions.updateTodoItemDetails({itemId, taskName, taskDescription}))
    this.router.navigate(['/'])
  }
  get taskNameFormControl(): FormControl {
    return this.form?.get('taskName') as FormControl;
  }

  get taskDescriptionFormControl(): FormControl {
    return this.form?.get('taskDescription') as FormControl
  }


}
