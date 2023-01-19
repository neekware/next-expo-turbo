module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ["ui"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // access react-native-web via react-native
      "react-native": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};
