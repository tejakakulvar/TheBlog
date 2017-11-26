import _ from 'lodash';
import {FETCH_LIST_OF_POSTS,FETCH_POST_IN_DETAIL,DELETE_POST} from '../actions/index';

export default function (state={}, action){
  switch(action.type){
    case FETCH_LIST_OF_POSTS:
      return _. mapKeys(action.payload.data, 'id');
    case FETCH_POST_IN_DETAIL:
      return {...state, [action.payload.data.id] : action.payload.data};
    case DELETE_POST:
      return _.omit(state,action.payload);
    default:
      return state
  }
}
