import SectionItem from './SectionItem';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      {projects.map((item) => (
        <SectionItem key={item.header} {...item} />
      ))}
    </section>
  );
};

export default Projects;
