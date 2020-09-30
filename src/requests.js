const API_KEY = "77cd16ef75b2804c059a146301d75167";
const baseUrl = "https://api.themoviedb.org/3/";

export const Urls = {
  Trending: `${baseUrl}trending/all/week?api_key=${API_KEY}`,
  netflixOriginals: `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `${baseUrl}movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`,
};
