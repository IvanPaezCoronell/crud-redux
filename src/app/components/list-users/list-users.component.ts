import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeUser } from 'src/app/actions/user.actions';
import { AppState } from 'src/app/app-reducer';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  constructor(private store: Store<AppState>) {}

  @Input() user!: User;

  // Eliminar usuario por ID
  onDelete() {
    if (this.user) {
      this.store.dispatch(removeUser({ id: this.user.id }));
    } else {
      console.error('No se proporcionó un usuario válido para eliminar.');
    }
  }
}
