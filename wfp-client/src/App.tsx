import React from 'react';
import { connect } from "react-redux";
// import { HashRouter as Router,  Link, Switch} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Row,
    Col,
    Jumbotron,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardHeader,
    NavLink, Table
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import LifeExpectancyModel from "./models/model";
import { IAppState } from "./redux/Store";

export interface AppProps {
    data: LifeExpectancyModel[]
}
interface ExpectancyState {
    region: string;
    gender: string;
    gho: string,
    year: number,
    number_of_years: number
}
interface Iprops {
    data: LifeExpectancyModel[];
}
type State = AppState & ExpectancyState & Iprops & IAppState
export interface AppState {
    isOpen: boolean
    data: LifeExpectancyModel[]
}
class App extends React.Component<AppProps, State> {
    toggle() {

    }

    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/"> Wfp Task</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink  className="nav-link" to="/expectancy"> Life Expectancy Data </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                    <Container>
                        <Row>
                          <Col className="col-md-12">
                                <Jumbotron>

                                    <h1>Life Expectancy Wfp</h1>

                                    <hr/>
                                    <p>
                                        <a className="btn btn-primary" href="/" > Refresh</a>
                                    </p>
                                </Jumbotron>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                <Card className="shadow-lg mt-4">
                                    <CardHeader>
                                        <CardTitle>
                                            <CardText>Data</CardText>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Table className="table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th> Region </th>
                                                 <th> Gender </th>
                                                 <th> GHO </th>
                                                 <th> Year </th>
                                                 <th> Number Of Years</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        { data && data.map(item => {
                                                return (
                                                    <tr>
                                                        <td>{item.region}</td>
                                                        <td>{item.gho}</td>
                                                        <td>{item.year}</td>
                                                        <td>{item.gender}</td>
                                                        <td>{item.number_of_years}</td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                        </tbody>
                                     </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

            </div>
        )
    }

    componentDidMount() {

    }

}

const mapStateToProps = (store: IAppState) => {
    return {
        data: store.expectancyState.data,
    };
};


export default connect(mapStateToProps)(App)



