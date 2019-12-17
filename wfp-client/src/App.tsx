import React from 'react';
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Expectancy from "./pages/Expectancy";

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
                        <Router>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link  className="nav-link" to="/data"> Data </Link>
                            </NavItem>
                        </Nav>
                            <Switch>
                                <Route exact path="data" component={Expectancy} />
                            </Switch>
                        </Router>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Life Expectancy Wfp</h1>
                                <p>
                                    <a className="btn btn-primary" href="/data" > View Data</a>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
