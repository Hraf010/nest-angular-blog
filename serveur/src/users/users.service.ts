import { Injectable } from '@nestjs/common';
import { User } from './User';
import * as faker from 'faker/locale/fr';
@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor() {
    this.users = new Array(100)
      .fill(1)
      .map((e, i) => {
        return {
          id: i + 1,
          firstName : faker.name.firstName(),
            lastName :  faker.name.lastName(),
            email : faker.internet.email(),
            imageUrl : faker.internet.avatar(),
            jobArea : faker.name.jobArea(),
            jobType : faker.name.jobTitle()
        };
      });
  }

  public getAll(): User[] {
    return this.users;
  }

  public getById(id: number): User {
    const user = this.users.find(users => users.id == id);
    return user;
  }

  public remove(id: number): any {
    this.users = this.users.filter(users => users.id !== id);
    return id;
  }

  public save(user: User): User {
    const userl = this.users.length;
    if (this.users.length > 0) {
      user.id = (this.users[userl - 1].id + 1);
    } else {
      user.id = 1;
    }
    this.users.push(user);
    return user;
  }

}
