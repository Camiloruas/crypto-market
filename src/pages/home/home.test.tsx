import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Home } from './index';

const coinMock = {
  id: 'bitcoin',
  symbol: 'BTC',
  priceUsd: '67000',
  vwap24Hr: '66500',
  changePercent24Hr: '2.5',
  rank: '1',
  maxSupply: '21000000',
  marketCapUsd: '1300000000000',
  volumeUsd24Hr: '30000000000',
  explorer: 'https://blockchain.info/',
  name: 'Bitcoin',
  formattedPrice: '',
  formattedMarket: '',
  formattedVolume: '',
  formattedChange: '',
};

describe('Home', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renderiza uma moeda recebida da API', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: async () => ({ data: [coinMock] }),
    } as Response);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole('link', { name: /bitcoin \| BTC/i }),
    ).toHaveAttribute('href', '/detail/bitcoin');
    expect(screen.getByText(/US\$/)).toBeInTheDocument();
    expect(screen.getByText('2.50%')).toBeInTheDocument();
  });
});
