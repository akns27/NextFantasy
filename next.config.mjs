import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 여기에 다른 Next.js 설정을 추가할 수 있습니다.
  images: {
    domains: ['github.com', 'via.placeholder.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })
    return config
  },
};

export default withVanillaExtract(nextConfig);
