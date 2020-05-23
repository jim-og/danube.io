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
          paragraph: 'todo',
          badges: ['C++', 'Python', 'Swift'],
          awards: [
            'Distinguised Project - Automatic Classification of Formula One On-board Video Footage',
            'MSc Computing / MSc Specialism Group Project Prize',
          ],
        }}
      />
      <SectionItem
        {...{
          header: 'University of Durham',
          subHeader: 'MEng General Engineering, First-class honours',
          dates: '2010 - 2014',
          paragraph: 'todo',
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
