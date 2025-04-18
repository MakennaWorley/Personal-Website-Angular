import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-westminster-projects',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './westminster-projects.component.html',
  styleUrl: './westminster-projects.component.css',
})
export class WestminsterProjectsComponent {
  javaProjects = [
    {
      title: 'Uno',
      subtitle: 'Final project for CMPT 201: Intro to CS<br/>Fall 2022',
      paragraphs: ['Our final for CMPT201 was creating an uno game and our own uno player in Java.', 'CMPT201, Project, MyPlayer6.java'],
      active: true,
    },
    {
      title: 'Asteroids',
      subtitle: 'Final for CMPT202: Data Structures<br/>Spring 2023',
      paragraphs: ['Our final for CMPT202 was recreating a simplified version of Asteroids in Java.', 'CMPT202 Milestone 4'],
      active: false,
    },
  ];

  rProjects = [
    {
      title: 'Data220 Final Project',
      subtitle: '',
      paragraphs: [],
      iframeSrc: 'assets/resources/DATA220-Project.html',
      active: true,
    },
    {
      title: 'DATA300EE Final Project',
      subtitle: '',
      paragraphs: [],
      iframeSrc: 'assets/resources/DATA300EE-Final-Project.nb.html',
      active: false,
    },
  ];
}
