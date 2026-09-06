export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  detail: string;
  href: string;
  code?: string;
  /** Short summary of what the paper contributes. */
  note: string;
}

/** Reverse-chronological. `id` is referenced by experience entries as provenance. */
export const publications: Publication[] = [
  {
    id: 'factalign',
    title: 'FactAlign: Fact-Level Hallucination Detection and Classification Through Knowledge Graph Alignment',
    authors: ['Mohamed Rashad', 'Ahmed Zahran', 'Abanoub Amin', 'Amr Abdelaal', 'Mohamed Al-Tantawy'],
    venue: 'TrustNLP 2024',
    year: 2024,
    detail: 'Proceedings of the 4th Workshop on Trustworthy Natural Language Processing, pages 79–84',
    href: 'https://aclanthology.org/2024.trustnlp-1.8/',
    note: 'Recasts hallucination detection as knowledge-graph alignment, which also separates intrinsic from extrinsic hallucinations.',
  },
  {
    id: 'e2e-r',
    title: 'Fine-Tuning Self-Supervised Learning Models for End-to-End Pronunciation Scoring',
    authors: ['Ahmed I. Zahran', 'Aly A. Fahmy', 'Khaled T. Wassif', 'Hanaa Bayomi'],
    venue: 'IEEE Access',
    year: 2023,
    detail: 'Volume 11, pages 112650–112663',
    href: 'https://doi.org/10.1109/ACCESS.2023.3317236',
    code: 'https://github.com/ai-zahran/E2E-R',
    note: 'E2E-R, an end-to-end pronunciation scoring architecture that reaches state of the art on less data and less compute.',
  },
  {
    id: 'arabic-di',
    title: 'A Character Level Convolutional BiLSTM for Arabic Dialect Identification',
    authors: ['Mohamed Elaraby', 'Ahmed Zahran'],
    venue: 'WANLP 2019',
    year: 2019,
    detail: 'Proceedings of the Fourth Arabic Natural Language Processing Workshop, pages 274–278',
    href: 'https://aclanthology.org/W19-4636/',
    note: 'Dialect identification straight from characters, avoiding the tokenisation problem that Arabic dialects create.',
  },
];

export const education = [
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Cairo University, Faculty of Computers and Information',
    date: 'June 2024',
    points: [
      'Thesis: “Enhancement of Mispronunciation Detection Using Deep Learning Techniques”.',
      'Proposed E2E-R, an end-to-end pronunciation scoring architecture using fine-tuned SSL speech models, achieving state-of-the-art performance while reducing data and compute needs.',
    ],
  },
  {
    degree: 'B.Sc. in Computer Engineering',
    institution: 'Cairo University, Faculty of Engineering',
    date: 'May 2016',
    points: [
      'Graduation project: Animtractor, a marker-less motion capture system that needs no depth camera. Won first place in the Innovation track of the Microsoft Imagine Cup 2016 national finals.',
      'Prepared cloud computing coursework and summer training for CMP303B — Distributed Operating Systems.',
      'Member of the Academic Committee in IEEE’s Cairo University Student Branch.',
    ],
  },
];
