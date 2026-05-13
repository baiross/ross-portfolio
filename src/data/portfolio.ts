export type NavLink = {
  label: string;
  href: string;
};

export type HeroData = {
  heading: string;
  subheading: string;
  description: string;
  ctas: { label: string; href: string; variant: 'primary' | 'secondary' }[];
  badge: string;
};

export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  highlights: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    role: string;
    keyFeatures: string[];
    techStack: string[];
    challenges: string[];
    screens: string[];
    learnings: string[];
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ResumeData = {
  description: string;
  resumePath: string;
};

export type ContactData = {
  email: string;
  github: string;
  linkedin: string;
  location: string;
};

export const portfolioData = {
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interactive Demos', href: '#interactive-demos' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],
  hero: {
    heading: 'Ross Rabanos',
    subheading: 'Senior React Native Developer',
    description:
      'I build production-ready mobile apps for iOS and Android using React Native.',
    ctas: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'View Interactive Demos', href: '#interactive-demos', variant: 'secondary' },
      { label: 'Download Resume', href: '/resume.pdf', variant: 'secondary' },
      { label: 'Contact Me', href: '#contact', variant: 'secondary' },
    ],
    badge: 'Available for mobile development roles / freelance projects',
  } as HeroData,
  metrics: [
    { label: 'Years Experience', value: '4+' },
    { label: 'iOS & Android Apps', value: '10+' },
    { label: 'Production Mobile Apps', value: '8+' },
    { label: 'Store Deployment Experience', value: '5+' },
  ],
  about: {
    summary:
      'I am a Senior React Native Developer with experience building and maintaining production mobile applications for iOS and Android. I work with React Native, Expo, Redux, Redux-Saga, REST APIs, Firebase, Appwrite, push notifications, authentication, video features, barcode scanning, and mobile release pipelines. I have handled app deployments to the App Store and Google Play Store, production bug fixes, reusable architecture, and performance improvements.',
  },
  focusAreas: [
    'Production-ready mobile apps',
    'Clean and reusable component architecture',
    'App Store and Play Store deployment',
    'API integration and app stability',
    'User experience and performance',
    'Debugging complex mobile issues',
  ] as string[],
  skills: [
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Expo', 'Android', 'iOS', 'Native integrations', 'React Native Web basics'],
    },
    {
      title: 'State Management',
      skills: ['Redux', 'Redux-Saga', 'React Context', 'Async storage patterns'],
    },
    {
      title: 'Backend / API',
      skills: ['Node.js', 'Express', 'REST API integration', 'Appwrite', 'Firebase'],
    },
    {
      title: 'Mobile Features',
      skills: ['Push notifications', 'Authentication', 'OTP verification', 'Video upload/playback', 'Barcode scanning', 'Printer integration', 'Offline-ready UI patterns'],
    },
    {
      title: 'Deployment / Tools',
      skills: ['Fastlane', 'TestFlight', 'Google Play Console', 'App Store Connect', 'CodePush', 'GitHub Actions', 'Firebase Crashlytics'],
    },
    {
      title: 'Frontend / Web',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    },
  ] as SkillGroup[],
  experience: [
    {
      role: 'Senior Software Developer / Mobile Developer',
      company: 'iRipple Inc.',
      location: 'Pasig City, Philippines',
      dateRange: 'April 2021 – Present',
      bullets: [
        'Built and maintained production React Native applications for iOS and Android.',
        'Developed reusable mobile app architecture and base code to support scalable client deployments.',
        'Built mobile screens from Figma designs with focus on responsive layout, UX accuracy, and performance.',
        'Integrated REST APIs and worked closely with backend teams to improve app stability and reliability.',
        'Implemented Firebase Cloud Messaging push notifications for React Native applications.',
        'Managed mobile app releases for Google Play Store and Apple App Store.',
        'Maintained and debugged production issues across multiple React Native projects.',
        'Developed Android features for PDT devices, including barcode scanning and printer connectivity.',
        'Assisted in maintaining and troubleshooting backend services using Node.js.',
        'Worked on multiple projects at the same time while keeping delivery quality and timelines.',
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: 'loyalty-app',
      title: 'Customer Loyalty Program Mobile App',
      type: 'Mobile App',
      description:
        'A React Native loyalty app with registration, OTP verification, vouchers, barcode generation, push notifications, and user profile features.',
      tech: ['React Native', 'Redux', 'Redux-Saga', 'Firebase', 'REST APIs', 'Fastlane'],
      highlights: [
        'OTP registration flow',
        'Voucher claiming and redemption',
        'Barcode generation',
        'Push notifications',
        'App Store and Play Store deployment',
        'Reusable app architecture',
      ],
      caseStudy: {
        overview:
          'This loyalty app helped customers earn rewards, claim vouchers, and redeem offers through a polished React Native experience.',
        problem:
          'Clients needed a mobile experience that made loyalty rewards easy to access while protecting secure account steps and voucher validation.',
        solution:
          'I built a scalable React Native application with OTP authentication, voucher lifecycle screens, barcode generation, and notifications for timely campaign updates.',
        role:
          'I led mobile feature delivery, built reusable architecture, and collaborated with product and backend teams to launch stable app releases.',
        keyFeatures: [
          'OTP registration flow',
          'Voucher browsing and redemption',
          'Barcode ticket generation',
          'Push notification support',
          'User profile and loyalty points',
        ],
        techStack: ['React Native', 'Redux', 'Redux-Saga', 'Firebase', 'REST APIs', 'Fastlane'],
        challenges: [
          'Delivered stable OTP and login flows across slow networks.',
          'Reduced checkout friction while keeping reward validation secure.',
          'Ensured app reliability in both iOS and Android release pipelines.',
        ],
        screens: ['Login', 'OTP verification', 'Dashboard', 'Voucher list', 'Voucher details', 'Claim success'],
        learnings: [
          'How to balance security with fast mobile onboarding.',
          'How to architect reusable state and UI patterns in React Native.',
          'How to coordinate mobile releases across App Store and Play Store.',
        ],
      },
    },
    {
      id: 'creator-platform',
      title: 'Creator Video Platform',
      type: 'Mobile App / Creator Platform',
      description:
        'A mobile creator platform with video upload, thumbnail generation, Bunny Stream integration, Appwrite backend, scheduled publishing, notifications, comments, likes, views, and ads integration.',
      tech: ['React Native', 'Expo', 'Appwrite', 'Bunny Stream', 'Firebase', 'Expo Video'],
      highlights: [
        'Video upload workflow',
        'Thumbnail generation',
        'Video processing status',
        'Scheduled publishing',
        'Push notifications',
        'Engagement and monetization features',
      ],
      caseStudy: {
        overview:
          'A creator-focused mobile experience that made video publishing, scheduling, and content engagement easier for creators.',
        problem:
          'Creators needed a reliable mobile workflow to upload video, add metadata, and manage publishing status across a unified app.',
        solution:
          'I shipped a React Native app with a guided upload journey, metadata entry, mock thumbnail generation, and status notifications for published content.',
        role:
          'I implemented core upload flows, built backend integrations with Appwrite, and improved creator engagement features.',
        keyFeatures: [
          'Upload and metadata flow',
          'Thumbnail preview and generation',
          'Processing status screen',
          'Published video preview',
          'Engagement metrics and comments',
        ],
        techStack: ['React Native', 'Expo', 'Appwrite', 'Bunny Stream', 'Firebase', 'Expo Video'],
        challenges: [
          'Designed a clean mobile workflow for multi-step content creation.',
          'Maintained flow consistency during video upload and processing.',
          'Presented progress clearly without overwhelming the user.',
        ],
        screens: ['Upload video', 'Add details', 'Generate thumbnail', 'Processing status', 'Published video', 'Video details'],
        learnings: [
          'How to make a mobile upload workflow feel simple yet powerful.',
          'How to keep users informed with progress and status updates.',
          'How to prototype backend actions with mock state-driven screens.',
        ],
      },
    },
    {
      id: 'admin-studio',
      title: 'Admin / Web Studio Tools',
      type: 'Web App',
      description:
        'Web-based admin tools for managing campaigns, uploaded videos, reports, and platform moderation features.',
      tech: ['React', 'Next.js', 'Appwrite', 'Tailwind CSS'],
      highlights: [
        'Video management',
        'Search and filtering',
        'Status management',
        'Moderation workflows',
        'Campaign management',
      ],
      caseStudy: {
        overview:
          'A web studio for moderation and operations that helped teams manage creator content, campaign performance, and platform quality.',
        problem:
          'Operations teams needed a dashboard to review and manage video content efficiently with search, status controls, and moderation actions.',
        solution:
          'I built a responsive admin interface with filtered lists, status controls, and quick search tools for managing published and pending videos.',
        role:
          'I delivered the admin UX, built data-driven moderation components, and ensured the interface remained performant with mock large lists.',
        keyFeatures: [
          'Search and filter by status',
          'Video list and campaign cards',
          'Moderation action controls',
          'Status update workflows',
          'Reports and analytics previews',
        ],
        techStack: ['React', 'Next.js', 'Appwrite', 'Tailwind CSS'],
        challenges: [
          'Kept the dashboard intuitive across desktop and tablet views.',
          'Simplified moderation actions while preserving clear content state.',
          'Designed status controls to avoid accidental changes.',
        ],
        screens: ['Search and filter', 'Video list', 'Status updates', 'Moderation actions'],
        learnings: [
          'How to structure admin workflows for speed and clarity.',
          'How to use mock data to validate dashboard interactions.',
          'How to keep moderation tools accessible and easy to scan.',
        ],
      },
    },
    {
      id: 'pdt-android',
      title: 'PDT Android Application',
      type: 'Android / Operational App',
      description:
        'An Android application for PDT devices with barcode scanning and printer integration for operational workflows.',
      tech: ['Android', 'React Native', 'Native Modules', 'Barcode Scanner', 'Printer Integration'],
      highlights: [
        'Barcode scanning',
        'Printer connectivity',
        'Device-specific workflow support',
        'Operational process support',
      ],
      caseStudy: {
        overview:
          'A rugged operational app designed for PDT hardware to support barcode-driven workflows and printer printing during daily operations.',
        problem:
          'Field operators needed a dependable mobile solution for scanning inventory, printing receipts, and tracking workflow progress.',
        solution:
          'I delivered an Android-focused React Native app with native scanner and printer modules, robust workflow screens, and guided action states.',
        role:
          'I handled native integration planning, built the scanning workflows, and ensured the app supported the specific needs of PDT hardware.',
        keyFeatures: [
          'Barcode scanning',
          'Printer integration',
          'Workflow status screens',
          'Device-specific support',
          'Operational reporting',
        ],
        techStack: ['Android', 'React Native', 'Native Modules', 'Barcode Scanner', 'Printer Integration'],
        challenges: [
          'Delivered reliable scan handling on specialized hardware.',
          'Maintained a consistent UI across rugged device screens.',
          'Provided clear process feedback during operations.',
        ],
        screens: ['Scanner view', 'Workflow cards', 'Receipt preview', 'Status updates'],
        learnings: [
          'How to design for non-consumer hardware in React Native.',
          'How to combine native modules with shared UI components.',
          'How to support field workflow reliability through clear interface states.',
        ],
      },
    },
  ] as Project[],
  resume: {
    description: 'Download my mobile development resume to review project experience, technical skills, and deployment expertise.',
    resumePath: '/resume.pdf',
  } as ResumeData,
  contact: {
    email: 'rabanos.rvc@gmail.com',
    github: 'https://github.com/baiross',
    linkedin: 'https://linkedin.com/in/ross-rabanos',
    location: 'Philippines',
  } as ContactData,
};
