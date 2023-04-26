export const NEXT_MOVIE = "NEXT_MOVIE";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const PREVIOS_MOVIE = "PREVIOS_MOVIE";

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const previousMovie = () => {
  return { type: PREVIOS_MOVIE };
};

export const addFavorites = (movie) => {
  return { type: ADD_FAVORITES, payload: movie };
};
