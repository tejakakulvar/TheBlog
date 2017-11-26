import _ from 'lodash';
import {FETCH_LIST_OF_POSTS} from '../actions/index';

export default function (state={}, action){
  switch(action.type){
    case FETCH_LIST_OF_POSTS:
      return _. mapKeys(action.payload.data, 'id');
    default:
      return state
  }
}
