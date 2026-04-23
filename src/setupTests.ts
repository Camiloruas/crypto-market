import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.stubEnv('VITE_COINCAP_API_KEY', 'test-api-key');
