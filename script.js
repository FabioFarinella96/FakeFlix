import { GET } from "./api.js";
import { cE, qS, cardGenerator } from "./utils.js";

const mostPopularEl = qS(".most_popular");
const topRatedEl = qS(".top_rated");
const upcomingEl = qS(".upcoming_movies");

Promise.all([
  GET("tv", "top_rated"),
  GET("tv", "popular"),
  GET("movie", "upcoming"),
]).then((data) => {
  data[0].results.map((tv) => mostPopularEl.appendChild(cardGenerator(tv)));
  data[1].results.map((tv) => topRatedEl.appendChild(cardGenerator(tv)));
  data[2].results.map((movie) => upcomingEl.appendChild(cardGenerator(movie)));
});
