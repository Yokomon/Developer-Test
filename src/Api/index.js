const KEY =
  "?client_id=31ce87b9ab117506482470ea3fa3321ad3ae078b4c0a685d16053664d996cd40";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
