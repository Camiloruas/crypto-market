import { describe, expect, it, vi } from 'vitest';

describe('CoinCap API config', () => {
  it('gera a URL da listagem com limite, offset e apiKey', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_COINCAP_API_KEY', 'test-api-key');

    const { getCoincapAssetListUrl } = await import('./api');
    const url = new URL(getCoincapAssetListUrl(20));

    expect(url.origin).toBe('https://rest.coincap.io');
    expect(url.pathname).toBe('/v3/assets');
    expect(url.searchParams.get('limit')).toBe('10');
    expect(url.searchParams.get('offset')).toBe('20');
    expect(url.searchParams.get('apiKey')).toBe('test-api-key');
  });

  it('gera a URL de detalhes usando o id da moeda', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_COINCAP_API_KEY', 'test-api-key');

    const { getCoincapAssetDetailsUrl } = await import('./api');
    const url = new URL(getCoincapAssetDetailsUrl('bitcoin'));

    expect(url.pathname).toBe('/v3/assets/bitcoin');
    expect(url.searchParams.get('apiKey')).toBe('test-api-key');
  });
});
