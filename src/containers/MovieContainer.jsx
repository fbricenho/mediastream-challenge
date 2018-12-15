import React, { Component } from 'react';
import { MovieList, DisplayMsg} from '../components';
import { connect } from 'react-redux';
import { fetchMovieList } from '../shared';

class MovieContainer extends Component {
  componentDidMount() {
    if (!this.props.params.keyword) {
      const {dispatch} = this.props;
      dispatch(fetchMovieList());
      // TODO: MISSING SAVE TO FAVORITES
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.movies !== nextProps.movies;
  }

  render() {
    const {movies} = this.props;

    if (movies.length > 0) {
      return (<MovieList movies={movies} />);
    } else {
      return (<DisplayMsg />);
    }
  }
}

function mapStateToProps(state, ownProps){
  const {movieList} = state;
  const {items: movies} = movieList;
  const keyword = ownProps.params.keyword;

  return {movies, keyword}
}

export default connect(mapStateToProps)(MovieContainer);
