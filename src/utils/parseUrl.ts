export const getRepoNameFromUrl = (url: string) => {
    const parts = url.split('/');
    const repoName = parts[parts.length - 1] || parts[parts.length - 2];
    return repoName;
  }