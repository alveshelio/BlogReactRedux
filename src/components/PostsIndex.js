import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Link to='' key={post.id}>
            <li className='list-group-item'>
              {post.title}
              <span className='post-categories'>{post.categories}</span>
            </li>
        </Link>
      );
    });
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        <div className='text-xs-right new-post-button'>
          <Link className='btn btn-primary' to='/posts/new'>New Post</Link>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/

function mapStateToProps(state) {
  return { posts: state.posts };
}

// Instead of using mapDispatchToProps function we can pass an object
// { fetchPosts: fetchPosts } which is === { fetchPosts }
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
