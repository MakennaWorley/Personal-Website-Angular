import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'westminster-carousel',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
	@Input() items: any[] = [];
	current = 0;

	ngOnInit(): void {
		if (this.items.length > 0) {
			this.items.forEach((item, index) => (item.active = index === 0));
		}
	}

	changeItem(direction: number): void {
		this.items[this.current].active = false;
		this.current = (this.current + direction + this.items.length) % this.items.length;
		this.items[this.current].active = true;
	}
}
