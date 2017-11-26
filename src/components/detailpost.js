import React from 'react';
import {connect} from 'react-redux';
import {fetchpostindetail ,deletepost} from '../actions/index'
import {Link} from 'react-router-dom'

class DetailPost extends React.Component{
  componentDidMount(){
    //const id = this.props.match.params.id;
    const {id} = this.props.match.params // this es6 notation is equivalent to the above line
    console.log(id);
    this.props.fetchpostindetail(id);
  }

  onClickDeletePost(){
      const {id} = this.props.match.params
      this.props.deletepost(id,() => {
        this.props.history.push('/');
      })
  }

  render(){
    if(!this.props.post){
      return <div> Loading.... </div>
    }
    //const post = this.props.post;
    const {post} = this.props; //equivalent to the above line
    return(
      <div className="detailpost">
        <Link to="/" className = "btn btn-primary"> Home </Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onClickDeletePost.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6> Categories: {post.categories} </h6>
        <p> {post.content} </p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return {post:posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchpostindetail,deletepost})(DetailPost);
