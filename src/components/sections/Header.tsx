interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { href: 'mailto:cv@danube.io', label: 'Email Jim', icon: 'far fa-envelope' },
  { href: 'https://github.com/jim-og', label: 'GitHub profile', icon: 'fab fa-github' },
  {
    href: 'https://www.linkedin.com/in/jimgartland/',
    label: 'LinkedIn profile',
    icon: 'fab fa-linkedin-in',
  },
  {
    href: 'https://www.strava.com/athletes/jim_gartland',
    label: 'Strava profile',
    icon: 'fab fa-strava',
  },
];

const Header = () => {
  return (
    <header className="masthead">
      <h1>
        <a href="/">Jim Gartland</a>
      </h1>
      <p className="lead">Software Engineer</p>

      <nav aria-label="Social links" className="links">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} aria-label={link.label}>
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
