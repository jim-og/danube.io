import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Education = () => {
  return (
    <Fragment>
      <h2>Education</h2>
      <SectionItem
        {...{
          header: 'Imperial College London',
          subHeader: 'Master of Science (MSc), Computing Science',
          dates: '2016 - 2017',
          paragraph: `Intensive 12-month course providing a strong foundation in Object Oriented Programming 
          with a wide range of modules including Algorithms, Artificial Intelligence, Machine Learning,
          Concurrency and Networks & Distributed Systems.`,
          badges: ['C++', 'Python', 'Swift'],
          awards: [
            'Distinguished Project - Automatic Classification of Formula One On-board Video Footage',
            'MSc Computing / MSc Specialism Group Project Prize',
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'University of Durham',
          subHeader: 'MEng General Engineering, First-class honours',
          dates: '2010 - 2014',
          paragraph: `Multi-disciplined undergraduate degree giving a firm grounding in mechanical, electrical, 
          electronic and civil engineering.`,
          badges: ['C', 'MATLAB'],
          awards: [
            'RAEng design prize for the best Durham University 3rd Year team design project',
          ],
        }}
      />
    </Fragment>
  );
};

export default Education;
