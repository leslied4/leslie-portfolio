// Import images
import Flopay from '../images/flopay.PNG';
import Mfinance from '../images/mfinance.PNG';
import Lemon from '../images/lemon.PNG';
import Onango from '../images/onango.PNG';
import Firstline from '../images/firstline.PNG';
// import Puppeteer from '../images/puppeteer.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	details: [
		{
			id: 1,
			title: 'Mfinance',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: true,
			link: 'https://mbackofficehq.com/',
			description: 'A platform for banks to manage their customers and services. A server based application built with Ruby on Rails that creates a banking platform that allows financial service providers to manage their value added services including USSD and SMS.',
			hasImage: true,
			img: Mfinance,
			category: ''
		},
		{
			id: 2,
			title: 'Lemon',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: true,
			link: 'https://lemon.nfortics.com/login',
			description: 'Client server application. Vue JS as the frontend framework and Ruby on Rails for backend. This application is built to enable lenders (loan givers) manage every single aspect of the loan request and recipt flow. Track transactions, assign loan limits to customers and more, and more on the Lemon application',
			hasImage: true,
			img: Lemon,
			category: ''
		},
		{
			id: 3,
			title: 'Flopay',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: true,
			link: 'https://www.flopay.io/',
			description: 'Flopay provides a payment API which can be added to any application to allow users integrate payment methods into their own applications. Front end Built with Vue JS and backend with Ruby on Rails',
			hasImage: true,
			img: Flopay,
			category: ''
		},
		{
			id: 4,
			title: 'Onango',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: true,
			link: 'https://www.onango.com/en',
			description: 'Contribution to Onango Ghana, Nigeria and Ivory Coast loan services. Onango Ghana Shortcode: *408#',
			hasImage: true,
			img: Onango,
			category: ''
		},
		{
			id: 5,
			title: 'Firstline24 HMS',
			publishDate: 'Jan 06, 2022',
			tags: 'UI/UX / Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: true,
			link: 'https://firstline24.com/',
			description: 'Health Management System for Firstline24. Integrates complex systems and services which contribute to proper management of health and compliance.',
			hasImage: true,
			img: Firstline,
			category: ''
		},
		{
			id: 6,
			title: 'Billpoint',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: false,
			link: '',
			description: 'Financial Service Provider Management System. Built in Collaboration with Pensions Funds for loan services',
			hasImage: false,
			img: '',
			category: ''
		},
		{
			id: 7,
			title: 'WAEC',
			publishDate: 'Jul 26, 2021',
			tags: 'Backend',
			client_name: 'Nfortics',
			hasWebsite: false,
			link: '',
			description: 'Contribution to WAEC USSD result checker *944#',
			hasImage: false,
			img: '',
			category: ''
		},
		{
			id: 8,
			title: 'VAGO',
			publishDate: 'Nov 01, 2022',
			tags: 'Frontend / Backend',
			client_name: 'Nfortics',
			hasWebsite: false,
			link: '',
			description: 'Contribution to Vanguard Assurance (VAGO) loan services. From customer management to transaction tracking, among others. USSD application built with Ruby on Rails and front end with Vue JS. Register and Access VAGO services on MTN merchant mobile money shortcode *171#',
			hasImage: false,
			img: '',
			category: ''
		},
		{
			id: 9,
			title: 'RiskIQ',
			publishDate: 'Jul 26, 2021',
			tags: 'Backend',
			client_name: 'Nfortics',
			hasWebsite: false,
			link: '',
			description: 'Credit scoring, Identity verification, Fraud detection & all-round risk profiling application. This is an API only application developed using Ruby and the Ruby on rails framework',
			hasImage: false,
			img: '',
			category: ''
		},
		{
			id: 10,
			title: 'Loan Disburser Automater',
			publishDate: 'Feb 02, 2022',
			tags: 'Backend',
			client_name: 'Nfortics',
			hasWebsite: false,
			link: '',
			description: 'Loan Disbursement automator build with puppeteer. Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol',
			hasImage: true,
			img: '',
			category: ''
		},


	],
	// ProjectImages: [
	// 	{
	// 	id: 1,
	// 		title: 'Kabul Project Management UI',
	// 		img: Image1,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Kabul Project Management UI',
	// 		img: Image2,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Kabul Project Management UI',
	// 		img: Image3,
	// 	},
	// ],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
			},
			{
				id: 2,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
			},
			{
				id: 3,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
			},
			{
				id: 4,
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	// RelatedProject: {
	// 	title: 'Related Projects',
	// 	Projects: [
	// 		{
	// 			id: 1,
	// 			title: 'Mobile UI',
	// 			img: Image4,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Web Application',
	// 			img: Image5,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'UI Design',
	// 			img: Image6,
	// 		},
	// 		{
	// 			id: 4,
	// 			title: 'Kabul Mobile App UI',
	// 			img: Image3,
	// 		},
	// 	],
	// },
};
