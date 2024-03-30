import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost } from 'src/DTO/BlogPost';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-post',
  template: '<div><button (click)="getFile()"><p>{{post}}</p></button></div>',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
    @Input() public post?: String; 
    @Output() pageContent = new EventEmitter<any>();
    private retrievePageContent?: BlogPost;

    constructor(private blogService: BlogService){ }

    public getFile(){
        console.log(`Post name ${this.post}`);
        if(this.post !== undefined){
            this.blogService.getPageContent(this.post)
                .subscribe((result) => {
                    this.retrievePageContent = result;
                    this.pageContent.emit(this.retrievePageContent);
                });
        }
    }
}
