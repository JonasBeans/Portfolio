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

    public getPostTitles(): Observable<String[]> {
        return this.http.get<String[]>(`${this.host}/api/v1/blog`)
    }

    public getPostTitlesByLocation(location: string): Observable<String[]>{
        return this.http.get<String[]>(`${this.host}/api/v1/pages?location=${location}`)
    }

    public getPageContent(title: String): Observable<BlogPost> {
        console.log(`Getting page content from: ${environment.host}`);
        return this.http.get<BlogPost>(`${this.host}/api/v1/blog/byName?title=${title}`)
    }

    public getPageContentByLocation(location: string, title: String): Observable<BlogPost> {
        console.log(`Getting page content from: ${environment.host}`);
        return this.http.get<BlogPost>(`${this.host}/api/v1/pages/byName?location=${location}&title=${title}`)
    }
}