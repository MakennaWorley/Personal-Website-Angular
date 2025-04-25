import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestminsterProjectsComponent } from './westminster-projects.component';

describe('WestminsterProjectsComponent', () => {
	let component: WestminsterProjectsComponent;
	let fixture: ComponentFixture<WestminsterProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WestminsterProjectsComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(WestminsterProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
