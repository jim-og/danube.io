import SectionItem from './SectionItem';
import { education } from '../../data/education';

const Education = () => {
  return (
    <section aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {education.map((item) => (
        <SectionItem key={item.header + item.dates} {...item} />
      ))}
    </section>
  );
};

export default Education;
