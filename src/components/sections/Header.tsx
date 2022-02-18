import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className="masthead">
        <h1>
          <a href="/">Jim Gartland</a>
        </h1>
        <p className="lead">
          Software Engineer
        </p>

        <div className="links">
          <a href="mailto:cv@danube.io" title="Get in contact">
            <i className="far fa-envelope"></i>
          </a>
          <a href="https://github.com/jim-og" title="Follow me on GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jimgartland/"
            title="Follow me on Linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.strava.com/athletes/jim_gartland"
            title="Follow me on Strava"
          >
            <i className="fab fa-strava"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
