import React, { Fragment } from 'react';
import SectionItem from './SectionItem';

const Career = () => {
  return (
    <Fragment>
      <h2>Career</h2>
      <SectionItem
        {...{
          header: 'SBG Sports Software',
          link: '/',
          paragraph: 'Software Engineer.',
        }}
      />
    </Fragment>
  );
};

export default Career;
