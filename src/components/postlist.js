import React from 'react';
import {connect} from 'react-redux';
import {fetchListOfPosts} from '../actions/index'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchListOfPosts();
  }

  renderPosts(){
    return _.map(this.props.listofposts, listofposts => {
      return (
        <li className="list-group-item" key={listofposts.id}>
          <Link to={`/posts/${listofposts.id}`}>
            {listofposts.title}
          </Link>
        </li>
      );
    });
  }
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add New Post
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    listofposts: state.posts
  };
}

export default connect(mapStateToProps,{fetchListOfPosts})(PostList);
