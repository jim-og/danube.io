import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Career = () => {
  return (
    <Fragment>
      <h2>Experience</h2>
      <SectionItem
        {...{
          header: 'SBG Sports Software',
          subHeader: 'Software Engineer',
          dates: 'Nov 2017 - Present',
          paragraph: `Full stack developer for RaceWatch, an award winning fully integrated data analysis and visualisation software for elite motorsport strategy.`,
          badges: [
            'C++11',
            'React',
            'PostgreSQL',
            'NodeJS',
            'TypeScript',
            'AWS',
            'GoogleTest',
            'OpenCV',
          ],
          awards: [
            'Yahoo! Sports Technology Awards 2019 - Best Technology for Elite Performance',
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'Mercedes-AMG Petronas Formula One Team',
          subHeader: 'Machine Learning Graduate Placement',
          dates: 'Oct 2017 - Nov 2017',
          paragraph: `Applied the latest in deep learning video classification techniques to automatically annotate on-board video with descriptors of the content being shown such as camera angle, team, and driver.`,
          badges: ['Python', 'OpenCV', 'FFMEG', 'TensorFlow'],
        }}
      />
      <SectionItem
        {...{
          header: 'Rolls-Royce plc',
          subHeader: 'Trent XWB Development Engineer',
          dates: 'Sep 2014 - Sep 2016',
          badges: ['MATLAB'],
          paragraph: `Initial role as a Graduate Trainee encompassed 4 separate placements throughout the Civil Large Engines business, followed by a substantive role as a Development Engineer on the Trent XWB project. `,
        }}
      />
    </Fragment>
  );
};

export default Career;
