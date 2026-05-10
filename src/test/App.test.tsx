import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the masthead heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /jim gartland/i })).toBeInTheDocument();
  });

  it('renders the three CV sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeInTheDocument();
  });

  it('gives all icon-only social links an accessible name', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /social links/i });
    const links = nav.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('aria-label');
      expect(link.getAttribute('aria-label')).not.toBe('');
    });
  });
});
