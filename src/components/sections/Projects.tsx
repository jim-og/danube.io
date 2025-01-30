import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Projects = () => {
  return (
    <Fragment>
      <h2>Projects</h2>
      <SectionItem
        {...{
          header: 'payments-engine',
          paragraph: `A toy payments engine, written in Rust.`,
          badges: ['Rust'],
          links: [
            {
              link: 'https://github.com/jim-og/payments-engine',
              icon: 'fab fa-github',
              title: 'View on GitHub',
            },
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'http-log-monitor',
          paragraph: `A Go HTTP log monitoring console program. It is able to read CSV-encoded 
            HTTP access logs, display the most popular endpoint sections over a specified time 
            period, and alert when traffic passes a certain threshold across a given time 
            period.`,
          badges: ['Go'],
          links: [
            {
              link: 'https://github.com/jim-og/http-log-monitor',
              icon: 'fab fa-github',
              title: 'View on GitHub',
            },
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'danube.io',
          paragraph: 'Personal website.',
          badges: ['React', 'TypeScript', 'Bootstrap'],
          links: [
            {
              link: '/',
              icon: 'fas fa-link',
              title: 'View live',
            },
            {
              link: 'https://github.com/jim-og/danube.io',
              icon: 'fab fa-github',
              title: 'View on GitHub',
            },
          ],
        }}
      />
    </Fragment>
  );
};

export default Projects;
