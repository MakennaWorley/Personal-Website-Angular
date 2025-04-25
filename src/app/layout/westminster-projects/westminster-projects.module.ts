import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { WestminsterProjectsComponent } from './westminster-projects.component';

@NgModule({
	imports: [CommonModule, CarouselComponent, WestminsterProjectsComponent],
	exports: [WestminsterProjectsComponent]
})
export class WestminsterProjectsModule {}
