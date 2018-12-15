import React, { Component } from 'react';
import { TrailerList, ReviewList} from '../components';
import { TRAILER_MAX_NUM, REVIEW_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { MovieInfo, Poster } from '../components';
import { connect } from 'react-redux';
import { fetchMovieDetail, fetchTrailerList, fetchReviewList} from '../shared';

class MovieDetail extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMovieDetail(this.props.params.id));
    dispatch(fetchTrailerList(this.props.params.id));
    dispatch(fetchReviewList(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;

     if (nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchMovieDetail(nextProps.params.id));
         dispatch(fetchTrailerList(nextProps.params.id));
         dispatch(fetchReviewList(nextProps.params.id));
      }
  }

  render() {
    const {movie, trailers, reviews, isFetching_movie, isFetching_trailers, isFetching_reviews} = this.props;

    if (isFetching_movie || isFetching_trailers || isFetching_reviews) {
      return <p>loading...</p>
    }
    if (movie.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={movie.id} path={movie.poster_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <MovieInfo movie={movie}/>
            </Col>
          </Row>
          <Row>
            <TrailerList data={trailers.slice(0,TRAILER_MAX_NUM)} />
          </Row>
          <Row>
            <ReviewList data={reviews.slice(0,REVIEW_MAX_NUM)} />
          </Row>
        </Grid>
      );
    } else return null;
  }
}

function mapStateToProps(state){
  const {movieDetail, trailerList, reviewList} = state;
  const {isFetching_movie, item: movie, error_movie} = movieDetail;
  const {isFetching_trailers, items: trailers, error_trailers} = trailerList;
  const {isFetching_reviews, items: reviews, error_reviews} = reviewList;

  return {isFetching_movie, movie, error_movie, isFetching_trailers, trailers, error_trailers, isFetching_reviews, reviews, error_reviews}
}

export default connect(mapStateToProps)(MovieDetail);
