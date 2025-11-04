import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PostMetadata {
	title: string;
	file: string;
	date: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
	constructor(private http: HttpClient) {}

	getPosts(): Observable<PostMetadata[]> {
		return this.http.get<PostMetadata[]>('posts/index.json');
	}

	getPostContent(filename: string): Observable<string> {
		return this.http.get(`assets/posts/${filename}`, { responseType: 'text' });
	}
}
