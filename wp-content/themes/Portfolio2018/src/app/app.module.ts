import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PostDisplayComponent } from './posts/post-display/post-display.component';
import { TwitterComponent } from './posts/twitter/twitter.component';
import { SoundcloudComponent } from './posts/soundcloud/soundcloud.component';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDisplayComponent,
    TwitterComponent,
    SoundcloudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PortfolioRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
