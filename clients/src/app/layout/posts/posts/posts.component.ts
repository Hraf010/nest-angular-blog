import {Component, OnInit} from '@angular/core';
import {Posts} from '../posts';
import {PostsService} from '../posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.load();
    this.postService.posts$.subscribe(value => {
      this.route.params.subscribe(value2 => {
        if (value2.id) {
          this.posts = value.filter(value1 => value1.user == value2.id);
        } else {
          this.posts = value;
        }
      });
    });
  }

  delete(posts: Posts) {
    this.postService.delete(posts.id).subscribe(value => {
      this.postService.setPosts(this.posts.filter(value1 => value1.id !== posts.id));
    }, error1 => {
      console.log(error1);
    });
  }
}
