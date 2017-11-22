import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

class First extends React.Component{
  render(){
    return <div>First</div>;
  }
}
class Second extends React.Component{
  render(){
    return <div>Second</div>;
  }
}
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/First" component={First}/>
        <Route path="/Second" component={Second}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
