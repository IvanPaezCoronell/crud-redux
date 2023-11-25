import { createReducer, on } from '@ngrx/store';
import { addUser, removeUser } from '../actions/user.actions';
import { User } from '../models/User.model';
import { state } from '@angular/animations';

export const initialState: User[] = [
  new User('Ivan', 'ipaez@consware.com.co', '3013030072'),
];

const _userReducer = createReducer(
  initialState,
  on(addUser, (state, { name, email, phoneNumber }) => [
    ...state,
    new User(name, email, phoneNumber),
  ]),

  on(removeUser, (state, { id }) => state.filter((user) => user.id !== id))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
