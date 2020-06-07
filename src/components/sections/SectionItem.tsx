import React, { Fragment } from 'react';

export interface LinkProps {
  icon: string;
  link: string;
  title: string;
}

export interface SectionItemProps {
  header: string;
  subHeader?: string;
  dates?: string;
  paragraph?: string;
  badges?: string[];
  awards?: string[];
  links?: LinkProps[];
}

const SectionItem = ({
  header,
  subHeader,
  dates,
  paragraph,
  badges,
  awards,
  links,
}: SectionItemProps) => {
  return (
    <Fragment>
      <div className="mb-5">
        <span className="d-flex justify-content-between align-items-center">
          <span>
            <h3 className="text-white">{header}</h3>
            <h3>{subHeader}</h3>
            <small>{dates}</small>
          </span>
        </span>
        <span>
          {badges &&
            badges.map((badge, index) => (
              <span key={index} className="badge badge-primary mr-2">
                {badge}
              </span>
            ))}
          {links &&
            links.map((value, index) => (
              <span key={index} className="mr-2">
                <a href={value.link} title={value.title}>
                  <i className={value.icon}></i>
                </a>
              </span>
            ))}
        </span>

        <p className="text-white-50 text-justify mb-2 mt-2">{paragraph}</p>
        {awards &&
          awards.map((award, index) => (
            <div key={index}>
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
