import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_ERROR,
  SET_DISPLAY,
} from '../actions/words';

const initialState = {
  words: [],
  display: '',
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_WORDS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_WORDS_SUCCESS) {
    return Object.assign({}, state, {
      words: action.words,
      error: null
    });
  } else if (action.type === FETCH_WORDS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === SET_DISPLAY) {
    return Object.assign({}, state, {
      loading: false,
      display: action.display
    });
  }
  return state;
}
