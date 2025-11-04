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
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 2',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: true
		},
		{
			title: 'Project 3',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 4',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 5',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 6',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 7',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		},
		{
			title: 'Project 8',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		}
	];

	testingProject = [
		{
			title: 'Project 1',
			paragraphs: [
				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',

				'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
			],
			active: false
		}
	];

	pythonProjects = [
		{
			title: 'Convex Hull',
			subtitle: 'Final project for CMPT 306: Algorithms<br/>Fall 2024',
			paragraphs: [
				'This project implemented four different algorithms—brute force and divide-and-conquer—to construct convex hulls over geographic datasets of U.S. cities from the Bridges package. Using Python and Jupyter Notebook, I compared the time complexity, scalability, and visual behavior of each method on data ranging from small regional samples to large multi-thousand-point sets. Because the brute force implementation grows quadratically, it can take over 20 minutes for large datasets, while the divide-and-conquer approaches achieves far faster runtimes. The project also required filtering and preprocessing data based on population thresholds to manage computation and visual clarity.',

				'I chose this project because it highlights critical thinking and algorithmic design, both key Computer Science learning goals. It deepened my understanding of computational geometry and complexity analysis by forcing me to reason about algorithm efficiency in practice rather than only in theory. Debugging visual output and timing comparisons encouraged creativity in how I displayed and validated the results, while documenting my findings through clear visualizations and explanatory comments strengthened communication. Overall, this assignment demonstrates my ability to translate formal algorithmic reasoning into applied data analysis and visualization.'
			],
			iframeSrc: [
				'https://docs.google.com/presentation/d/e/2PACX-1vQGhVQVKOha0ycALrMQzMEeNuEBl6x1ZaNQjrfth0p7byhNwQTvl1OrZoO1ybHkyXfvrnCM5I62eDez/pubembed?start=false&loop=false&delayms=5000'
			],
			link: ['https://github.com/MakennaWorley/Convex-Hull-Python'],
			active: false
		},
		{
			title: 'Zen Spelling',
			subtitle: 'Project for CMPT 322: Software Engineering<br/>Spring 2024',
			paragraphs: [
				'I chose this project because it let our team (Drake AuClaire, Jesse Melanson, Zoe Durham, and myself) to simulate an industry workflow while building something joyful and useful for elementary learners. We implemented an interactive spelling game with a Django backend and a jQuery/p5.js front end, iterating through R1–R3 to add core gameplay (login, randomized questions, tile placement, stats screen), polish (art, music, multiple board sizes), and student/teacher features (profiles, medals, hints, and progress views), with accessibility considerations for color-blind and hard-of-hearing students. The work showcases software design decisions under constraints, hands-on problem solving (e.g. screen-independent tile math), and pragmatic tradeoffs (manual testing over JUnit given scope).',

				'This project directly supports the CS learning goal of software design & development (Django MVC patterns, data modeling, and front-end architecture) and multiple Westminster university-wide goals: Critical Thinking (debugging tricky UI logic and timing), Creativity (visual design, animations, and sound to enhance engagement), Collaboration (Agile tickets, standups, and disciplined branching after early Git missteps), and Communication (clear in-team handoffs plus a public demo/presentation). We also connected with Global Responsibility by building with accessibility in mind, ensuring the game communicates feedback through more than color and supports a broader set of learners.'
			],
			iframeSrc: [
				'https://www.youtube.com/embed/PwMn_Tok4tU?si=pNk5cS5Cie10BEA3',
				'https://docs.google.com/presentation/d/e/2PACX-1vRuY8Zr0RdyjXJsqT5QYs-PTqDG7HlNPLzqiF2Aiv5CcqwuyZptLS80g0iMQTKrYgtd3VSIuLeu6ooS/pubembed?start=false&loop=false&delayms=5000'
			],
			link: ['https://github.com/westmini-software-engineering-2024sp/ZenSpelling'],
			active: true
		},
		{
			title: 'Matrix Encryption',
			subtitle: 'Final for MATH 362: Topics in Applied Mathematics<br/>Fall 2024',
			paragraphs: [
				'This project explored the use of linear algebra and matrix operations in text encryption and decryption, demonstrating how mathematical concepts can be applied to modern cryptography. Implemented in Python, the project used matrix multiplication and modular arithmetic to convert plaintext into encrypted numerical forms and then recover the original message through inverse matrices. Nic Van der Werf and I experimented with error handling for non-invertible matrices, character encoding, and the challenges of preserving message integrity across arbitrary text lengths. The project connected theory to computation, showing how abstract mathematical tools can directly serve data security applications.',

				'I selected this assignment because it integrates critical thinking and creativity through the design of a custom encryption system and bridges mathematical reasoning with computer science practice, aligning with the CS learning goal of algorithmic understanding. By translating mathematical procedures into executable code, I strengthened both my analytical and technical communication skills. This project also illustrates global responsibility—understanding the importance of secure data transmission in an increasingly digital world—and reflects Westminster’s emphasis on applying theoretical knowledge to real-world contexts.'
			],
			link: ['https://github.com/MakennaWorley/Matrix-Encryption-Python'],
			active: false
		},
		{
			title: 'Pacman',
			subtitle: 'Project for CMPT 301: Artificial Intelligence:<br/>Spring 2025',
			paragraphs: [
				'This project implemented a series of intelligent agents in Python to play the classic Pacman game, using algorithms such as reflex agents, minimax search, alpha-beta pruning, and expectimax to model decision-making under uncertainty. Each agent improved its performance through iterative refinement, balancing offensive (ghost avoidance, food optimization) and defensive (survival) strategies. The assignment demonstrated how abstract AI principles—state space search, evaluation functions, and adversarial reasoning—can be directly applied to a dynamic, visual environment.',

				'I chose this project because it embodies the computer science learning goals of algorithmic reasoning, problem-solving, and software design while engaging multiple Westminster university-wide goals. It strengthened critical thinking through analyzing and optimizing agent logic, and creativity by tuning heuristics and experimenting with new strategies. Overall, this work demonstrates the synthesis of theoretical AI algorithms with practical programming to create adaptive, data-driven systems.'
			],
			link: ['https://github.com/MakennaWorley/Pacman-Project-Python'],
			active: false
		}
	];

	javaProjects = [
		{
			title: 'Asteroids',
			subtitle: 'Final for CMPT202: Data Structures<br/>Spring 2023',
			paragraphs: [
				'In this project I recreated the classic arcade game Asteroids using Java, implementing core mechanics such as spaceship thrust and rotation, asteroid field generation, collision detection, and screen-wrapping movement. The implementation involved designing a game loop architecture, modeling object motion (velocity, rotation, inertia), handling user input for thrust and firing, managing multiple asteroids (including splitting or removal on collision), and ensuring continuous gameplay dynamics. A key challenge was correctly modelling the physics of motion and wrap-around behavior, as well as maintaining performance as object counts increased.',

				'I chose this assignment because it aligns strongly with the CS learning goals of software design & development (architecting classes for game entities, reuse, modularization), algorithmic reasoning (implementing collision detection, object lifecycle management, game state updates), and the wider Westminster goals of Creativity (reinterpreting a classic game in a new context, adding features or personal touches) and Critical Thinking (debugging complex motion/interaction logic). Through building a fully functional, interactive game, I deepened my understanding of discrete simulation, real-time responsiveness, and object-oriented design in a way that extends far beyond simple console programs.'
			],
			link: ['https://github.com/MakennaWorley/Asteroids-Java'],
			active: true
		},
		{
			title: 'Uno',
			subtitle: 'Final project for CMPT 201: Intro to CS<br/>Fall 2022',
			paragraphs: [
				'This project involved creating a fully functional, text-based Uno game in Java, complete with a deck of custom cards, player strategies, and a turn-based game engine. The assignment emphasized algorithmic design, object-oriented programming, and logic management, as I implemented player classes with unique decision-making methods. My custom MyPlayer class competed in a class-wide tournament and ultimately won, demonstrating the effectiveness of my strategic heuristics for color and card selection, priority weighting, and game state awareness. The project also required handling exception cases such as draw loops, card validation, and turn order logic, ensuring reliable gameplay under varied conditions.',

				'I selected this project because it reflects both the software design and algorithmic reasoning learning goals within Computer Science while also engaging Westminster’s critical thinking, creativity, and communication outcomes. Designing and refining a winning player required analyzing probability, anticipating opponent behavior, and balancing offensive versus defensive strategies—key elements of computational thinking. The collaborative environment of the class tournament encouraged peer learning and iterative improvement. Ultimately, this project was a rewarding intersection of mathematical reasoning, object-oriented architecture, and playful experimentation, showcasing how logic and creativity can coexist in software development.'
			],
			link: ['https://github.com/MakennaWorley/Uno-Project-Java'],
			active: false
		}
	];

	rustProjects = [
		{
			title: 'Custom Chatroom',
			subtitle: 'Final project for CMPT 352: Computer Networks<br/>Fall 2024',
			paragraphs: [
				'For this project, I worked with my partner, Shreeya Maskey, designed and implemented a cross-language chatroom application that connected a Java-based client to a Rust-based server via a custom TCP protocol. The protocol—jointly designed by Jesse Melanson, Scott Ruiz Gomez, Shreeya Maskey, and myself—defined structured message headers and JSON-formatted payloads to support multi-user communication. I developed the Rust server, which handled concurrent client sessions, message broadcasting, and protocol compliance, as well as a bare-bones Rust client for testing. This required implementing socket programming, thread management, and error handling in Rust to ensure reliable and scalable real-time communication. The project was both a functional chat application and a practical exercise in interoperability between programming languages.',

				'I selected this project because it embodies the computer science learning goals of systems and network design, software development, and collaborative engineering while engaging Westminster’s broader goals of critical thinking, collaboration, and communication. Building and debugging a concurrent network server demanded analytical reasoning about synchronization and protocol flow, while designing clean message structures fostered clear cross-team communication. The project also reflects creativity and global responsibility by exploring open communication tools and demonstrating how diverse programming ecosystems can interact securely and efficiently. Overall, this assignment solidified my understanding of network protocols, concurrency, and full-stack integration between Rust and Java.'
			],
			link: ['https://github.com/MakennaWorley/Custom-Chatroom-JavaRust'],
			active: true
		},
		{
			title: 'LRU Approximation',
			subtitle: 'Extension of Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: [
				'This project reimplemented a Least Recently Used (LRU) Clock Approximation algorithm in Rust, extending a prior homework assignment to achieve greater performance, safety, and code clarity. The goal was to simulate memory management behavior, tracking page faults and replacements across a series of virtual memory accesses provided through an address trace and backing store file. The program builds and runs via Cargo and outputs performance statistics—either to the terminal or to a file—providing insight into cache hit rates and algorithm efficiency. By leveraging Rust’s strong memory-safety guarantees, I was able to reduce common pointer and concurrency errors while improving runtime consistency compared to my earlier C-based implementation.',

				'I chose this project because it demonstrates the computer science learning goals of systems programming, algorithmic reasoning, and software design, as well as Westminster’s goals of critical thinking and creativity. Translating a memory-management algorithm into Rust required deep understanding of data structure design and resource management while adapting low-level logic to a high-level, type-safe environment. This process enhanced my ability to reason about efficiency and correctness at the hardware–software interface. It also strengthened my technical communication through clear documentation and output formatting, making the code both educational and maintainable.'
			],
			link: ['https://github.com/MakennaWorley/LRU-Approximation-Rust'],
			active: false
		}
	];

	browserProjects = [];

	cProjects = [
		{
			title: 'LRU',
			subtitle: 'Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: [
				'This project implemented a Least Recently Used (LRU) Page Replacement Algorithm in C as part of my Operating Systems coursework. The assignment simulated virtual memory management by reading a sequence of memory addresses from a file and determining when to replace pages in physical memory using the LRU policy. The program maintained arrays and counters to track page hits and faults, producing performance statistics such as total references, number of faults, and hit rate. Completing this assignment required careful control of pointers, manual memory management, and performance debugging to ensure correctness in the simulation’s output.',

				'I selected this project because it reflects core computer science learning goals in systems-level programming and algorithmic reasoning, as well as Westminster’s critical thinking and communication outcomes. Implementing page replacement at this level helped me understand how theoretical OS concepts—like page tables, memory access, and caching—translate into actual processes and data structures. It also challenged me to think about efficiency and correctness under tight constraints. This project directly inspired my later Rust reimplementation, where I explored how modern languages can achieve the same low-level performance with improved safety and readability, deepening my comparative understanding of programming paradigms.'
			],
			link: ['https://github.com/MakennaWorley/Operating-Systems-Homework-C/blob/main/LRU.c'],
			active: true
		},
		{
			title: 'BitMapping in C',
			subtitle: 'Project 2 for CMPT 251: Computer Systems and Programs<br/>Fall 2023',
			paragraphs: [
				'For this assignment, I implemented various image-processing functions in C that operate directly on BMP file data. Key features included converting full-color images to grayscale, “squishing” (scaling/compressing) the image data, and manipulating raw pixel values and file headers to maintain bitmap integrity. Working in C required careful attention to pointer arithmetic, manual memory management, and binary file I/O—reading and writing the BMP header, pixel arrays, and ensuring correct padding and alignment for row data.',

				'I chose this project because it strongly reflects the Computer Science learning goals of software design & development (structuring modular functions for image operations), algorithmic reasoning (designing efficient pixel operations and scaling logic), and systems programming (low-level manipulation of files and memory). It also engages Westminster’s university-wide goals of critical thinking (debugging subtle binary format issues), and creativity (designing and implementing novel image transformations). Through this project, I deepened my understanding of how higher-level image libraries operate under the hood and gained confidence working close to the hardware/data interface.'
			],
			link: ['https://github.com/MakennaWorley/Systems-Homework-C/blob/main/project2/project2.c'],
			active: false
		}
	];

	phpProjects = [
		{
			title: 'Chess Website',
			subtitle: 'Final project for CMPT 307: Databases<br/>Fall 2023',
			paragraphs: [
				'This project created a full web application using the LAMP stack—Linux (later macOS), Apache, MySQL, and PHP—to manage a relational database of chess information. The site supports core CRUD operations (create, read, update, and delete), allowing users to search for, add, and modify entries within the database. The project emphasized the interaction between the front-end interface and the SQL backend, requiring the design of normalized relational tables and the use of prepared statements to maintain data integrity. After submission, I adapted the environment to run locally through MAMP on macOS, confirming that the application was portable beyond the university server configuration.',

				'I chose this project because it embodies the computer science learning goals of software design, database management, and systems integration, while engaging Westminster’s critical thinking, communication, and creativity goals. Building a database-driven website required analytical reasoning to design relational schemas, problem-solving to debug server-side connections, and clear communication through user interface design and documentation. The project also reflects global responsibility by emphasizing the creation of accessible, functional, and secure database applications—skills essential to modern, data-driven software engineering.'
			],
			link: ['https://github.com/MakennaWorley/Chess-Website-LAMP'],
			active: true
		}
	];

	randomProjects = [
		{
			title: 'Quicksort in Arm Assembly',
			subtitle: 'Extra credit from CMPT 328: Computer Architecture<br/>Spring 2023',
			paragraphs: [
				'This project involved writing and executing programs in ARM assembly language using WebARM, Westminster’s internal simulator for ARM architecture. The primary focus was understanding how high-level algorithms translate into low-level instruction sequences, register operations, and stack manipulation. My most significant success was implementing a fully functional quicksort algorithm entirely in assembly, which required precise control of branching, recursion, and memory addressing. The project deepened my understanding of how processors execute instructions and how efficiency at the machine level affects program performance.',

				'I chose this project because it strongly supports the computer science learning goals of algorithmic reasoning, systems programming, and software design, while aligning with Westminster’s critical thinking and creativity outcomes. Debugging and optimizing assembly code required a methodical and analytical mindset, while structuring the quicksort algorithm at the instruction level encouraged creative problem-solving within strict constraints. This project also reinforced communication and collaboration, as clear commenting and peer discussions were essential for understanding and debugging such low-level code. Overall, it represents one of the most technically challenging and rewarding demonstrations of how theory meets hardware execution in computer science.'
			],
			link: ['https://github.com/MakennaWorley/ARM-Assembly'],
			active: true
		},
		{
			title: 'Pokedex',
			subtitle: 'Project 2 for CMPT 341: Programming Languages<br/>Fall 2024',
			paragraphs: [
				'This project created a simple yet fully functional Pokédex application written entirely in Pascal, demonstrating file handling, data structures, and user interaction within a procedural programming paradigm. The program reads Pokémon data from a CSV file, displays the dataset, allows users to add and update entries, calculates average statistics, and saves all modifications to a new CSV file. By working within Pascal’s constraints—manual type definitions, file I/O operations, and limited library support—I strengthened my understanding of fundamental programming logic and control flow without reliance on modern abstractions.',

				'I chose this project because it highlights the computer science learning goals of software design and algorithmic reasoning, while engaging Westminster’s critical thinking, creativity, and communication outcomes. Managing structured data and implementing CSV operations in Pascal required thoughtful problem decomposition and precise syntax management. It also encouraged creativity in designing a user-friendly, menu-driven interface despite the language’s minimalism. Through this project, I deepened my appreciation for language design and program structure—skills that directly inform my later work in more modern ecosystems like Rust and Python.'
			],
			link: ['https://github.com/MakennaWorley/Pokedex-Pascal'],
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
