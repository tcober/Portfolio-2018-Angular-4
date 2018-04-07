import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { TwitterComponent } from './posts/twitter/twitter.component';
import { PostDisplayComponent } from './posts/post-display/post-display.component'
import { SoundcloudComponent } from './posts/soundcloud/soundcloud.component'

const routes: Routes = [
  {
    path: '',
    component: TwitterComponent,
    pathMatch: 'full'
  },
  {
    path: 'soundcloud',
    component: SoundcloudComponent,
    pathMatch: 'full'
  },
  {
    path: 'work-list',
    component: PostListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class PortfolioRoutingModule { }