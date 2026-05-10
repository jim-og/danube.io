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
    <article className="section-item">
      <div className="section-item__heading">
        <div>
          <h3 className="section-item__title">{header}</h3>
          {subHeader && <p className="section-item__role">{subHeader}</p>}
        </div>
        {dates && <p className="section-item__dates">{dates}</p>}
      </div>

      {(badges?.length || links?.length) && (
        <div className="section-item__meta">
          {badges?.map((badge) => (
            <span key={badge} className="badge">
              {badge}
            </span>
          ))}
          {links?.map((value) => (
            <a
              key={value.link}
              href={value.link}
              aria-label={value.title}
              className="section-item__link"
            >
              <i className={value.icon} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      )}

      {paragraph && <p className="section-item__paragraph">{paragraph}</p>}

      {awards?.map((award) => (
        <p key={award} className="section-item__award">
          <i className="fas fa-trophy" aria-hidden="true"></i>
          <span>{award}</span>
        </p>
      ))}
    </article>
  );
};

export default SectionItem;
