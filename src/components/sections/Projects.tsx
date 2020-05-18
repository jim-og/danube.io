import React, { Fragment } from 'react';

const Projects = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Projects;
