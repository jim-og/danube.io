import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Projects = () => {
  return (
    <Fragment>
      <h2>Projects</h2>
      <SectionItem
        {...{
          header: 'Vehicle Leasing Website',
          paragraph: `Frontend for a vehicle leasing web application using React, 
            React Hooks for state management, and Materialize for styling.`,
          badges: ['React', 'JavaScript', 'Materialize'],
          links: [
            {
              link: '/',
              icon: 'fas fa-link',
              title: 'View live',
            },
            {
              link: '/',
              icon: 'fab fa-github',
              title: 'View on GitHub',
            },
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'Vehicle Leasing API',
          paragraph:
            'Backend API for a vehicle leasing web application using Express and NodeJS.',
          badges: ['Express', 'NodeJS'],
          links: [
            {
              link: '/',
              icon: 'fas fa-link',
              title: 'View live',
            },
            {
              link: '/',
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
