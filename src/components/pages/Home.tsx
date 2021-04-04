import React, { Fragment } from 'react';
import Header from '../sections/Header';
import Projects from '../sections/Projects';
import Career from '../sections/Career';
import Education from '../sections/Education';

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <hr />
        <Career />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
      </div>
    </Fragment>
  );
};

export default Home;
