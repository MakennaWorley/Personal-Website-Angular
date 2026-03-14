import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-personal-projects',
	imports: [],
	templateUrl: './personal-projects.component.html',
	styleUrl: './personal-projects.component.scss'
})
export class PersonalProjectsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private viewportScroller: ViewportScroller
	) {}

	ngOnInit(): void {
		// Scroll to fragment when component loads
		this.route.fragment.subscribe((fragment) => {
			if (fragment) {
				setTimeout(() => {
					const element = document.getElementById(fragment);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				}, 100);
			}
		});

		// Also handle navigation events
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
			this.route.fragment.subscribe((fragment) => {
				if (fragment) {
					setTimeout(() => {
						const element = document.getElementById(fragment);
						if (element) {
							element.scrollIntoView({ behavior: 'smooth' });
						}
					}, 100);
				}
			});
		});
	}
}
