import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Projects = () => {
  return (
    <Fragment>
      <h2>Projects</h2>
      <SectionItem
        {...{
          header: 'Vehicle Leasing Website',
          link: '/',
          paragraph:
            'Frontend for a vehicle leasing web application using React.',
          badges: ['React', 'JavaScript'],
        }}
      />
      <SectionItem
        {...{
          header: 'Vehicle Leasing API',
          link: '/',
          paragraph:
            'Backend API for a vehicle leasing web application using Express and NodeJS.',
          badges: ['Express', 'NodeJS'],
        }}
      />
    </Fragment>
  );
};

export default Projects;
