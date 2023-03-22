import { cardSelected } from "./utils.js";

const container = document.querySelector(".container");
const inputEl = document.querySelector("#searchInput");
const btnEl = document.querySelector(".search-button");

const API_KEY = "ef9da2ef29346a96ed9ce17e65618666";

const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type, resource, query) => {
  const res = await fetch(
    `${BASE_URL}${type}/${resource}?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
  );
  const data = await res.json();
  return data;
};

let input;

btnEl.addEventListener("click", () => {
  input = inputEl.value;
  GET("search", "tv", input).then((data) =>
    data.results.map((tv) => container.appendChild(cardSelected(tv)))
  );
  container.innerHTML = "";
  console.log(input);
});
