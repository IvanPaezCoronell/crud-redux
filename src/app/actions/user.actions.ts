import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
  '[USER] addUser',
  props<{ name: string; email: string; phoneNumber: string }>()
);

export const removeUser = createAction(
  '[USER] removeUser',
  props<{ id: string }>()
);
