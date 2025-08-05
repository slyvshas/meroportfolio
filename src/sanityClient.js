// src/sanityClient.js
import { createClient } from '@sanity/client';

// Create client with proper CORS configuration
export const sanity = createClient({
  projectId: '58bp78pe',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN || undefined, // Optional token for private data
  withCredentials: false, // Important for CORS
  perspective: 'published', // Only fetch published content
});

// Alternative client for public data (no token required)
export const publicSanity = createClient({
  projectId: '58bp78pe',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true, // Use CDN for better performance
  withCredentials: false,
  perspective: 'published',
});