import React, { Fragment } from 'react';
import Projects from '../sections/Projects';
import Career from '../sections/Career';

const Home = () => {
  return (
    <Fragment>
      <div className="masthead">
        <h1>
          <a href="/">Jim Gartland</a>
        </h1>
        <p className="lead">
          Software Engineer @<a href="https://sbgsportssoftware.com/">SBG</a>
        </p>

        <div className="links">Links here</div>
      </div>

      <hr />
      <Projects />
      <hr />
      <Career />
      <hr />
    </Fragment>
  );
};

export default Home;
