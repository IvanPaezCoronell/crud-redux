import { Component, OnInit } from '@angular/core';

// Formularios Reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/User.model';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from './app-reducer';
import { addUser, removeUser } from './actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  Users: User[] = [];

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });

  onAddUser(): void {
    if (this.myForm.invalid) return;

    this.store.dispatch(
      addUser({
        name: this.myForm.get('name')?.value as string,
        email: this.myForm.get('email')?.value as string,
        phoneNumber: this.myForm.get('phoneNumber')?.value as string,
      })
    );

    console.log(this.Users);
    this.myForm.reset();
  }

  // onDelete() {
  //   this.store.dispatch(removeUser({ id: this.Users.}));
  // }


  ngOnInit(): void {
    this.store.select('users').subscribe((users) => (this.Users = users));
  }
}

//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; -----> Expresion regular para validar campo Email
