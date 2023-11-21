import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {exhaustMap} from "rxjs";

import * as TodoActions from './../actions/todo-list.actions';


@Injectable()
export class TodoListEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  redirectToListing$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodoItemClicked, TodoActions.updateTodoItemDetailsClicked),
      exhaustMap(() =>
        this.router.navigate([``])
      )
    );
  }, { dispatch: false });
}
