import { Component } from '@angular/core';
import { BlogPost } from 'src/DTO/BlogPost';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public posts?: String[];

    public constructor(private blogService: BlogService) { };

    onInit(){
        this.blogService.getPostTitles().subscribe((result) => this.posts = result);
    }
}
