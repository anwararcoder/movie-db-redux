import { ALL_MOVIES } from "../Types/MovieType";

const initValueState = { movies: [], pageCount: 0 };
export const movieReducer = (state = initValueState, action) => {
  switch (action.type) {
    case ALL_MOVIES:
      return { movies: action.data, pageCount: action.pages };

    default:
      return state;
  }
};
