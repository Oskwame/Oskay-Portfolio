import { createRequire } from 'module'; // For importing CommonJS modules if needed
const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
