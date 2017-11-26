import axios from 'axios';

export const FETCH_LIST_OF_POSTS = 'fetch_list_of_posts';
export const ADDING_NEW_POST = 'adding_new_post';
export const FETCH_POST_IN_DETAIL = 'fetch_post_in_detail';
export const DELETE_POST = 'delete_post'

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

export function fetchpostindetail(id){
  const request = axios.get(`${rootURL}/posts/${id}${APIkey}`);
  return{
    type: FETCH_POST_IN_DETAIL,
    payload: request
  }
}

export function deletepost(id, successfunction){
  const request = axios.delete(`${rootURL}/posts/${id}${APIkey}`).then(() => successfunction());
  return{
    type: DELETE_POST,
    payload: id
  }
}
