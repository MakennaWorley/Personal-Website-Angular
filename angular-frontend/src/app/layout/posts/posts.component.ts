import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { PostMetadata, PostService } from './post.service';

@Component({
	selector: 'app-posts',
	imports: [CommonModule, MaterialModule],
	templateUrl: './posts.component.html',
	styleUrl: './posts.component.scss',
	standalone: true
})
export class PostsComponent {
	posts: PostMetadata[] = [];
	contentMap: { [filename: string]: string } = {};

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getPosts().subscribe((posts) => (this.posts = posts));
		console.log(this.posts);
	}

	loadContent(post: PostMetadata): void {
		if (!this.contentMap[post.file]) {
			this.postService.getPostContent(post.file).subscribe((content) => {
				this.contentMap[post.file] = content;
			});
		}
	}
}
