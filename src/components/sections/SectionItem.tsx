import React, { Fragment } from 'react';

export interface SectionItemProps {
  header: string;
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
      <div className="mb-4">
        <span className="d-flex justify-content-between align-items-center">
          <span>
            <h3 className="text-white">
              <a href={link}>{header}</a>
            </h3>
            <h3>{subHeader}</h3>
          </span>
          <small>{dates}</small>
        </span>
        {badges &&
          badges.map((badge) => (
            <span key={badge} className="badge badge-primary mr-2">
              {badge}
            </span>
          ))}
        <p className="text-white-50 text-justify mb-2 mt-2">{paragraph}</p>
        {awards &&
          awards.map((award) => (
            <div key={award}>
              <span className="text-white-50">
                <small>
                  <i className="fas fa-trophy mr-2"></i>
                  {award}
                </small>
              </span>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default SectionItem;
