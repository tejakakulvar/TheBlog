import axios from 'axios';

export const FETCH_LIST_OF_POSTS = 'fetch_list_of_posts';
export const ADDING_NEW_POST = 'adding_new_post';
const rootURL = "http://reduxblog.herokuapp.com/api"
const APIkey = '?key=TEJA1234'

export function fetchListOfPosts(){
  const request = axios.get(`${rootURL}/posts${APIkey}`)
  return{
    type: FETCH_LIST_OF_POSTS,
    payload: request
  }
}

export function addingNewPost(values, successfunction){
  const request = axios.post(`${rootURL}/posts${APIkey}` , values).then(() => successfunction());
  return{
    type: ADDING_NEW_POST,
    payload: request
  }
}
