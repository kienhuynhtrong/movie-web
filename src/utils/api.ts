import axios from './axios'

export const getHomeData: () => Promise<any> = async () => {
  console.log('run in there')
  const HomeAPIRoutes: {
    [key: string]: { url: string; media_type: "tv" | "movie" };
  } = {
    "Trending Movies": { url: "/trending/movie/week", media_type: "movie" },
    "Popular Movies": { url: "/movie/popular", media_type: "movie" },
    "Top Rated Movies": { url: "/movie/top_rated", media_type: "movie" },
    "Trending TV": { url: "/trending/tv/week", media_type: "tv" },
    "Popular TV": { url: "/tv/popular", media_type: "tv" },
    "Top Rated TV": { url: "/tv/top_rated", media_type: "tv" },
  };

  const promises = await Promise.all(
    Object.keys(HomeAPIRoutes).map((item) => axios.get(HomeAPIRoutes[item].url))
  );

  const data = promises.reduce((final, current, index) => {
    final[Object.keys(HomeAPIRoutes)[index]] = current.data.results.map(
      (item: any) => ({
        ...item,
        media_type: HomeAPIRoutes[Object.keys(HomeAPIRoutes)[index]].media_type,
      })
    );
    return final;
  }, {} as any);
  return data;
};