import React, { Fragment } from 'react';

export interface SectionItemProps {
  header?: string;
  subHeader?: string;
  link?: string;
  dates?: string;
  paragraph?: string;
  badges?: string[];
  awards?: string[];
}

const SectionItem = ({
  header,
  subHeader,
  link,
  dates,
  paragraph,
  badges,
  awards,
}: SectionItemProps) => {
  return (
    <Fragment>
      <span className="d-flex justify-content-between align-items-center">
        <span>
          <h3>
            <a href={link}>{header}</a>
          </h3>
          <h3>{subHeader}</h3>
        </span>
        <small>{dates}</small>
      </span>
      {badges &&
        badges.map((badge) => (
          <span className="badge badge-primary mr-1">{badge}</span>
        ))}
      <p>{paragraph}</p>
      {awards &&
        awards.map((award) => (
          <span className="badge badge-primary mr-1">{award}</span>
        ))}
    </Fragment>
  );
};

export default SectionItem;
