import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-post-panel',
	imports: [],
	templateUrl: './post-panel.component.html',
	styleUrl: './post-panel.component.scss'
})
export class PostPanelComponent {
	@Input() title = '';
	@Input() subtitle = '';
	@Input() openByDefault = false;

	isOpen = false;

	ngOnInit() {
		this.isOpen = this.openByDefault;
	}

	toggle() {
		this.isOpen = !this.isOpen;
	}
}
