import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UsersComponent} from './layout/users/users/users.component';
import {UserMainComponent} from './layout/users/user-main/user-main.component';
import {MainPostComponent} from './layout/posts/main-post/main-post.component';
import {PostsComponent} from './layout/posts/posts/posts.component';
import {AddPostsComponent} from './layout/posts/add-posts/add-posts.component';
import {UserDetailComponent} from './layout/users/users/user-detail/user-detail.component';
import { UserAddComponent } from './layout/users/users/user-add/user-add.component'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    UsersComponent,
    UserMainComponent,
    PostsComponent,
    AddPostsComponent,
    MainPostComponent,
    UserDetailComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
