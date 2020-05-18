import React, { Fragment } from 'react';

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

      <h3>First Item</h3>
      <p>First Item description</p>

      <hr />

      <h2>Projects</h2>

      <span className="d-flex justify-content-between align-items-center">
        <h3>
          <a href="/">Vehicle Leasing Website</a>
        </h3>
        <span className="badge badge-primary">React</span>
      </span>
      <p>Frontend for a vehicle leasing web application using React.</p>

      <span className="d-flex justify-content-between align-items-center">
        <h3>
          <a href="/">Vehicle Leasing API</a>
        </h3>
        <span>
          <span className="badge badge-primary">Express</span>
          <span className="badge badge-primary ml-1">NodeJS</span>
        </span>
      </span>
      <p>
        Backend API for a vehicle leasing web application using Express and
        NodeJS.
      </p>

      <hr />

      <h2>Career</h2>
      <h3>
        <a href="/">SBG Sports Software</a>
      </h3>
      <p>Software Engineer.</p>
      <hr />
    </Fragment>
  );
};

export default Home;
