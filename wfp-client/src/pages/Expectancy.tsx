import React from "react";
import { Card , CardHeader, CardTitle, CardBody, Table} from "reactstrap";
import './Expectancy.css';
import LifeExpectancyModel from "../models/model";

export interface ExpectancyProps {
    data: LifeExpectancyModel[]
}

export interface ExpectancyState {
    data: number[]
}

interface DispatchProps {
    fetchData: (params: string) => void
}

interface StateProps {
    propFromReduxStore: string
}

type Props = StateProps & DispatchProps & ExpectancyProps

export default class Expectancy extends React.Component<Props, ExpectancyState> {

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
                                        <thead>
                                        <tr>
                                            <th> Region</th>
                                            <th> Gender </th>
                                            <th> GHO </th>
                                            <th> Year </th>
                                            <th> Number of Years</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                             {this.props.data.map((item, index) =>
                                                <tr key={index}>
                                                     <td>{item.region}</td>
                                                    <td>{item.gho}</td>
                                                    <td>{item.year}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.number_of_years}</td>
                                                </tr>
                                                )}
                                        </tbody>
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




