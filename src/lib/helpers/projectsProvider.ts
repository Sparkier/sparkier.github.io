import FilePdfBox from 'svelte-material-icons/FilePdfBox.svelte';
import Github from 'svelte-material-icons/Github.svelte';
import Pen from 'svelte-material-icons/Pen.svelte';
import Web from 'svelte-material-icons/Web.svelte';
import Youtube from 'svelte-material-icons/Youtube.svelte';
import { FunProject, LinkWithIcon, ResearchProject } from '../types';

/**
 * Returns the ResearchProjects within this App
 *
 * @return {[ResearchProject]} returns the research projects used on this page
 */
export function getResearchProjects(): ResearchProject[] {
	const projects = [
		new ResearchProject(
			'Your other Left! Vision-Language Models Fail to Identify Relative Positions in Medical Images',
			[
				'Daniel Wolf',
				'Heiko Hillenhagen',
				'Billurvan Taskin',
				'Alex Bäuerle',
				'Meinrad Beer',
				'Michael Götz',
				'Timo Ropinski'
			],
			'Clinical decision-making relies heavily on understanding relative positions of anatomical structures and anomalies. Therefore, for Vision-Language Models (VLMs) to be applicable in clinical practice, the ability to accurately determine relative positions on medical images is a fundamental prerequisite. Our evaluations suggest that, in medical imaging, VLMs rely more on prior anatomical knowledge than on actual image content for answering relative position questions, often leading to incorrect conclusions. To facilitate further research in this area, we introduce the MIRP – Medical Imaging Relative Positioning – benchmark dataset, designed to systematically evaluate the capability to identify relative positions in medical images.',
			'2025',
			'MICCAI',
			'images/other_left.png',
			[
				new LinkWithIcon(
					'https://link.springer.com/chapter/10.1007/978-3-032-04971-1_65',
					FilePdfBox
				),
				new LinkWithIcon('https://wolfda95.github.io/your_other_left/', Web),
				new LinkWithIcon('https://github.com/Wolfda95/MIRP_Benchmark', Github),
				new LinkWithIcon('https://youtu.be/l0aIRUR4HmE', Youtube)
			]
		),
		new ResearchProject(
			'Cell Painting for cytotoxicity and mode-of-action analysis in primary human hepatocytes',
			[
				'Jessica D Ewald',
				'Katherine L Titterton',
				'Alex Bäuerle',
				'Alex Beatson',
				'Daniil A Boiko',
				'Ángel A Cabrera',
				'Jaime Cheah',
				'Beth A Cimini',
				'Bram Gorissen',
				'Thouis Jones',
				'Konrad J Karczewski',
				'David Rouquie',
				'Srijit Seal',
				'Erin Weisbart',
				'Brandon White',
				'Anne E Carpenter',
				'Shantanu Singh'
			],
			'We apply image-based profiling (the Cell Painting assay) and two cytotoxicity assays (metabolic and membrane damage readouts) to primary human hepatocytes after exposure to eight concentrations of 1085 compounds that include pharmaceuticals, pesticides, and industrial chemicals with known liver toxicity-related outcomes. We found that the morphological profiles detect compound bioactivity at lower concentrations than standard cytotoxicity assays. In supervised analyses, they predict cytotoxicity and targeted cell-based assay readouts, but not cell-free assay readouts. We envision that image-based profiling could serve as a key component of modern safety assessment.',
			'2025',
			'bioRxiv',
			'images/tox.png',
			[new LinkWithIcon('https://pmc.ncbi.nlm.nih.gov/articles/PMC11785178/', FilePdfBox)]
		),
		new ResearchProject(
			'A Survey on Quality Metrics for Text-to-Image Generation',
			[
				'Sebastian Hartwig',
				'Dominik Engel',
				'Leon Sick',
				'Hannah Kniesel',
				'Tristan Payer',
				'Poonam Poonam',
				'Michael Glöckner',
				'Alex Bäuerle',
				'Timo Ropinski'
			],
			'Within this survey, we provide a comprehensive overview of text-to-image quality metrics, and propose a taxonomy to categorize these metrics. Our taxonomy is grounded in the assumption, that there are two main quality criteria, namely compositional quality and general quality, that contribute to the overall image quality. Besides the metrics, this survey covers dedicated text-to-image benchmark datasets, over which the metrics are frequently computed. Finally, we identify limitations and open challenges in the field of text-to-image generation, and derive guidelines for practitioners conducting text-to-image evaluation.',
			'2025',
			'TVCG',
			'images/image_quality.png',
			[new LinkWithIcon('https://ieeexplore.ieee.org/document/11062594', FilePdfBox)]
		),
		new ResearchProject(
			'Humboldt: Metadata-Driven Extensible Data Discovery',
			['Alex Bäuerle', 'Çağatay Demiralp', 'Michael Stonebraker'],
			'Data discovery is crucial for data management and analysis and can benefit from better utilization of metadata. Yet, effectively surfacing metadata through interactive user interfaces (UIs) to augment data discovery poses challenges. Constantly revamping UIs with each update to metadata sources (or providers) consumes significant development resources and lacks scalability and extensibility. In response, we introduce Humboldt, a new framework enabling interactive data systems to effectively leverage metadata for data discovery and rapidly evolve their UIs to support metadata changes.',
			'2024',
			'VLDB 2024 Workshop: Tabular Data Analysis (TaDA)',
			'images/humboldt.png',
			[new LinkWithIcon('https://vldb.org/workshops/2024/proceedings/TaDA/TaDA.14.pdf', FilePdfBox)]
		),
		new ResearchProject(
			'mint: Integrating scientific visualizations into virtual reality',
			[
				'Sergej Geringer',
				'Florian Geiselhart',
				'Alex Bäuerle',
				'Dominik Dec',
				'Olivia Odenthal',
				'Guido Reina',
				'Timo Ropinski',
				'Daniel Weiskopf'
			],
			'We present an image-based approach to integrate state-of-the-art scientific visualization into virtual reality (VR) environments: the mint visualization/VR inter-operation system. We enable the integration of visualization algorithms from within their software frameworks directly into VR without the need to explicitly port visualization implementations to the underlying VR framework—thus retaining their capabilities, specializations, and optimizations.',
			'2024',
			'Journal of Visualization',
			'images/mint.png',
			[
				new LinkWithIcon(
					'https://link.springer.com/article/10.1007/s12650-024-01011-y',
					FilePdfBox
				),
				new LinkWithIcon('https://github.com/UniStuttgart-VISUS/MWK-mint', Github)
			]
		),
		new ResearchProject(
			'An In-depth Look at Gemini’s Language Abilities',
			[
				'Syeda Nahida Akter',
				'Zichun Yu',
				'Aashiq Muhamed',
				'Tianyue Ou',
				'Alex Bäuerle',
				'Ángel Alexander Cabrera',
				'Krish Dholakia',
				'Chenyan Xiong',
				'Graham Neubig'
			],
			'We do an in-depth exploration of Gemini’s language abilities, making two contributions. First, we provide a third-party, objective comparison of the abilities of the OpenAI GPT and Google Gemini models with reproducible code and fully transparent results. Second, we take a closer look at the results, identifying areas where one of the two model classes excels. We perform this analysis over 10 datasets testing a variety of language abilities, including reasoning, answering knowledge-based questions, solving math problems, translating between languages, generating code, and acting as instruction-following agents.',
			'2023',
			'ArXiv',
			'images/gemini.png',
			[
				new LinkWithIcon('https://arxiv.org/pdf/2312.11444.pdf', FilePdfBox),
				new LinkWithIcon('https://Github.com/neulab/gemini-benchmark', Github)
			]
		),
		new ResearchProject(
			'VegaProf: Profiling Vega Visualizations',
			['Junran Yang', 'Alex Bäuerle', 'Dominik Moritz', 'Çağatay Demiralp'],
			'To analyze what a model layer has learned, we present a method that takes into account the entire activation distribution. By extracting similar activation profiles within the high-dimensional activation space of a neural network layer, we find groups of inputs that are treated similarly. These input groups represent neural activation patterns (NAPs) and can be used to visualize and interpret learned layer concepts. We tested our method with a variety of networks and show how it complements existing methods for analyzing neural network activation values.',
			'2023',
			'UIST',
			'images/vegaprof.png',
			[
				new LinkWithIcon('https://arxiv.org/pdf/2212.13670.pdf', FilePdfBox),
				new LinkWithIcon('https://sigmacomputing.Github.io/VegaProf', Web),
				new LinkWithIcon('https://Github.com/sigmacomputing/VegaProf', Github)
			]
		),
		new ResearchProject(
			'Semantic Hierarchical Exploration of Large Image Datasets',
			['Alex Bäuerle', 'Christian van Onzenoodt', 'Daniel Jönsson', 'Timo Ropinski'],
			'Browsing many images at the same time requires either a large screen space or an abundance of scrolling interaction. We address this problem by projecting the images onto a two-dimensional Cartesian coordinate system by combining the latent space of vision neural networks and dimensionality reduction techniques. To alleviate overdraw of the images, we integrate a hierarchical layout and navigation, where each group of similar images is represented by the image closest to the group center. Advanced interactive analysis of images in relation to their metadata is enabled through integrated, flexible filtering based on expressions.',
			'2023',
			'EuroVis Short Papers',
			'images/hie.png',
			[
				new LinkWithIcon('https://diglib.eg.org/handle/10.2312/evs20231051', FilePdfBox),
				new LinkWithIcon('http://nemesis.informatik.uni-ulm.de/frontend/main/', Web),
				new LinkWithIcon('https://Github.com/Sparkier/Hierarchical-Image-Explorer', Github)
			]
		),
		new ResearchProject(
			'Neural Activation Patterns (NAPs): Visual Explainability of Learned Concepts',
			['Alex Bäuerle', 'Daniel Jönsson', 'Timo Ropinski'],
			'We introduce VegaProf, the first performance profiler for Vega visualizations. VegaProf effectively instruments the Vega library by associating the declarative specification with its compilation and execution. Using interactive visualizations, VegaProf enables visualization engineers to interactively profile visualization performance at three abstraction levels: function, dataflow graph, and visualization specification.',
			'2022',
			'arXiv',
			'images/NAPs.png',
			[new LinkWithIcon('https://arxiv.org/pdf/2206.10611.pdf', FilePdfBox)]
		),
		new ResearchProject(
			'Symphony: Composing Interactive Interfaces for Machine Learning',
			[
				'Alex Bäuerle',
				'Ángel Alexander Cabrera',
				'Fred Hohman',
				'Megan Maher',
				'David Koski',
				'Xavier Suau',
				'Titus Barik',
				'Dominik Moritz'
			],
			'Interfaces for machine learning (ML) can help practitioners build robust and responsible ML systems. While existing ML interfaces are effective for specific tasks, they are not designed to be reused, explored, and shared by multiple stakeholders in cross-functional teams. To enable analysis and communication between different ML practitioners, we designed and implemented Symphony, a framework for composing interactive ML interfaces with task-specific, data-driven components that can be used across platforms such as computational notebooks and web dashboards. Symphony helped ML practitioners discover previously unknown issues like data duplicates and blind spots in models while enabling them to share insights with other stakeholders.',
			'2022',
			'CHI',
			'images/symphony.png',
			[
				new LinkWithIcon('https://dl.acm.org/doi/pdf/10.1145/3491102.3502102', FilePdfBox),
				new LinkWithIcon('https://dl.acm.org/doi/10.1145/3491102.3502102', Web),
				new LinkWithIcon('https://www.youtube.com/watch?v=0Q3wIh3AiPs', Youtube)
			]
		),
		new ResearchProject(
			'Where did my Lines go? Visualizing Missing Data in Parallel Coordinates',
			[
				'Alex Bäuerle',
				'Christian van Onzenoodt',
				'Simon der Kinderen',
				'Jimmy Johansson Westberg',
				'Daniel Jönsson',
				'Timo Ropinski'
			],
			"We evaluate visualization concepts for parallel coordinates to represent missing values and focus on the trade-off between the ability to perceive missing values and the concept's impact on common parallel coordinates tasks. We performed a crowd-sourced, quantitative user study with 732 participants comparing the concepts and their variations using five real-world data sets. Based on our findings, we provide suggestions regarding which visual encoding works best depending on the task at focus.",
			'2022',
			'EuroVis',
			'images/pc-missing-data.png',
			[
				new LinkWithIcon(
					'https://viscom.publications.uni-ulm.de/api/uploads/236/pc_missing_data.pdf',
					FilePdfBox
				),
				new LinkWithIcon('https://Github.com/Sparkier/Missing-Coordinates', Github),
				new LinkWithIcon('https://youtu.be/iaGekFD_NNg?t=8', Youtube)
			]
		),
		new ResearchProject(
			'exploRNN: Understanding Recurrent Neural Networks through Visual ' + 'Exploration',
			['Alex Bäuerle', 'Patrick Albus', 'Raphael Störk', 'Tina Seufert', 'Timo Ropinski'],
			'Visualization has proven to be of great help with learning about neural network processes. While most current educational visualizations are targeted towards one specific architecture or use case recurrent neural networks (RNNs), which are capable of processing sequential data, are not covered yet, despite the fact that tasks on sequential data, such as text and function analysis, are at the forefront of deep learning research. Therefore, we propose exploRNN, the first interactively explorable, educational visualization for RNNs.',
			'2022',
			'The Visual Computer',
			'images/exploRNN.png',
			[
				new LinkWithIcon(
					'https://link.springer.com/content/pdf/10.1007/s00371-022-02593-0.pdf',
					FilePdfBox
				),
				new LinkWithIcon('https://mi-pages.informatik.uni-ulm.de/explornn/', Web),
				new LinkWithIcon('https://Github.com/Sparkier/exploRNN', Github)
			]
		),
		new ResearchProject(
			'Visual Identification of Problematic Bias in Large Label Spaces',
			[
				'Alex Bäuerle',
				'Aybuke Gul Turker',
				'Ken Burke',
				'Osman Aka',
				'Timo Ropinski',
				'Christina Greer',
				'Mani Varadarajan'
			],
			'While the need for well-trained, fair ML systems is increasing ever more, measuring fairness for modern models and datasets is becoming increasingly difficult as they grow at an unprecedented pace. Indeed, this often rules out the application of traditional analysis metrics and systems. Addressing the lack of visualization work in this area, we propose guidelines for designing visualizations for such large label spaces, considering both technical and ethical issues. Our proposed visualization approach can be integrated into classical model and data pipelines, and we provide an implementation of our techniques open-sourced as a TensorBoard plug-in.',
			'2022',
			'ArXiv',
			'images/npmiVIS.png',
			[new LinkWithIcon('https://arxiv.org/pdf/2201.06386.pdf', FilePdfBox)]
		),
		new ResearchProject(
			'Net2Vis - A Visual Grammar for Automatically Generating Publication-Tailored CNN Architecture Visualizations',
			['Alex Bäuerle', 'Christian van Onzenoodt', 'Timo Ropinski'],
			'To convey neural network architectures in publications, appropriate ' +
				'visualizations are of great importance. This project is aimed at ' +
				' automatically generating such visualizations from code. Thus, ' +
				'we are able to employ a common visual grammar, reduce the time ' +
				'investment towards these visualizations significantly, and reduce ' +
				'errors in these visualizations.',
			'2021',
			'TVCG',
			'images/net2vis.png',
			[
				new LinkWithIcon(
					'https://viscom.publications.uni-ulm.de/api/uploads/4/09350177.pdf',
					FilePdfBox
				),
				new LinkWithIcon('http://viscom.net2vis.uni-ulm.de/', Web),
				new LinkWithIcon('https://Github.com/viscom-ulm/Net2Vis', Github),
				new LinkWithIcon('https://www.youtube.com/watch?v=LkMRI0Zk4dU', Youtube)
			]
		),
		new ResearchProject(
			'Measuring Model Biases in the Absence of Ground Truth',
			['Osman Aka', 'Ken Burke', 'Alex Bäuerle', 'Christina Greer', 'Margaret Mitchell'],
			'Model fairness is getting more and more important. At the same ' +
				'time, datasets are getting larger and ground truth more sparse. In ' +
				'this paper, we evaluate bias detection algorithms that can be used ' +
				'without ground truth at hand.',
			'2021',
			'AIES',
			'images/nPMI.png',
			[new LinkWithIcon('https://dl.acm.org/doi/pdf/10.1145/3461702.3462557', FilePdfBox)]
		),
		new ResearchProject(
			'What does BERT dream of?',
			['Alex Bäuerle', 'James Wexler'],
			'In this internship project with the Google PAIR team, we ' +
				'investigated how Feature ' +
				'Visualization could be transferred to the text domain and conducted ' +
				'several experiments in this line of research. While Feature ' +
				'Visualization did not work out as well as we hoped, this provides ' +
				'new insight into the realm of deep dreaming with text.',
			'2020',
			'VISxAI',
			'images/bert.png',
			[
				new LinkWithIcon(
					'https://pair-code.Github.io/interpretability/text-dream/explainable/',
					Web
				),
				new LinkWithIcon(
					'https://Github.com/PAIR-code/interpretability/tree/master/text-dream',
					Github
				),
				new LinkWithIcon('https://www.youtube.com/watch?v=wEo9skwDfts&t=10665s', Youtube)
			]
		),
		new ResearchProject(
			'Classifier-Guided Visual Correction of Noisy Labels for Image ' + 'Classification Tasks',
			['Alex Bäuerle', 'Heiko Neumann', 'Timo Ropinski'],
			'Training data plays an essential role in modern applications of ' +
				'machine learning. In this project, we provide means to visually ' +
				'guide users towards potential errors in such datasets. Our guidance,' +
				' which is built on common labeling error types we propose, can be ' +
				'plugged into any classification pipeline.',
			'2020',
			'EuroVis',
			'images/cgvc.png',
			[
				new LinkWithIcon(
					'https://www.uni-ulm.de/fileadmin/website_uni_ulm/iui.inst.100/institut/Papers/viscom/2020/baeuerle_classifier_guided_correction.pdf',
					FilePdfBox
				),
				new LinkWithIcon('https://Github.com/Sparkier/Classifier-Guided-Correction', Github),
				new LinkWithIcon('https://youtu.be/FK1qoDCvdws?t=2412', Youtube)
			]
		),
		new ResearchProject(
			'Automatic identification of crossovers in cryo‐EM images of murine ' +
				'amyloid protein A fibrils with machine learning',
			[
				'Mattthias Weber',
				'Alex Bäuerle',
				'Matthias Schmidt',
				'Matthias Neumann',
				'Marcus Fähndrich',
				'Timo Ropinski',
				'Volker Schmidt'
			],
			'Detecting crossovers in cryo-electron microscopy images of ' +
				'protein fibrils is an important step towards determining ' +
				'the morphological composition of a sample. We propose a combination ' +
				'of classical, stochastic approaches, and machine learning techniques' +
				' towards solving this problem in a novel, much easier way.',
			'2020',
			'Journal of Microscopy',
			'images/fibrils.png',
			[new LinkWithIcon('https://onlinelibrary.wiley.com/doi/pdf/10.1111/jmi.12858', FilePdfBox)]
		),
		new ResearchProject(
			'Convolutional neural network (CNN) applied to respiratory motion ' +
				'detection in fluoroscopic frames',
			['Christoph Baldauf', 'Alex Bäuerle', 'Timo Ropinski', 'Volker Rasche', 'Ina Vernikouskaya'],
			'To support surgeons during surgeries conducted under ' +
				'X-ray-fluoroscopy guidance, real' +
				'time fluoroscopy is augmented with organ shape models. Following ' +
				'initial registration, respiratory motion is a major cause of ' +
				'introducing mismatch to the superposition. This work evaluates ' +
				'convolutional neural networks (CNN) as a novel approach to address ' +
				'this problem.',
			'2019',
			'International Journal of Computer Assisted Radiology and Surgery',
			'images/breath.png',
			[
				new LinkWithIcon(
					'https://www.semanticscholar.org/paper/Convolutional-neural-network-(CNN)-applied-to-in-Baldauf-B%C3%A4uerle/8b5b521bc8489bf691bff08c432d8f865182d7c1',
					FilePdfBox
				)
			]
		)
	];
	projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
	return projects;
}

