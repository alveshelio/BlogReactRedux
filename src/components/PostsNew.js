import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNewForm extends Component {

  renderInputField({ input, label, placeholder, type, meta: { touched, error } }) {
    const className = `form-group col-xs-8 col-xs-offset-2 ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label >{label}</label>
        <div>
          <input {...input} placeholder={placeholder} type={type} className='form-control' />
          { touched && (error && <span className='text-help'>{error}</span>) }
        </div>
      </div>
    );
  }

  renderTextareaField ({ input, label, placeholder, type, rows, meta: { touched, error } }) {
    const className = `form-group col-xs-8 col-xs-offset-2 ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label >{label}</label>
        <div>
          <textarea {...input} placeholder={placeholder} rows={rows} type={type} className='form-control' />
          { touched && (error && <span className='text-help'>{error}</span>) }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <h3>Add new Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name='title'
            component={this.renderInputField}
            type='text'
            className='form-control'
            placeholder='Post Title'
            autoFocus
          />
          <Field
            name='categories'
            component={this.renderInputField}
            type='text'
            className='form-control'
            placeholder='Post Categories'
          />
          <Field
            name='content'
            component={this.renderTextareaField}
            rows={5}
            className='form-control'
            placeholder='Post Content'
          />
          <div className='col-xs-8 col-xs-offset-2'>
            <button className='btn btn-primary' type='submit' disabled={pristine || submitting}>Save</button>
            <Link to='/' className='btn btn-danger postsNewForm-cancel-button'>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length <= 10) {
    errors.title = 'Must be 10 characters or more';
  }
  if (!values.categories) {
    errors.categories = 'Required';
  }
  if (!values.content) {
    errors.content = 'Required';
  }
  return errors;
};


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is form config
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNewForm));
