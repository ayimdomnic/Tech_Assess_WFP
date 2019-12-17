import React, { Component } from "react";
import { connect} from 'react-redux';
import queryString from 'query-string';
import { AppActions } from "../store/action";
import { Card , CardHeader, CardTitle, CardBody, Table} from "reactstrap";
import './Expectancy.css';

class Expectancy extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Card className="shadow-lg mt-4">

                        </Card>
                    </div>
                    <div className="col-9">
                        <Card className="shadow-lg mt-4">
                            <CardHeader>
                                <CardTitle>
                                    <h1> Life Expectancy at Birth and at 6o years</h1>
                                </CardTitle>
                                <CardBody>
                                    <Table className="table-bordered table-responsive table-hover">

                                    </Table>
                                </CardBody>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }


}

export default connect()