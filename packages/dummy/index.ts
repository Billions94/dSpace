export type LandingPageImage = {
  url: string;
  title: string;
  path: string;
};

export const landingPageImages: LandingPageImage[] = [
  {
    url: 'https://assets-global.website-files.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg',
    title: 'Web development',
    path: '/web-development',
  },
  {
    url: 'https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg',
    title: 'AI',
    path: '/ai-content',
  },
  {
    url: 'https://miro.medium.com/v2/resize:fit:1358/1*GI-td9gs8D5OKZd19mAOqA.png',
    title: 'Comedy',
    path: '/comedy',
  },
];
