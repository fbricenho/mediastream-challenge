import React , { Component } from 'react';
import { Link } from 'react-router';
import { Navbar} from 'react-bootstrap';

export default class Bar extends Component{
  render() {
    return (
        <Navbar fixedTop fluid inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
  }
}
