import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PostDisplayComponent } from './posts/post-display/post-display.component';
import { TwitterComponent } from './posts/twitter/twitter.component';
import { SoundcloudComponent } from './posts/soundcloud/soundcloud.component';
import { PostsService} from './posts/posts.service';
import { TwitterService} from './posts/twitter.service'
import { BackgroundComponent } from './posts/background/background.component'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDisplayComponent,
    TwitterComponent,
    SoundcloudComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PortfolioRoutingModule,
  ],
  providers: [PostsService, TwitterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
