import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Career = () => {
  return (
    <Fragment>
      <h2>Experience</h2>
      <SectionItem
        {...{
          header: 'Microsoft, Azure for Operators (AFO)',
          subHeader: 'Software Engineer II',
          dates: 'Apr 2022 - Present',
          paragraph: `Developing highly-scalable cloud native C++ and Rust platforms 
            for the telecommunications industry. Designing and implementing secure solutions 
            with carrier-grade performance, high-reliability, and observability across 
            large-scale deployments.`,
          badges: [
            'Rust',
            'C++',
            'Python',
            'Kubernetes',
            'Azure',
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'Catapult',
          subHeader: 'Senior Software Engineer',
          dates: 'Nov 2017 - Dec 2021',
          paragraph: `Full stack C++ developer building data analysis and visualisation 
            software for elite motorsport strategy. This is a domain which requires high 
            throughtput, low latency solutions to process large amounts of data efficiently 
            to inform split-second decisions.`,
          badges: [
            'C++',
            'Python',
            'React',
            'PostgreSQL',
            'TypeScript',
            'OpenCV',
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'Mercedes-AMG Petronas Formula One Team',
          subHeader: 'Machine Learning Graduate Placement',
          dates: 'Oct 2017 - Nov 2017',
          paragraph: `Applied the latest in deep learning video classification techniques to automatically annotate on-board video with descriptors of the content being shown such as camera angle, team, and driver.`,
          badges: ['Python', 'OpenCV', 'FFMPEG', 'TensorFlow'],
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
