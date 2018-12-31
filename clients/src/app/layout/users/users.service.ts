import {Injectable} from '@angular/core';
import {User} from './user';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly BASE_URL = 'http://localhost:3000/users';
  private readonly _usersSource$ = new BehaviorSubject<User[]>([]);
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
  

  public add(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/users/' + id);
  }

  findOne(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/' + id);
  }
  public setUsers(users: User[]) {
    this._usersSource$.next(users);
  }
}
