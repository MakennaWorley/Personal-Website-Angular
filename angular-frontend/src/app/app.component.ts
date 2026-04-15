import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';

const BASE_URL = 'https://makennaworley.com';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'personal_website';

	constructor(
		private metaService: Meta,
		private router: Router,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit(): void {
		this.metaService.updateTag(
			{ name: 'google-site-verification', content: environment.googleSiteVerification },
			'name="google-site-verification"'
		);

		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
			this.updateCanonical(event.urlAfterRedirects);
		});
	}

	private updateCanonical(url: string): void {
		const path = url.split('?')[0];
		const canonical = BASE_URL + (path === '/' ? '/' : path);

		let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
		if (!link) {
			link = this.document.createElement('link');
			link.setAttribute('rel', 'canonical');
			this.document.head.appendChild(link);
		}
		link.setAttribute('href', canonical);
	}
}
