// https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
// https://nextjs.org/docs/api-reference/next.config.js/basepath
// https://nextjs.org/docs/api-reference/next.config.js/custom-image-loader-config

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ""
let basePath = ""
let imagesLoader = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: imagesLoader,
  reactStrictMode: true,
}

module.exports = nextConfig
