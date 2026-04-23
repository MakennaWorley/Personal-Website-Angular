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
				'As the final project for my Algorithms course, I implemented and compared two distinct approaches to solving the Convex Hull problem: a brute-force method and a divide-and-conquer algorithm. Using the US Cities dataset from the Bridges package, I constructed geometric hulls that encapsulate various regional datasets, such as the East and West Coasts. This project served as a practical exploration of algorithmic complexity, particularly highlighting how a divide-and-conquer strategy significantly optimizes performance when handling the thousands of data points found in large-scale geographic datasets.',
				'The implementation, provided as both a Jupyter Notebook and a standalone Python script, features visualizations created with Matplotlib to illustrate the calculated boundaries for different city subsets. Beyond just coding the algorithms, I performed comparative analysis on their execution times, noting where the O(n^3) brute-force approach became computationally prohibitive compared to the more efficient O(n \log n) divide-and-conquer alternative. This project underscores my proficiency in algorithm design, data visualization, and performance profiling within a Python environment.'
			],
			iframeSrc: [],
			presentationUrl: [
				{
					url: 'https://docs.google.com/presentation/d/e/2PACX-1vQGhVQVKOha0ycALrMQzMEeNuEBl6x1ZaNQjrfth0p7byhNwQTvl1OrZoO1ybHkyXfvrnCM5I62eDez/pub',
					label: 'View Convex Hull Presentation'
				}
			],
			github: ['https://github.com/MakennaWorley/Convex-Hull-Python'],
			active: false
		},
		{
			title: 'Zen Spelling',
			subtitle: 'Project for CMPT 322: Software Engineering<br/>Spring 2024',
			paragraphs: [
				'Working alongside Drake AuClaire, Jesse Melanson, and Zoe Durham, I helped develope Zen Spelling, an interactive educational game designed for students in grades 1 through 5. The primary objective of the project was to create an engaging platform that helps young learners improve their spelling and grammar skills through gamified lessons. As a full-stack application, the project utilized JavaScript for the front-end user experience and a Python/Django-based backend to manage game logic and student progress data, all integrated with a SQLite database.',
				'My role in this collaboration focused on ensuring a seamless connection between the interactive game elements and the underlying data structures. We implemented a robust development workflow that included automated database management scripts to streamline local testing and iterative feature updates. This project highlights my ability to work within a software engineering team to deliver a mission-driven product, balancing intuitive UI/UX design with reliable backend architecture to support early childhood education.'
			],
			youtubeId: ['PwMn_Tok4tU'],
			iframeSrc: [],
			presentationUrl: [
				{
					url: 'https://docs.google.com/presentation/d/e/2PACX-1vRuY8Zr0RdyjXJsqT5QYs-PTqDG7HlNPLzqiF2Aiv5CcqwuyZptLS80g0iMQTKrYgtd3VSIuLeu6ooS/pub',
					label: 'View Zen Spelling Presentation'
				}
			],
			github: ['https://github.com/westmini-software-engineering-2024sp/ZenSpelling'],
			active: false
		},
		{
			title: 'MSPrime Predictions on Simulated Data',
			subtitle: 'Project for Data 370: Statistical Learning<br/>Fall 2025',
			paragraphs: [
				'This project is a comprehensive data analysis and machine learning study conducted as the project for my Statistical Learning course. Utilizing Python’s robust data science ecosystem—including Pandas, Scikit-Learn, and Seaborn—I performed a deep dive into a complex dataset to uncover meaningful patterns and build predictive models. The workflow spans the entire data science pipeline, beginning with meticulous data cleaning and exploratory data analysis (EDA) to identify key variables, followed by the implementation of advanced statistical models to solve a specific classification or regression problem.',
				'To ensure the highest level of predictive accuracy, I focused heavily on feature engineering and model optimization. The project demonstrates my ability to evaluate model performance through metrics like cross-validation and confusion matrices, ensuring the results are both statistically sound and actionable. This repository serves as a testament to my technical proficiency in Python and my ability to translate raw data into clear, data-driven insights that can inform real-world decision-making.'
			],
			youtubeId: ['EHk_Ccr5fuA'],
			iframeSrc: [],
			link: ['https://makennaworley-sl-final-python-streamlitapp-7hj55p.streamlit.app/'],
			active: true
		},
		{
			title: 'Matrix Encryption',
			subtitle: 'Final for MATH 362: Topics in Applied Mathematics<br/>Fall 2024',
			paragraphs: [
				'Collaborating with Nic Van der Werf, we developed this project as the final project for our Topics in Applied Mathematics course. The core of this work focuses on the intersection of linear algebra and cryptography, specifically exploring how matrix transformations can be leveraged to encrypt and decrypt textual information. By mapping characters to numerical values and applying invertible matrices as encryption keys, we created a system that ensures data can be obscured and then perfectly reconstructed through modular arithmetic and matrix inversion.',
				'The implementation, housed in a Jupyter Notebook, demonstrates our ability to translate abstract mathematical theorems into functional Python code. Beyond the fundamental mechanics of the Hill Cipher, our collaboration involved optimizing the algorithm to handle varied text lengths and ensuring the stability of the decryption process across different matrix dimensions. This project highlights my interest in applied mathematics and my capacity to work in a team to build secure, algorithmically driven software solutions.'
			],
			github: ['https://github.com/MakennaWorley/Matrix-Encryption-Python'],
			active: false
		},
		{
			title: 'Pacman',
			subtitle: 'Project for CMPT 301: Artificial Intelligence:<br/>Spring 2025',
			paragraphs: [
				'This project was developed for my Artificial Intelligence course and focuses on implementing and evaluating various AI agents within the Pac-Man environment. Using Python, I explored a multi-phased approach to agent development, starting with fundamental search algorithms—such as Breadth-First Search (BFS), Depth-First Search (DFS), and A*—to solve navigation and pathfinding challenges efficiently. These initial stages established a baseline for more complex behaviors, ensuring the agent could traverse mazes and collect pellets while optimizing for distance and cost.',
				'As the project progressed, I moved into advanced AI concepts, including adversarial search and reinforcement learning. I implemented Minimax and Alpha-Beta pruning algorithms to allow Pac-Man to anticipate and react to ghost movements, as well as Q-learning agents that improve their performance over time through environmental interaction. By structuring the repository into distinct parts, I’ve documented the evolution from basic heuristic-based decision-making to sophisticated models that balance risk and reward in a dynamic, competitive space.'
			],
			github: ['https://github.com/MakennaWorley/Pacman-Project-Python'],
			active: false
		}
	];

	javaProjects = [
		{
			title: 'Asteroids',
			subtitle: 'Final for CMPT202: Data Structures<br/>Spring 2023',
			paragraphs: [
				'As the final project for my Data Structures course, I recreated the classic arcade game Asteroids using Java. This project served as a comprehensive application of core object-oriented programming principles and data structure management. I implemented a modular architecture using classes for the game engine, player ship, projectiles, and various celestial bodies. By utilizing inheritance and polymorphism, I was able to manage different shapes—such as polygons for the ship and circles for asteroids—through a unified system, ensuring efficient rendering and collision detection.',
				'Beyond the graphical interface, the project focused on managing dynamic game states and object lifecycles. I utilized various data structures to track active bullets, moving asteroids, and background elements, ensuring smooth performance even as the screen becomes increasingly cluttered. This repository highlights my ability to build a complete, interactive application from the ground up while maintaining clean, organized, and scalable Java code.'
			],
			github: ['https://github.com/MakennaWorley/Asteroids-Java'],
			active: true
		},
		{
			title: 'Uno',
			subtitle: 'Final project for CMPT 201: Intro to CS<br/>Fall 2022',
			paragraphs: [
				'This project serves as the final project for my Introduction to Computer Science course, where I developed a fully functional, text-based version of the card game Uno in Java. The project required building a robust engine to manage deck shuffling, hand distribution, and the complex rules of gameplay. I implemented several automated player classes—including "Eager" and "Somewhat Less Eager" variants—to test different tactical approaches, utilizing object-oriented principles to ensure that each player agent interacted seamlessly with the game’s core state.',
				'The highlight of this project was the development of my "MyPlayer" agent, which utilized a custom strategy designed for competitive play. My custom player successfully won the semester-wide tournament, outperforming agents developed by my peers through optimized card selection and risk management. This repository demonstrates my foundational proficiency in Java and my ability to design winning algorithms within a constrained, rule-based environment.'
			],
			github: ['https://github.com/MakennaWorley/Uno-Project-Java'],
			active: false
		}
	];

	rustProjects = [
		{
			title: 'Custom Chatroom',
			subtitle: 'Final project for CMPT 352: Computer Networks<br/>Fall 2024',
			paragraphs: [
				"Collaborating with Shreeya Maskey, we developed this custom chatroom application for our Computer Networks final project. The project is built around a custom networking protocol designed by our team to handle real-time communication between multiple clients. I primarily focused on the systems-level implementation, building a high-performance server in Rust that manages client connections and message broadcasting. To facilitate rigorous testing of the server's protocol handling and concurrency, I also developed a barebones Rust client that allows for direct interaction through manual command entry.",
				'While the server forms the backbone of the application, the primary user interface is a Java-based client developed by Shreeya. The interaction between the Rust server and the Java client demonstrates our ability to implement cross-language network communication while strictly adhering to a shared protocol specification. This project highlights my experience with TCP/IP socket programming, multi-threaded server architecture, and the practical application of networking protocols in a distributed environment.'
			],
			github: ['https://github.com/MakennaWorley/Custom-Chatroom-JavaRust'],
			active: true
		},
		{
			title: 'LRU Approximation',
			subtitle: 'Extension of Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: [
				'Building upon my work in Operating Systems, I decided to redo my original LRU homework entirely in Rust to explore its memory safety features and performance benefits. This project implements an LRU Approximation algorithm with Page Replacement, designed to mimic the memory management behavior of a real-world operating system. By transitioning from C to Rust, I was able to leverage the Cargo build system and modern error-handling patterns to create a more robust simulation that processes physical memory addresses from a backing store and translates them into page table entries.',
				'The simulation uses an provided BACKING_STORE.bin and a list of logical addresses to calculate page faults and service memory requests. I also included a custom shell script to automate the build and execution process, making it easy to generate a summary of memory access patterns. This project not only serves as a technical extension of my previous homework but also demonstrates my ability to port low-level systems code between languages while maintaining algorithmic integrity.'
			],
			github: ['https://github.com/MakennaWorley/LRU-Approximation-Rust'],
			active: false
		}
	];

	browserProjects = [];

	cProjects = [
		{
			title: 'LRU',
			subtitle: 'Homework 7 for CMPT 351: Operating Systems<br/>Spring 2025',
			paragraphs: [
				'This C file implements a Least Recently Used (LRU) page replacement algorithm, a fundamental concept in operating systems for managing virtual memory. The code defines a linked-list structure where each node represents a page in memory. When a page is accessed, the search function checks if it already exists; if found, the page is moved to the "head" of the list to mark it as the most recently used. If the page is not in memory, a page fault is recorded, and the lru_insert function adds the new page to the head.',
				'A key feature of this implementation is its handling of memory limits. When the number of pages reaches the defined pageFrameCount, the algorithm must "evict" a page to make room for a new one. In this specific code, the eviction logic traverses to the end of the linked list to remove the tail node, which represents the page that has not been accessed for the longest amount of time. This ensures that the most active pages remain in the fast-access frame while older, unused data is cycled out.',
				'This project directly inspired my later Rust reimplementation, where I explored how modern languages can achieve the same low-level performance with improved safety and readability, deepening my comparative understanding of programming paradigms.'
			],
			github: ['https://github.com/MakennaWorley/Operating-Systems-Homework-C/blob/main/LRU.c'],
			active: true
		},
		{
			title: 'BitMapping in C',
			subtitle: 'Project 2 for CMPT 251: Computer Systems and Programs<br/>Fall 2023',
			paragraphs: [
				'This project is a C-based image processing application that provides a suite of tools for manipulating BMP files at the pixel level. By mapping bitmap files directly into memory using system calls like mmap, I implemented a series of custom algorithms to transform images without relying on external libraries. The codebase includes functions for reading and writing 24-bit color depth bitmaps, as well as several advanced filters such as grayscale conversion, posterization, and geometric transformations like squashing (width reduction) and mirroring.',
				'A core component of this project is the interaction between low-level memory management and high-level image data. I developed a menu-based system that allows users to load an image and apply multiple effects in succession before saving the final result. Key technical challenges involved calculating file strides for proper memory alignment and manually packing/unpacking RGB values from integer pixel data. This project demonstrates my proficiency in systems programming, particularly in using C for direct hardware/memory interaction and implementing efficient algorithmic solutions for data-intensive tasks.'
			],
			github: ['https://github.com/MakennaWorley/Systems-Homework-C/blob/main/project2/project2.c'],
			active: false
		}
	];

	phpProjects = [
		{
			title: 'Chess Website',
			subtitle: 'Final project for CMPT 307: Databases<br/>Fall 2023',
			paragraphs: [
				"This project was developed as my final for Databases and showcases a full-stack web application built on the LAMP stack (Linux, Apache, MySQL, PHP). The site is designed to interface with a relational database to manage chess-related data, allowing users to perform standard CRUD operations—Create, Read, Update, and Delete. By leveraging PHP's Data Objects (PDO), I implemented secure and efficient database queries to handle search functionality and data persistence, ensuring that all interactions with the MySQL backend are both reliable and safe from common vulnerabilities.",
				"Since its initial submission, I have modified the codebase to run locally using MAMP, making it independent of specific university servers while maintaining the original logic. The front-end utilizes a combination of JavaScript and CSS to provide a clean, interactive user experience that complements the backend's data-driven focus. This repository highlights my ability to design and implement a complete database-driven website, from schema design and relationship management to front-end integration and local environment configuration."
			],
			github: ['https://github.com/MakennaWorley/Chess-Website-LAMP'],
			active: true
		}
	];

	randomProjects = [
		{
			title: 'Quicksort in Arm Assembly',
			subtitle: 'Extra credit from CMPT 328: Computer Architecture<br/>Spring 2023',
			paragraphs: [
				'This file represents a deep dive into low-level systems programming, specifically focusing on ARM Assembly language. As a core component of my Computer Architecture coursework, I developed this code to perform direct manipulation of registers and memory addresses, implementing specific algorithmic logic at the machine level. The project required a meticulous understanding of the ARM instruction set, including data processing, flow control through branching, and the nuances of the fetch-decode-execute cycle within the CPU.',
				'The code is written to be executed within a simulator or on an ARM-based microcontroller, demonstrating proficiency in optimizing performance by managing hardware resources manually. Developing this project allowed me to bridge the gap between high-level logic and physical hardware execution, refining my ability to debug at the register level and understand how compilers translate high-level languages into executable machine code. This repository stands as a key example of my ability to handle the rigorous demands of low-level software development and computer architecture design.'
			],
			github: ['https://github.com/MakennaWorley/ARM-Assembly/blob/main/homework%202.1/problem2.webs'],
			active: true
		},
		{
			title: 'Pokedex',
			subtitle: 'Project 2 for CMPT 341: Programming Languages<br/>Fall 2024',
			paragraphs: [
				"This project is a dedicated Pokédex application developed entirely in Pascal as part of my Programming Languages coursework. The application is designed to process and manage a dataset of Pokémon stored in a CSV format, providing a structured interface for data manipulation. Users can load the database, view the complete list of Pokémon, and perform detailed operations such as adding new entries or updating existing ones. The project also features a statistical analysis tool that calculates the average base stats across the entire Pokédex, offering a high-level overview of the team's power level.",
				'The implementation focuses on the procedural strengths of Pascal, utilizing file I/O to read and write changes back to a new CSV file to ensure data persistence. By managing complex records and arrays, I built a reliable system that balances data integrity with user accessibility. This repository serves as a practical exploration of legacy programming languages, demonstrating my ability to adapt modern data management needs to various language paradigms while delivering a functional and interactive software solution.'
			],
			github: ['https://github.com/MakennaWorley/Pokedex-Pascal'],
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
