import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
	selector: 'app-base',
	imports: [RouterOutlet, FooterComponent, HeaderComponent, NavbarComponent],
	templateUrl: './base.component.html',
	styleUrl: './base.component.scss'
})
export class BaseComponent {}
