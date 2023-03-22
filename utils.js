const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGenerator = (data) => {
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");

  cardEl.className = "card";
  titleEl.className = "title";

  imageEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imageEl.setAttribute("alt", data.name);

  titleEl.textContent = data.name;

  cardEl.append(imageEl, titleEl);

  return cardEl;
};

const cardSelected = (data) => {
  const container = cE("div");
  const cardEl = cE("div");
  const textEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const overviewEl = cE("p");

  container.className = "wrapper";
  cardEl.className = "card";
  textEl.className = "cardText";
  titleEl.className = "title";
  overviewEl.className = "overview";

  imageEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imageEl.setAttribute("alt", data.name);

  titleEl.textContent = data.name;
  overviewEl.textContent = data.overview;

  cardEl.append(imageEl);
  textEl.append(titleEl, overviewEl);
  container.append(cardEl, textEl);

  return container;
};

export { cE, qS, cardGenerator, cardSelected };
