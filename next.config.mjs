/** @type {import('next').NextConfig} */
const imagesConfig = {
  experimental:{
    serverActions:true
  },
  images: {
    domains: ['avatars.githubusercontent.com','lh3.googleusercontent.com'], // Add the allowed domain here
  },
};

const webpackConfig = (config) => {
  config.experiments = {
    ...config.experiments,
    topLevelAwait: true,
  };

  if (!config.isServer) {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac)$/, // فرمت‌های صوتی پشتیبانی‌شده را اضافه کنید
      use: 'file-loader',
    });
  }

  return config;
};

const nextConfig = {
  ...imagesConfig,
  webpack: webpackConfig,
};

export default nextConfig;

