import { NgModule, Sanitizer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './common/blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    BlogPostComponent,
    HomeComponent, 
    ProjectsComponent
  ],
  imports: [
    MarkdownModule.forRoot({
        sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
