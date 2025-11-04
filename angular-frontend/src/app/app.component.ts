import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'personal_website';

	constructor(private metaService: Meta) {}

	ngOnInit(): void {
		this.metaService.updateTag(
			{ name: 'google-site-verification', content: environment.googleSiteVerification },
			'name="google-site-verification"'
		);
	}
}
