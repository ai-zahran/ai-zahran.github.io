/** A bullet, optionally carrying one supporting link. */
export interface Point {
  text: string;
  link?: { label: string; href: string };
}

export interface Role {
  id: string;
  title: string;
  org: string;
  orgHref?: string;
  /** Parenthetical shown after the org, e.g. a former name. */
  orgNote?: string;
  start: string;
  end: string;
  points: Point[];
  stack?: string[];
  /**
   * Publications this role directly produced, by `id` in publications.ts.
   * Only for papers the work itself yielded — not papers written elsewhere on
   * a related topic.
   */
  produced?: string[];
  /** Surface this role on the home page. */
  featured?: boolean;
}

/** Reverse-chronological, matching the CV. */
export const roles: Role[] = [
  {
    id: 'stealth',
    title: 'Founding AI Engineer',
    org: 'Stealth Startup',
    start: 'Dec 2025',
    end: 'Present',
    featured: true,
    points: [
      { text: 'Built and deployed LLM systems for 14+ isolated enterprise customers.' },
      {
        text: 'Co-developed a LangChain Deep Agents multi-agent system with memory management for structured and unstructured data retrieval, SaaS integrations, and report generation.',
      },
      {
        text: 'Automated enterprise data onboarding for AI use through schema discovery, embeddings, and metadata preparation, with fault tolerance — reducing onboarding time from hours to minutes.',
      },
      { text: 'Enhanced document generation and editing with reusable skills, validation, and self-repair loops.' },
      { text: 'Improved retrieval quality using hybrid search, file system facets, and re-ranking.' },
      {
        text: 'Built a Composio-based SaaS integration for governed access to Google Workspace, Slack, Notion, GitHub, and Linear, with RBAC, human-approval gates, and white-labelled OAuth.',
      },
    ],
    stack: ['LangChain', 'LangGraph', 'Claude Agent SDK', 'RAG', 'Composio'],
  },
  {
    id: 'implicit',
    title: 'Senior Data Scientist (NLP)',
    org: 'Implicit',
    orgHref: 'https://www.implicit.cloud/',
    orgNote: 'formerly Agolo',
    start: 'Nov 2020',
    end: 'Dec 2025',
    featured: true,
    produced: ['factalign'],
    points: [
      { text: 'Built Graph RAG and question-answering functionality for Implicit’s Answers product.' },
      { text: 'Introduced LLMs for summarization, knowledge graph construction, and question answering.' },
      { text: 'Published FactAlign, a knowledge-graph-based hallucination detection system.' },
      {
        text: 'Fine-tuned LLMs on KG-to-text for entity-centric summarization, surpassing the state of the art.',
        link: {
          label: 'Read the write-up',
          href: 'https://medium.com/@ahmed.ismail.zahran/kg-to-text-with-llama-2-f2b299c02a48',
        },
      },
      { text: 'Maintained and expanded the extractive summarization platform for wider use cases.' },
    ],
    stack: ['Knowledge Graphs', 'Neo4j', 'Graph RAG', 'PyTorch', 'HuggingFace'],
  },
  {
    id: 'dataplus',
    title: 'Data Scientist',
    org: 'DataPlus',
    orgHref: 'https://www.dataplusme.com/',
    start: 'Mar 2019',
    end: 'Oct 2020',
    points: [
      {
        text: 'Developed and deployed dashboards and ETL/predictive-analytics workflows for financial, telecom, and government clients.',
      },
    ],
    stack: ['Tableau', 'Alteryx'],
  },
  {
    id: 'gsoc',
    title: 'Google Summer of Code Student',
    org: 'Distributed Red Hen Lab',
    orgHref: 'https://www.redhenlab.org/',
    start: 'Apr 2018',
    end: 'Aug 2018',
    featured: true,
    points: [
      { text: 'Implemented an Arabic speech recognition system for broadcast speech using Kaldi and VariKN.' },
      { text: 'Implemented an Arabic dialect identification system using Kaldi, Scikit-learn, and Keras.' },
      { text: 'Mentored several projects in subsequent GSoC programs.' },
    ],
    stack: ['Kaldi', 'VariKN', 'Scikit-learn', 'Keras'],
  },
  {
    id: 'cairo-ra',
    title: 'Research Assistant',
    org: 'Cairo University, Faculty of Engineering',
    start: 'Nov 2017',
    end: 'Nov 2018',
    points: [
      {
        text: 'Co-developed Senteech, a speech emotion classification system for customer service calls in low-resource languages.',
      },
    ],
    stack: ['Scikit-learn', 'TensorFlow', 'openSMILE'],
  },
  {
    id: 'cairo-ta',
    title: 'Teaching Assistant',
    org: 'Cairo University, Faculty of Engineering',
    start: 'Feb 2017',
    end: 'Apr 2017',
    points: [{ text: 'Taught CMP302 — Advanced Algorithms.' }],
  },
  {
    id: 'rdi',
    title: 'Machine Learning Researcher',
    org: 'RDI Egypt',
    orgHref: 'https://rdi-eg.ai/',
    start: 'Sep 2016',
    end: 'Aug 2017',
    points: [
      {
        text: 'Enhanced mispronunciation detection accuracy for Hafss, a Holy Quran recitation training system, by training new Kaldi models based on state-of-the-art architectures and incorporating new data.',
        link: { label: 'Hafss', href: 'https://rdi-eg.ai/hafss/' },
      },
      { text: 'Maintained Hafss’s C++ language model toolkit, fixing and expanding its generation rules.' },
      { text: 'Developed a .NET data annotation tool for the linguistics team.' },
    ],
    stack: ['Kaldi', 'C++', '.NET'],
  },
];

export interface Era {
  years: string;
  title: string;
  summary: string;
  artifacts: string[];
}

/**
 * The through-line of the CV: the same problem — pulling structure out of
 * unstructured signal — attacked with the tools of three different periods.
 */
export const eras: Era[] = [
  {
    years: '2016 – 2019',
    title: 'Speech',
    summary: 'Getting phonemes, dialects, and emotion out of raw audio.',
    artifacts: ['Hafss', 'Senteech', 'Arabic ASR & dialect ID'],
  },
  {
    years: '2020 – 2025',
    title: 'Text and knowledge graphs',
    summary: 'Getting entities, facts, and answers out of documents.',
    artifacts: ['Graph RAG', 'FactAlign', 'Entity-centric summarization'],
  },
  {
    years: '2025 – now',
    title: 'Agentic systems',
    summary: 'Getting work done across an enterprise’s own messy data.',
    artifacts: ['Multi-agent orchestration', 'Hybrid retrieval', 'Governed integrations'],
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'SQL', 'Bash'] },
  {
    group: 'ML / NLP',
    items: [
      'PyTorch',
      'HuggingFace',
      'Scikit-learn',
      'LangChain',
      'LangGraph',
      'Claude Agent SDK',
      'RAG',
      'Knowledge Graphs (Neo4j)',
    ],
  },
  {
    group: 'Web and Cloud',
    items: [
      'FastAPI',
      'Litestar',
      'Flask',
      'Google Cloud (App Engine, Cloud Run, Cloud Tasks)',
      'Firebase/Firestore',
    ],
  },
  { group: 'Languages', items: ['Arabic (native)', 'English (proficient)'] },
];
