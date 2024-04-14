import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { BlogPost } from 'src/DTO/BlogPost';
import { BlogService } from '../service/blog.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    public currentMarkdown: string = "";
    public posts?: String[];
    public location;

    public startIndex = 0;
    public endIndex = 5;
    public enablePosts: boolean = false;

    public constructor(private blogService: BlogService) { 
        this.location = environment.projectPostLocation;
    };

    ngOnInit(){
        this.blogService.getPostTitlesByLocation(this.location).subscribe((result) => this.posts = result);
    }

    receivePageContent(pageContent: BlogPost) {
        const decoder = new TextDecoder('utf-8');
        this.currentMarkdown = decoder
            .decode(Uint8Array.from(atob(pageContent.content), c => c.charCodeAt(0)).buffer);
    }
    
    switchMenu() {
        this.enablePosts = !this.enablePosts;
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
