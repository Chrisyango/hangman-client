import {API_BASE_URL} from '../config';

export const FETCH_WORDS_REQUEST = 'FETCH_WORDS_REQUEST'; 
export const fetchWordsRequest = () => ({
  type: FETCH_WORDS_REQUEST,
});

export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS'; 
export const fetchWordsSuccess = words => ({
  type: FETCH_WORDS_SUCCESS,
  words
});

export const FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR'; 
export const fetchWordsError = error => ({
  type: FETCH_WORDS_ERROR,
  error
});

export const SET_DISPLAY = 'SET_DISPLAY';
export const setDisplayRequest = display => ({
  type: SET_DISPLAY,
  display
});

export const fetchWords = difficulty => dispatch => {
  dispatch(fetchWordsRequest());
  return fetch(`${API_BASE_URL}/words`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      return res.json();
    })
    .then(words => {
      let wordList = words[0].words;
      let result;
      
      switch(difficulty) {
        case 'medium': 
        result = wordList.filter(word => word.length >= 8 && word.length <= 10);
        break;

        case 'hard': 
        result = wordList.filter(word => word.length > 10);
        break;

        default: 
        result = wordList.filter(word => word.length <= 7);
        break;
      }
      dispatch(fetchWordsSuccess(result));
    })
    .catch(err => {dispatch(fetchWordsError(err))});
};

export const setDisplay = display => dispatch => {
  if (display) {
    dispatch(setDisplayRequest(display));
  } else {
    dispatch(setDisplayRequest(''));
  }
}