import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListingComponent} from "./views/task-listing/task-listing.component";
import {TaskCreateComponent} from "./views/task-create/task-create.component";
import {TaskEditComponent} from "./views/task-edit/task-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TaskListingComponent,
  },
  {
    path: 'create',
    component: TaskCreateComponent
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
