import React, {Component} from 'react';
import  ReactDom  from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { createStore, applyMiddleware} from "redux";
import { mainReducer, defaultState } from "./store/reducer";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(mainReducer, defaultState(), applyMiddleware(thunk));
export interface AppProps {
}

export interface AppState {
    isOpen: boolean
}
export default class App extends React.Component<AppProps, AppState> {
    toggle() {

    }

    render() {
        return (
            <div className="container">
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/"> Wfp Task</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/"> Data </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about"> About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Life Expectancy Wfp</h1>
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
