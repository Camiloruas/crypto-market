import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './index';

describe('Footer', () => {
  it('exibe a marca pessoal com link para o portfólio', () => {
    render(<Footer />);

    const portfolioLink = screen.getByRole('link', {
      name: /camilo ruas/i,
    });

    expect(portfolioLink).toHaveAttribute(
      'href',
      'https://www.camiloruas.dev',
    );
  });

  it('exibe os links de contato', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
      'href',
      'https://wa.me/5579998448030',
    );
  });
});
