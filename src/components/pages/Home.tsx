import Header from '../sections/Header';
import Career from '../sections/Career';
import Education from '../sections/Education';
import Projects from '../sections/Projects';

const Home = () => {
  return (
    <main className="page">
      <Header />
      <Career />
      <Education />
      <Projects />
      <footer className="footer">
        <small>
          <a href="https://github.com/jim-og/danube.io">View source on GitHub</a>
        </small>
      </footer>
    </main>
  );
};

export default Home;
