import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-research',
	imports: [NgIf],
	templateUrl: './research.component.html',
	styleUrl: './research.component.scss'
})
export class ResearchComponent {
	videoLoaded = false;

	loadVideo(): void {
		this.videoLoaded = true;
	}
}
