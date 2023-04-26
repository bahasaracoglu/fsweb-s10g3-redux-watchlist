import { useSelector } from "react-redux";
import { ADD_FAVORITES, NEXT_MOVIE } from "../actions";
import { movies } from "../movies";

const initialState = { sira: 0, movies: movies, favMovies: [] };

const reducer = (state = initialState, action) => {
  if (action.type === NEXT_MOVIE) return { ...state, sira: state.sira + 1 };
  else if (action.type === ADD_FAVORITES)
    return {
      ...state,
      favMovies: [...state.favMovies, action.payload],
    };
  else {
    return state;
  }
};

export default reducer;
