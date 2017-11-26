import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import listofpostsreducer from './FetchListOfPostsReducer'

const rootReducer = combineReducers({
  posts: listofpostsreducer,
  form: formReducer
});

export default rootReducer;
