import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListingComponent } from './views/task-listing/task-listing.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TaskCreateComponent } from './views/task-create/task-create.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskEditComponent } from './views/task-edit/task-edit.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    TaskListingComponent,
    TaskCreateComponent,
    TaskItemComponent,
    TaskEditComponent,
  ],
  exports: [TaskListingComponent, TaskCreateComponent, TaskItemComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class TodoListModule {}
