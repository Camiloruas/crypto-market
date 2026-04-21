const COINCAP_BASE_URL = 'https://rest.coincap.io/v3';
const COINCAP_API_KEY = import.meta.env.VITE_COINCAP_API_KEY;

if (!COINCAP_API_KEY) {
  throw new Error('Configure VITE_COINCAP_API_KEY no arquivo .env');
}

export const COINCAP_ASSETS_URL = `${COINCAP_BASE_URL}/assets?${new URLSearchParams({
  limit: '10',
  offset: '0',
  apiKey: COINCAP_API_KEY,
})}`;
