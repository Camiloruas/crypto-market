const COINCAP_BASE_URL = 'https://rest.coincap.io/v3';
const COINCAP_API_KEY = import.meta.env.VITE_COINCAP_API_KEY;

if (!COINCAP_API_KEY) {
  throw new Error('Configure VITE_COINCAP_API_KEY no arquivo .env');
}

export function getCoincapAssetsUrl(offset = 0) {
  return `${COINCAP_BASE_URL}/assets?${new URLSearchParams({
    limit: '10',
    offset: String(offset),
    apiKey: COINCAP_API_KEY,
  })}`;
}

export function getCoincapAssetUrl(assetId: string) {
  return `${COINCAP_BASE_URL}/assets/${assetId}?${new URLSearchParams({
    apiKey: COINCAP_API_KEY,
  })}`;
}
