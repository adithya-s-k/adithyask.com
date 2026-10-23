export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  owner?: {
    login: string;
    avatar_url: string;
  };
}

// Refresh star counts every 6 hours (ISR) instead of hitting the API per visitor
const REVALIDATE_SECONDS = 60 * 60 * 6;

async function fetchRepo(repoUrl: string): Promise<Repository | null> {
  const apiUrl = repoUrl.replace(
    "https://github.com",
    "https://api.github.com/repos",
  );
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(apiUrl, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) {
      console.error(`GitHub API ${response.status} for ${repoUrl}`);
      return null;
    }
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      html_url: data.html_url,
      description: data.description,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      topics: data.topics ?? [],
      language: data.language,
      owner: data.owner
        ? { login: data.owner.login, avatar_url: data.owner.avatar_url }
        : undefined,
    };
  } catch (error) {
    console.error(`Failed to fetch ${repoUrl}:`, error);
    return null;
  }
}

export async function getRepositories(
  repoUrls: readonly string[],
): Promise<Repository[]> {
  const repos = await Promise.all(repoUrls.map(fetchRepo));
  return repos.filter((repo): repo is Repository => repo !== null);
}
