import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserMainComponent} from './layout/users/user-main/user-main.component';
import {MainPostComponent} from './layout/posts/main-post/main-post.component';

const routes: Routes = [
  {path: '', component: UserMainComponent},
  {path: 'users', component: UserMainComponent},
  {path: 'posts', component: MainPostComponent},
  {path: 'posts/:id', component: MainPostComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
