import ResearchProject from '../types/ResearchProject';
import FunProject from '../types/FunProject';
import LinkWithIcon from '../types/LinkWithIcon';

/**
 * Returns the ResearchProjects within this App
 *
 * @return {[ResearchProject]} returns the research projects used on this page
 */
export function getResearchProjects() {
  const projects = [
    new ResearchProject(
        'Classifier-Guided Visual Correction of Noisy Labels for Image ' +
      'Classification Tasks',
        'Alex Bäuerle, Heiko Neumann, and Timo Ropinski',
        'Training data plays an essential role in modern applications of ' +
        'machine learning. In this project, we provide means to visually ' +
        'guide users towards potential errors in such datasets. Our guidance,' +
        ' which is built on common labeling error types we propose, can be ' +
        'plugged into any classification pipeline.',
        2020,
        require('@/assets/cgvc.jpg'),
        [new LinkWithIcon('https://www.uni-ulm.de/fileadmin/website_uni_ulm/iui.inst.100/institut/Papers/viscom/2020/baeuerle_classifier_guided_correction.pdf', 'mdi-file'), new LinkWithIcon('https://www.uni-ulm.de/in/mi/mi-forschung/viscom/publications/2020/classifier-guided-visual-correction-of-noisy-labels-for-image-classification-tasks/', 'mdi-web'), new LinkWithIcon('https://github.com/Sparkier/Classifier-Guided-Correction', 'mdi-github')]),
    new ResearchProject(
        'Net2vis: Transforming Deep Convolutional Networks into ' +
      'Publication-Ready Visualizations',
        'Alex Bäuerle, Christian van Onzenoodt, and Timo Ropinski',
        'To convey neural network architectures in publications, appropriate ' +
        'visualizations are of great importance. This project is aimed at ' +
        ' automatically generating such visualizations from code. Thus, ' +
        'we are able to employ a common visual grammar, reduce the time ' +
        'investment towards these visualizations significantly, and reduce ' +
        'errors in these visualizations.',
        2019,
        require('@/assets/net2vis.png'),
        [new LinkWithIcon('https://arxiv.org/pdf/1902.04394.pdf', 'mdi-file'), new LinkWithIcon('http://viscom.net2vis.uni-ulm.de/', 'mdi-web'), new LinkWithIcon('https://github.com/viscom-ulm/Net2Vis', 'mdi-github')]),
    new ResearchProject(
        'Automatic identification of crossovers in cryo‐EM images of murine ' +
      'amyloid protein A fibrils with machine learning',
        'Mattthias Weber, Alex Bäuerle, Matthias Schmidt, Matthias Neumann, ' +
        'Marcus Fähndrich, Timo Ropinski, and Volker Schmidt',
        'Detecting crossovers in cryo-electron microscopy images of ' +
        'protein fibrils is an important step towards determining ' +
        'the morphological composition of a sample. We propose a combination ' +
        'of classical, stochastic approaches and machine learning techniques ' +
        'towards solving this problem in a novel, much easier way.',
        2020,
        require('@/assets/fibrils.png'),
        [new LinkWithIcon('https://onlinelibrary.wiley.com/doi/pdf/10.1111/jmi.12858', 'mdi-file')]),
    new ResearchProject(
        'What does BERT dream of? A visual investigation of nightmares in ' +
      'Sesame Street',
        'Alex Bäuerle and James Wexler',
        'In this internship project with the Google PAIR team, we ' +
        'investigated how Feature ' +
        'Visualization could be transferred to the text domain and conducted ' +
        'several experiments in this line of research. While Feature ' +
        'Visualization did not work out as well as we hoped, this provides ' +
        'new insight into the realm of deep dreaming with text.',
        2019,
        require('@/assets/bert.png'),
        [new LinkWithIcon('https://pair-code.github.io/interpretability/text-dream/blogpost/', 'mdi-web'), new LinkWithIcon('https://github.com/PAIR-code/interpretability/tree/master/text-dream', 'mdi-github')]),
    new ResearchProject(
        'Convolutional neural network (CNN) applied to respiratory motion ' +
      'detection in fluoroscopic frames',
        'Christoph Baldauf, Alex Bäuerle, Timo Ropinski, Volker Rasche, and ' +
        'Ina Vernikouskaya',
        'To support surgeons during surgeries conducted under ' +
        'X-ray-fluoroscopy guidance, real' +
        'time fluoroscopy is augmented with organ shape models. Following ' +
        'initial registration, respiratory motion is a major cause of ' +
        'introducing mismatch to the superposition. This work evaluates ' +
        'convolutional neural networks (CNN) as a novel approach to address ' +
        'this problem.',
        2019,
        require('@/assets/breath.png'),
        [new LinkWithIcon('https://www.semanticscholar.org/paper/Convolutional-neural-network-(CNN)-applied-to-in-Baldauf-B%C3%A4uerle/8b5b521bc8489bf691bff08c432d8f865182d7c1', 'mdi-file')]),
  ];
  projects.sort((a, b) => b.year - a.year);
  return projects;
}

/**
 * Returns the FunProjects within this App
 *
 * @return {[FunProject]} returns the fun projects used on this page
 */
export function getFunProjects() {
  const projects = [
    new FunProject(
        'Dotfiles',
        'These are the dotfiles I use to configure my machines. This ' +
        'includes both my macs and my linux workstations. Feel free to ' +
        'base your configurations on these!',
        require('@/assets/dotfiles.png'),
        [new LinkWithIcon('https://github.com/Sparkier/Dotfiles', 'mdi-github')]),
    new FunProject(
        'mySnow',
        'An App I developed with my colleagues of the Swabian Skiing ' +
        'Association (SSV). It teaches you concepts about skiing and helps ' +
        'you improve with videos and handcrafted guidance. Among other stuff ' +
        ', I am mainly responsible for the iOS version of the app.',
        require('@/assets/mySnow.png'),
        [new LinkWithIcon('https://apps.apple.com/de/app/mysnow/id1448897499', 'mdi-apple'), new LinkWithIcon('https://play.google.com/store/apps/details?id=source.ssv.mysnow&hl=de', 'mdi-android')]),
    new FunProject(
        'Contagion',
        'A fun project for the #WirVsVirus hackathon during the coronavirus ' +
        'pandemic. We implemented a text adventure where users have to ' +
        'manage the spreading of the virus.',
        require('@/assets/contagion.png'),
        [new LinkWithIcon('https://github.com/Sparkier/Contagion', 'mdi-github')]),
    new FunProject(
        'midosa',
        'Microdonate and Safe: Winner project for the Audi App Challenge ' +
        'where we developed an ' +
        'application for both, the car cockpit and android mobile devices. ' +
        'The app motivates users to drive with less fuel consumtion and then ' +
        'donate the savings to charity, thus gamifying this experience.',
        require('@/assets/midosa.png'),
        [new LinkWithIcon('https://www.uni-ulm.de/home/uni-aktuell/article/auto-fahren-umwelt-schonen-gutes-tun-ulmer-studenten-gewinnen-erste-audi-app-challenge/', 'mdi-web')]),
  ];
  projects.sort((a, b) => b.year - a.year);
  return projects;
}
