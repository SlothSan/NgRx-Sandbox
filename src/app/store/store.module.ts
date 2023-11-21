import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from './effects/todo-list.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Todo App',
    }),
    EffectsModule.forRoot([TodoListEffects]),
    CommonModule,
  ],
  exports: [StoreModule],
})
export class AppStoreModule {}
