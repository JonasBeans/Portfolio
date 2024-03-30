import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/DTO/BlogPost';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private host: String;

    constructor(private http: HttpClient) {
        this.host = environment.host;
    }

    public getPostTitles(): Observable<String[]>{
        console.log(`Getting all page titles from: ${environment.host}`);
        return this.http.get<String[]>(`${this.host}/api/v1/blog`)
    }

    public getPageContent(title: String): Observable<BlogPost> {
        console.log(`Getting page content from: ${environment.host}`);
        return this.http.get<BlogPost>(`${this.host}/api/v1/blog/byName?title=${title}`)
    }
}