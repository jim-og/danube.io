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
          dates: 'Nov 2017 - Present',
          badges: ['C++'],
        }}
      />
      <SectionItem
        {...{
          header: 'Machine Learning Graduate',
          subHeader: 'Mercedes-AMG Petronas Formula One Team',
          dates: 'Oct 2017 - Nov 2017',
          badges: ['Python', 'Tensorflow', 'OpenCV'],
        }}
      />
      <SectionItem
        {...{
          header: 'MSc Computing Science',
          subHeader: 'Imperial College London',
          dates: 'Oct 2016 - Sep 2017',
          paragraph: `Distinguished individual project. Titled 'Automatic Classification of Formula One On-board Video Footage' 
          this project, in association with Mercedes AMG Petronas Formula One Team, applied the latest in deep learning video
          classification techniques to automatically annotate video streams with descriptors of the content being shown.`,
          badges: ['C++', 'Python', 'Swift', 'Tensorflow', 'OpenCV'],
        }}
      />
      <SectionItem
        {...{
          header: 'Trent XWB Development Engineer',
          subHeader: 'Rolls-Royce',
          dates: 'Apr 2016 - Sep 2016',
          paragraph: `The Development function is responsible for creating engine development and compliance programmes, 
          delivered to cost and timescales, which demonstrate the performance of a new engine and that certification
          requirements are met. `,
        }}
      />
      <SectionItem
        {...{
          header: 'Civil Large Engines Graduate Trainee',
          subHeader: 'Rolls-Royce',
          dates: 'Sep 2014 - Apr 2016',
          paragraph:
            '18-month graduate scheme encompassing 4 separate placements throughout the Civil Large Engines business.',
        }}
      />
    </Fragment>
  );
};

export default Career;
