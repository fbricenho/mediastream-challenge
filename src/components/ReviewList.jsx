import React from 'react'
import Review from './Review'
import { Col } from 'react-bootstrap'

export default function ReviewList({data}) {
    let reviews = data.map(review => {
      return(
        <Col md={12} key={review.id} >
          <Review review={review} />
        </Col>
      );
    });

    const style = {
      marginTop: '15px',
      color: 'white'
    };

    const titleStyle = {
      paddingLeft: '20px',
      color: 'white'
    };
    
    if (reviews.length !== 0){
      return(
        <div>
          <h3 style={titleStyle}>Reviews</h3>
          <div style={style}>{reviews}</div>
        </div>
      );
    } else {
        return null;
    }
}
