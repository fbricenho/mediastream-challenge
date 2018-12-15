import React from 'react';
import { Panel } from 'react-bootstrap';

/**
 * Represents a trailer 
 * @param {string} review - the address of trailer for YouTube api
 */
export default function Review({review}) {
  const contentStyle = {
    color: 'black'
  }
  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{review.author}</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={contentStyle}>{review.content}</Panel.Body>
      </Panel>
    </div>
  );
}
