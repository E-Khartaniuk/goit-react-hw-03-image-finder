export const getFeth = query => {
  const API = '34903513-476090311f5800fa8542a8b0c';
  return fetch(
    `https://pixabay.com/api/?key=${API}&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};

export const loadMore = (query, nextPagey) => {
  const API = '34903513-476090311f5800fa8542a8b0c';
  return fetch(
    `https://pixabay.com/api/?key=${API}&q=${query}&page=${nextPagey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