/**
 * Returns the FunProjects within this App
 *
 * @return {[FunProject]} returns the fun projects used on this page
 */
export function getFunProjects(): FunProject[] {
	const projects = [
		new FunProject(
			'VisPositions',
			'VisPositions is a simple job board for the VIS and HCI community. I wrote a blog post about why I think this is more useful than what is out there.',
			'images/vispositions.svg',
			[
				new LinkWithIcon('https://vispositions.com', Web),
				new LinkWithIcon('https://github.com/Sparkier/vispositions', Github),
				new LinkWithIcon('https://a13x.io/blog/vispositions', Pen)
			]
		),
		new FunProject(
			'OpenHands',
			'OpenHands is an open-source AI coding agent that can write code for you. I worked on the UI for OpenHands for a few months.',
			'images/openhands.png',
			[
				new LinkWithIcon('https://openhands.daytona.io', Web),
				new LinkWithIcon('https://github.com/All-Hands-AI/OpenHands', Github)
			]
		),
		new FunProject(
			'endoftext',
			'endoftext helps you improve your AI prompts in minutes by taking the guesswork out of prompt engineering with suggested edits, prompt rewrites, and automatically generated test cases.',
			'images/eot.png',
			[
				new LinkWithIcon('http://endoftext.app', Web),
				new LinkWithIcon('https://Github.com/end-of-text/endoftext', Github)
			]
		),
		new FunProject(
			'Zeno',
			'Zeno is an AI evalauation platform that helps AI engineers discover how their AI performs, explore their data, uncover failures, and create beautiful, interactive charts.',
			'images/zeno.png',
			[
				new LinkWithIcon('http://zenoml.com', Web),
				new LinkWithIcon('https://Github.com/zeno-ml/zeno-hub', Github)
			]
		),
		new FunProject(
			'luna',
			'Inspired by Lucid, Luna is a Feature Visualization package for Tensorflow. While Lucid does not support Tensorflow 2, Luna was built with Tensorflow 2 at its core.',
			'images/luna.png',
			[
				new LinkWithIcon('http://a13x.io/luna/', Web),
				new LinkWithIcon('https://Github.com/Sparkier/luna', Github)
			]
		),
		new FunProject('svelte-vega', 'Use vega as a svelte component.', 'images/svelte-vega.png', [
			new LinkWithIcon('https://vega.Github.io/svelte-vega/', Web),
			new LinkWithIcon('https://Github.com/vega/svelte-vega', Github)
		]),
		new FunProject(
			'Dotfiles',
			'These are the dotfiles I use to configure my machines. This ' +
				'includes both my macs and my linux workstations. Feel free to ' +
				'base your configurations on these!',
			'images/dotfiles.png',
			[new LinkWithIcon('https://Github.com/Sparkier/Dotfiles', Github)]
		),
		new FunProject(
			'mySnow',
			'An App I developed with my colleagues of the Swabian Skiing ' +
				'Association (SSV). It teaches you concepts about skiing and helps ' +
				'you improve with videos and handcrafted guidance. Among other stuff' +
				', I am mainly responsible for the iOS version of the app.',
			'images/mySnow.png',
			[]
		),
		new FunProject(
			'Contagion',
			'A fun project for the #WirVsVirus hackathon during the coronavirus ' +
				'pandemic. We implemented a text adventure where users have to ' +
				'manage the spreading of the virus.',
			'images/contagion.png',
			[new LinkWithIcon('https://Github.com/Sparkier/Contagion', Github)]
		),
		new FunProject(
			'midosa',
			'Microdonate and Safe: Winner project for the Audi App Challenge ' +
				'where we developed an ' +
				'application for both, the car cockpit and android mobile devices. ' +
				'The app motivates users to drive with less fuel consumption and then' +
				' donate the savings to charity, thus gamifying this experience.',
			'images/midosa.png',
			[
				new LinkWithIcon(
					'https://www.uni-ulm.de/home/uni-aktuell/article/auto-fahren-umwelt-schonen-gutes-tun-ulmer-studenten-gewinnen-erste-audi-app-challenge/',
					Web
				)
			]
		)
	];
	return projects;
}
