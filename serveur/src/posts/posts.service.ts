import { Injectable } from '@nestjs/common';
import { Posts } from './Posts';
import * as faker from 'faker/locale/fr';

@Injectable()
export class PostsService {
  private posts: Posts[] = [];

  constructor() {
    this.posts = new Array(100)
      .fill(1)
      .map((e, i) => {
        return {
          id: i + 1,
          titre: faker.lorem.sentence(3),
          data: faker.lorem.paragraphs(2),
          date: faker.date.past(),
          img: faker.internet.avatar(),
          user: i + 1,
        };
      });
  }

  public getAll(): Posts[] {
    return this.posts;
  }

  public getById(id: number): Posts {
    const post = this.posts.find(posts => posts.id == id);
    return post;
  }

  public remove(id: number): any {
    this.posts = this.posts.filter(posts => posts.id !== id);
    return id;
  }

  public save(post: Posts): Posts {
    const postl = this.posts.length;
    if (this.posts.length > 0) {
      post.id = (this.posts[postl - 1].id + 1);
    } else {
      post.id = 1;
    }
    this.posts.push(post);
    return post;
  }
}
