import React from 'react';
import {Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {addingNewPost} from '../actions/index'

class NewPost extends React.Component{
  renderField(field){
    const {meta : {touched, error}} = field // this is extracting meta property from field object and naming it meta
    // extracting touched and error property from meta and naming them touched and error
    //const className= `form-group ${field.meta.touched && field.meta.error ? 'has-danger':''}`;
    const className= `form-group ${touched && error ? 'has-danger':''}`; // es6 notation for destructuring properties from a object
    // the above line is simialr to line 8
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help" >
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
    this.props.addingNewPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to = "/" className="btn btn-danger"> Cancel </Link>

      </form>
    );
  }
}

    // when rendering link tags over the dom they are rendered as a (anchor) tag

function validate (values) {
  const errors = {};
  if(!values.title){
    errors.title="Enter a title";
  }
  if(!values.categories){
    errors.categories="Enter categories";
  }
  if(!values.content){
    errors.content="Enter content";
  }
  return errors;
}

// the validate function is automatically called whenevr the user submits the form

export default reduxForm({
  validate: validate,
  form:'FormForNewPosts' //this helps in connecting multiple forms to the redux
})
(
  connect(null,{addingNewPost})(NewPost)
);
