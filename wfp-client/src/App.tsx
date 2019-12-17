import React, {Component} from 'react';
import  ReactDom  from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { createStore, applyMiddleware} from "redux";
import { mainReducer, defaultState } from "./store/reducer";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(mainReducer, defaultState(), applyMiddleware(thunk));

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        //this.state = { isOpen: false };
    }
    toggle() {
        //this.setState({ isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <div className="container">
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Life Expectancy </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Data</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1> Welcome to the WFP </h1>
                                <p>

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default App;
