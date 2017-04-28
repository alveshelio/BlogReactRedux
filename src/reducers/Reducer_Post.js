// Reducer
import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // _.mapKeys() converts an array into an object where the key is the 2nd argument passed to mapKeys
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
