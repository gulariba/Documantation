import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'koprfd8a', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'ske6miMVTCpdgBjy8vTl9IBmPBZJ0ykOIWlfby0ycDMOXVq5tRSQJ8aywym7P4P3UyshIMyMLUY1lu2yww9Twlmg13K8wPI7irasbVecsEmDe1j3uLgnjUJ5EwmdLdX6Jwaw8ahP0kuU8atkqPYbV9l2PJ5ijFuq6wOHopiH9Yf1CMq3DOWZ', 
});


export default client;
