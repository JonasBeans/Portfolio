import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { BlogPost } from 'src/DTO/BlogPost';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    public currentMarkdown: string = "../../assets/posts/LinodePortfolioWebsite.md";
    public posts?: String[];

    public constructor(private blogService: BlogService) { };

    ngOnInit(){
        this.blogService.getPostTitles().subscribe((result) => this.posts = result);
    }

}
