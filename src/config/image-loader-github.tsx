export default function imageLoaderGitHub({ src, width, quality }: any) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "")
  if (repo) {
    return `/${repo}${src}`
  } else {
    return `${src}`
  }
}
