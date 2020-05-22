import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Career = () => {
  return (
    <Fragment>
      <h2>Experience</h2>
      <SectionItem
        {...{
          header: 'Software Engineer',
          subHeader: 'SBG Sports Software',
          link: '/',
          dates: 'Nov 2017 - Present',
          paragraph: 'todo',
          badges: ['C++'],
        }}
      />
      <SectionItem
        {...{
          header: 'Machine Learning Graduate',
          subHeader: 'Mercedes-AMG Petronas Formula One Team',
          link: '/',
          dates: 'Oct 2017 - Nov 2018',
          paragraph: 'todo',
          badges: ['Python', 'Tensorflow', 'OpenCV'],
        }}
      />
      <SectionItem
        {...{
          header: 'MSc Computing Science',
          subHeader: 'Imperial College London',
          link: '/',
          dates: 'Oct 2016 - Sep 2017',
          paragraph: 'todo',
          badges: ['C++', 'Python', 'Swift'],
        }}
      />
      <SectionItem
        {...{
          header: 'Development Engineer',
          subHeader: 'Rolls-Royce',
          link: '/',
          dates: 'Sep 2014 - Sep 2016',
          paragraph: 'todo',
        }}
      />
    </Fragment>
  );
};

export default Career;
