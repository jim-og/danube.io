import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className="masthead">
        <h1>
          <a href="/">Jim Gartland</a>
        </h1>
        <p className="lead">
          Software Engineer <a href="https://sbgsportssoftware.com/">@SBG</a>
        </p>

        <div className="links">
          <a href="mailto:me@danube.io" title="Get in contact">
            <i className="far fa-envelope"></i>
          </a>
          <a href="/" title="Follow me on GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="/" title="Follow me on Twitter">
            <i className="fab fa-twitter"></i>
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
