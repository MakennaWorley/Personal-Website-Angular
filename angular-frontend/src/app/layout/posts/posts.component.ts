import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
	selector: 'app-posts',
	imports: [CommonModule, MaterialModule],
	templateUrl: './posts.component.html',
	styleUrl: './posts.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true
})
export class PostsComponent {
	readonly panelOpenState = signal(false);
}
