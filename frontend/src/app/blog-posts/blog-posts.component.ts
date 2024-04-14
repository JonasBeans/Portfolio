import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { BlogPost } from 'src/DTO/BlogPost';
import { Observable, map, pipe } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
    
    public posts?: String[];
    public currentMarkdown: string = "";
    public startIndex = 0;
    public endIndex = 5;
    public enablePosts: boolean = false;
    private location;

    public constructor(private blogService: BlogService) { 
        this.location = environment.blogPostLocation;
    };

    switchMenu() {
        this.enablePosts = !this.enablePosts;
    }

    ngOnInit(){
        this.blogService.getPostTitlesByLocation(this.location).subscribe((result) => this.posts = result);
    }

    receivePageContent(pageContent: BlogPost) {
        const decoder = new TextDecoder('utf-8');
        this.currentMarkdown = decoder
            .decode(Uint8Array.from(atob(pageContent.content), c => c.charCodeAt(0)).buffer);
    }

    getPosts(): String[]{
        return this.posts == undefined ?  
            [] : 
            this.posts.slice(this.startIndex, this.endIndex);
    }

    getNext() {
        if(this.posts != undefined && this.endIndex + 1 <= this.posts.length ){
            this.startIndex += 5;
            this.endIndex += 5;
        }
    }

    getPrevious() {
        (this.startIndex - 5) <= 0 ?  this.startIndex = 0 : this.startIndex -= 5;
        (this.endIndex - 10) <= 0 ? this.endIndex = 5 : this.endIndex -= 5 ;
    }

    search(search : string) {
        if ( !search ) {
            this.ngOnInit();
        }
        this.posts = this.posts?.filter(
            post => post.toLowerCase().includes(search.toLocaleLowerCase())
        ); 
    }
}
