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
	visibleItems: any[] = [];
	animating = false;
	direction: 'left' | 'right' = 'right';

	current = 0;
	itemWidth = 0;

	@ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['items'] && this.items.length > 0) {
			const initialIndex = this.items.findIndex((item) => item.active);
			this.current = initialIndex !== -1 ? initialIndex : 0;
			this.setVisibleItems();

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

	setVisibleItems() {
		const len = this.items.length;
		const prev2 = (this.current - 2 + len) % len;
		const prev = (this.current - 1 + len) % len;
		const next = (this.current + 1) % len;
		const next2 = (this.current + 2) % len;

		this.visibleItems = [this.items[prev2], this.items[prev], this.items[this.current], this.items[next], this.items[next2]];
	}

	changeItem(direction: number): void {
		if (this.animating) return;

		if (this.items.length === 0) return;
		else if (this.items.length < 3) {
			this.items[this.current].active = false;
			this.current = (this.current + direction + this.items.length) % this.items.length;
			this.items[this.current].active = true;
		} else {
			this.direction = direction === 1 ? 'right' : 'left';
			this.animating = true;
			this.items[this.current].active = false;

			setTimeout(() => {
				this.current = (this.current + direction + this.items.length) % this.items.length;

				this.setVisibleItems();
				this.items[this.current].active = true;

				this.animating = false;
			}, 500);
		}
	}

	getTransform(): string | void {
		const offset = this.itemWidth;
		if (this.direction === 'left') return `translateX(${offset}px)`;
		if (this.direction === 'right') return `translateX(-${offset}px)`;
	}
}
