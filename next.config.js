/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['encrypted-tbn0.gstatic.com', 'cdn.sanity.io', 'i.ibb.co'],
  },
};

module.exports = {
  images: {
    domains: [
      's2.coinmarketcap.com',
      's3.coinmarketcap.com',
      'cdn.sanity.io',
      'encrypted-tbn0.gstatic.com',
    ],
  },

  nextConfig,
};
