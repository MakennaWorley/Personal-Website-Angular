import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
	selector: 'app-westminster-projects',
	standalone: true,
	imports: [CommonModule, CarouselComponent],
	templateUrl: './westminster-projects.component.html',
	styleUrl: './westminster-projects.component.scss'
})
export class WestminsterProjectsComponent {
	testingProjects = [
		{
			title: 'Project 1',
			active: false
		},
		{
			title: 'Project 2',
			active: true
		},
		{
			title: 'Project 3',
			active: false
		},
		{
			title: 'Project 4',
			active: false
		},
		{
			title: 'Project 5',
			active: false
		},
		{
			title: 'Project 6',
			active: false
		},
		{
			title: 'Project 7',
			active: false
		},
		{
			title: 'Project 8',
			active: false
		}
	];

	pythonProjects = [
		{
			title: 'Convex Hull',
			subtitle: 'Final project for CMPT 306: Algorithms<br/>Fall 2024',
			paragraphs: [
				'Our final for CMPT306 was to use different algorithms to solve a problem, I chose to work on convex hulls due to their use in Math and Data Science',
				'notebook or presentation'
			],
			active: false
		},
		{
			title: 'Matrix Encryption',
			subtitle: 'Final for MATH 362: Topics in Applied Mathematics<br/>Fall 2024',
			paragraphs: ['Worked with Nic van der Werf to see if we can use Matrics to encrypt data', 'notebook'],
			active: true
		},
		{
			title: 'Pacman',
			subtitle: 'Project for CMPT 301: Artificial Intelligence:<br/>Spring 2025',
			paragraphs: ['All three parts of a pacman game using different stategies for playing pacman via the agents', 'python stuff'],
			active: false
		}
	];

	javaProjects = [
		{
			title: 'Asteroids',
			subtitle: 'Final for CMPT202: Data Structures<br/>Spring 2023',
			paragraphs: ['Our final for CMPT202 was recreating a simplified version of Asteroids in Java.', 'CMPT202 Milestone 4'],
			active: true
		},
		{
			title: 'Uno',
			subtitle: 'Final project for CMPT 201: Intro to CS<br/>Fall 2022',
			paragraphs: ['Our final for CMPT201 was creating an uno game and our own uno player in Java.', 'CMPT201, Project, MyPlayer6.java'],
			active: false
		}
	];

	rustProjects = [
		{
			title: 'Custom Chatroom',
			subtitle: 'Final project for CMPT 352: Computer Networks<br/>Fall 2024',
			paragraphs: [
				'Our final for CMPT352 was creating a custom Chatroom Protocol and then designing both a server and client to interact via that protocol. I worked on the server (coded in Rust) and Shreeya worked on the client using (Java)',
				'server.rs'
			],
			active: true
		},
		{
			title: 'LRU Approximation',
			subtitle: 'Extension of Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: ['Basically homework 7 rewritten in Rust with LRU approximation', 'rust file?'],
			active: false
		}
	];

	browserProjects = [];

	cProjects = [
		{
			title: 'LRU stuff',
			subtitle: 'Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: ['LRU stuff', 'homework7'],
			active: true
		},
		{
			title: 'BitMapping in C',
			subtitle: 'Project 2 for CMPT 251: Computer Systems and Programs<br/>Fall 2023',
			paragraphs: ['Bitmapping in C.', 'query.php'],
			active: false
		}
	];

	phpProjects = [
		{
			title: 'Chess Website',
			subtitle: 'Final project for CMPT 307: Databases<br/>Fall 2023',
			paragraphs: [
				"Using the cs westminster's MySQL server, I built a PHP application to run CRUD opperations on the database. This was later turned into chessweb.",
				'query.php'
			],
			active: true
		}
	];

	randomProjects = [
		{
			title: 'Quicksort in Arm Assembly',
			subtitle: 'Extra credit from CMPT 328: Computer Architecture<br/>Spring 2023',
			paragraphs: ['As extra credit for a homework assignment, the challenge was to code quicksort.', 'pokedexApp.pas'],
			active: true
		},
		{
			title: 'Pokedex',
			subtitle: 'Project 2 for CMPT 341: Programming Languages<br/>Fall 2024',
			paragraphs: ['A simple Pascal app that edits a csv file', 'pokedexApp.pas'],
			active: false
		}
	];

	rProjects = [
		{
			title: 'Data220 Final Project',
			subtitle: '',
			paragraphs: [],
			iframeSrc: 'resources/DATA220-Project.html',
			active: true
		},
		{
			title: 'DATA300EE Final Project',
			subtitle: '',
			paragraphs: [],
			iframeSrc: 'resources/DATA300EE-Final-Project.nb.html',
			active: false
		}
	];
}
