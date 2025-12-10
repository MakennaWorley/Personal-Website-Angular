import { Component } from '@angular/core';
import { PostPanelComponent } from '../../components/post-panel/post-panel.component';

interface PostPanel {
	title: string;
	subtitle: string;
	isOpen: boolean;
}

@Component({
	selector: 'app-posts',
	imports: [PostPanelComponent],
	templateUrl: './posts.component.html',
	styleUrl: './posts.component.scss'
})
export class PostsComponent {
	panels: PostPanel[] = [
		{
			title: 'Becoming an Engineer',
			subtitle: 'A personal story about how I found my path in software and data',
			isOpen: false
		},
		{
			title: 'My USU Hackathon Experience',
			subtitle: 'What does it take to win a Hackathon?',
			isOpen: false
		}
	];

	toggle(i: number) {
		this.panels[i].isOpen = !this.panels[i].isOpen;
	}
}
