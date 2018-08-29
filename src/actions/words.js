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

export const fetchWords = words => dispatch => {
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
      dispatch(fetchWordsSuccess(wordList));
    })
    .catch(err => {dispatch(fetchWordsError(err))});
};