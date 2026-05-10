import SectionItem from './SectionItem';
import { career } from '../../data/career';

const Career = () => {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {career.map((item) => (
        <SectionItem key={item.header + item.dates} {...item} />
      ))}
    </section>
  );
};

export default Career;
