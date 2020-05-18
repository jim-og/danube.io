import React, { Fragment } from 'react';

export interface SectionItemProps {
  header?: string;
  link?: string;
  paragraph?: string;
  badges?: string[];
}

const SectionItem = ({ header, link, paragraph, badges }: SectionItemProps) => {
  return (
    <Fragment>
      <span className="d-flex justify-content-between align-items-center">
        <h3>
          <a href={link}>{header}</a>
        </h3>
        <span>
          {badges &&
            badges.map((badge) => (
              <span className="badge badge-primary ml-1">{badge}</span>
            ))}
        </span>
      </span>
      <p>{paragraph}</p>
    </Fragment>
  );
};

export default SectionItem;
