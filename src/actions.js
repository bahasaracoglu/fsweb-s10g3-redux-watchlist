export const NEXT_MOVIE = "NEXT_MOVIE";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const addFavorites = (movie) => {
  return { type: ADD_FAVORITES, payload: movie };
};
