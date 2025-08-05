// src/sanityClient.js
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '58bp78pe', // your project ID
  dataset: 'production', // or your dataset name
  apiVersion: '2023-01-01', // use a UTC date string
  useCdn: false, // `false` to ensure fresh data
});