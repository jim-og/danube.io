import type { SectionItemProps } from '../components/sections/SectionItem';

export const projects: SectionItemProps[] = [
  {
    header: 'web-crawler-rs',
    paragraph: 'A web crawler designed to crawl a single domain.',
    badges: ['Rust'],
    links: [
      {
        link: 'https://github.com/jim-og/web-crawler-rs',
        icon: 'fab fa-github',
        title: 'View web-crawler-rs on GitHub',
      },
    ],
  },
  {
    header: 'payments-engine',
    paragraph: 'A toy payments engine, written in Rust.',
    badges: ['Rust'],
    links: [
      {
        link: 'https://github.com/jim-og/payments-engine',
        icon: 'fab fa-github',
        title: 'View payments-engine on GitHub',
      },
    ],
  },
  {
    header: 'http-log-monitor',
    paragraph: `A Go HTTP log monitoring console program. It reads CSV-encoded HTTP access logs,
      displays the most popular endpoint sections over a specified time period, and alerts when
      traffic passes a configurable threshold.`,
    badges: ['Go'],
    links: [
      {
        link: 'https://github.com/jim-og/http-log-monitor',
        icon: 'fab fa-github',
        title: 'View http-log-monitor on GitHub',
      },
    ],
  },
  {
    header: 'danube.io',
    paragraph: 'Personal website.',
    badges: ['React', 'TypeScript', 'Vite'],
    links: [
      {
        link: '/',
        icon: 'fas fa-link',
        title: 'View danube.io live',
      },
      {
        link: 'https://github.com/jim-og/danube.io',
        icon: 'fab fa-github',
        title: 'View danube.io on GitHub',
      },
    ],
  },
];
