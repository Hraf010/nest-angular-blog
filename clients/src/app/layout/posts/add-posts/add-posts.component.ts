import {Component, OnInit} from '@angular/core';
import * as faker from 'faker/locale/en';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Posts} from '../posts';
import {User} from '../../users/user';
import {PostsService} from '../posts.service';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../users/users.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  postForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    data: new FormControl('', [Validators.required, Validators.minLength(100)]),
    date: new FormControl('', [Validators.required]),
    img: new FormControl(''),
    user: new FormControl(''),
  });
  posts: Posts[] = [];
  user: User;
  user_id: User;

  constructor(private postService: PostsService, private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.posts$.subscribe(value => {
      this.posts = value;
    });
    this.route.params.subscribe(value2 => {
      if (value2.id) {
        this.userService.findOne(value2.id).subscribe(value => {
          console.log(value);
          if (value) {
            this.user = value;
            this.postForm.controls['img'].setValue(faker.image.fashion());
            this.postForm.controls['user'].setValue(this.user.id);
          }
        });
      }
    });
    /* titre: faker.lorem.sentence(),
       data: faker.lorem.paragraphs(3),
       postedAt: faker.date.past(),*/
  }


  onSubmit() {
    this.postService.add(this.postForm.value).subscribe(value => {
      this.posts.unshift(value);
      this.postService.setPosts(this.posts);
      this.reset();
      this.postForm.controls['titre'].setValue('');
      this.postForm.controls['data'].setValue('');
      this.postForm.controls['date'].setValue('');
      this.postForm.controls['img'].setValue(faker.image.fashion());
      this.postForm.controls['user'].setValue('');
    }, error1 => {
      console.log(error1);
    });
  }

  reset() {
    this.user = null;
  }

}
