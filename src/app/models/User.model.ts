export class User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(name: string, email: string, phoneNumber: string) {
    this.id = Math.random().toString(36).substring(2);
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
