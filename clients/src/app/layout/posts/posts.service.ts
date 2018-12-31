import {Injectable} from '@angular/core';
import {Posts} from './posts';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly _postsSource$ = new BehaviorSubject<Posts[]>([]);
  private readonly _posts$ = this._postsSource$.asObservable();

  public setPosts(posts: Posts[]) {
    this._postsSource$.next(posts);
  }

  get posts$(): Observable<Posts[]> {
    return this._posts$;
  }

  constructor(private http: HttpClient) {
  }

  public load(): void {
    this.http.get<Posts[]>('http://localhost:3000/posts').subscribe(value => {
      this._postsSource$.next(value);
    });
  }

  public add(post: Posts): Observable<Posts> {
    return this.http.post<Posts>('http://localhost:3000/posts', post);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/posts/' + id);
  }
}
