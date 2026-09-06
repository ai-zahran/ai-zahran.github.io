export const site = {
  name: 'Ahmed Zahran',
  role: 'AI/ML Engineer',
  location: 'Cairo, Egypt',
  url: 'https://ai-zahran.github.io',
  tagline:
    'AI/ML engineer building production LLM systems — multi-agent orchestration, retrieval over messy enterprise data, and knowledge graphs.',
  portrait: '/assets/images/profile-img.jpg',
  email: 'ahmed.ismail.zahran@gmail.com',
} as const;

/*
 * The CV PDF is deliberately not hosted here: it carries a phone number and a
 * home address. Contact goes through email and these profiles instead.
 */
export const links = [
  { label: 'Email', href: `mailto:${site.email}`, handle: site.email },
  { label: 'GitHub', href: 'https://github.com/ai-zahran', handle: 'ai-zahran' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-ismail-zahran', handle: 'ahmed-ismail-zahran' },
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/citations?user=HUUL-88AAAAJ&hl=en',
    handle: 'Ahmed Ismail Zahran',
  },
] as const;

export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'Research', href: '/research/' },
  { label: 'Writing', href: '/blog/' },
] as const;
