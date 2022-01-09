import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '7xq1ohuzxz',
  apiKey: process.env.API_KEY,
});