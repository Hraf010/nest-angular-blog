import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {AddPostsComponent} from './add-posts/add-posts.component';
import {MainPostComponent} from './main-post/main-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {DataTableModule} from 'angular-6-datatable';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, DataTableModule, ReactiveFormsModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule
  ],
  declarations: [PostsComponent, AddPostsComponent, MainPostComponent]
})
export class PostsModule {
}
