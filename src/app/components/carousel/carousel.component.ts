import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
	selector: 'app-carousel',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnChanges, AfterViewInit {
	@Input() items: any[] = [];
	current = 0;
	itemWidth = 0;

	@ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['items'] && this.items.length > 0) {
			// Find the item the parent marked as active (if any)
			const initialIndex = this.items.findIndex((item) => item.active);
			this.current = initialIndex !== -1 ? initialIndex : 0;

			// Ensure only that item is marked active
			this.items.forEach((item, index) => {
				item.active = index === this.current;
			});
		}
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			const el = this.carouselItems.first?.nativeElement as HTMLElement;
			this.itemWidth = el?.offsetWidth ?? 0;
		});
	}

	changeItem(direction: number): void {
		if (this.items.length === 0) return;
		else if (this.items.length < 3) {
			this.items[this.current].active = false;
			this.current = (this.current + direction + this.items.length) % this.items.length;
			this.items[this.current].active = true;
		} else {
			this.items[this.current].active = false;
			if (direction === 1) {
				//forward (right) >
				const next = (this.current + 1) % this.items.length;

				this.items[next].active = true;
				this.current = next;
			} else {
				//backward (left) <
				const prev = (this.current - 1 + this.items.length) % this.items.length;

				this.items[prev].active = true;
				this.current = prev;
			}
		}
	}
}
