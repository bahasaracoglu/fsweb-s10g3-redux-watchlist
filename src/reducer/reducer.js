import { useSelector } from "react-redux";
import { ADD_FAVORITES, NEXT_MOVIE, PREVIOS_MOVIE, TO_HOME } from "../actions";
import { movies } from "../movies";

const initialState = { sira: 0, movies: movies, favMovies: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };
    case PREVIOS_MOVIE: {
      return { ...state, sira: state.sira - 1 };
    }
    case TO_HOME: {
      return { ...state, sira: 0 };
    }

    case ADD_FAVORITES:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
  }
  return state;
};

export default reducer;
