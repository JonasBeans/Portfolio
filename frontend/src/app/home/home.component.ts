import { Component } from '@angular/core';
import { BlogPost } from 'src/DTO/BlogPost';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    post?: BlogPost;
    currentMarkdown?: string;

    public constructor(private blogService: BlogService) { };

    ngOnInit(){
        this.blogService.getPageContentByLocation("home", "home.md")
            .subscribe((result) => {
                this.receivePageContent(result)
            });
    }

    receivePageContent(pageContent: BlogPost) {
        const decoder = new TextDecoder('utf-8');
        this.currentMarkdown = decoder
            .decode(Uint8Array.from(atob(pageContent.content), c => c.charCodeAt(0)).buffer);
    }
}
