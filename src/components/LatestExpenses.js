import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';

const LatestExpenses = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Jose</td>
                    <td>17/12/2019</td>
                    <td>Work</td>
                    <td>ARS 250</td>
                    <td>Lunch</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jose</td>
                    <td>16/12/2019</td>
                    <td>Home</td>
                    <td>ARS 500</td>
                    <td>Dinner</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Ana</td>
                    <td>16/12/2019</td>
                    <td>Villa Urquiza</td>
                    <td>ARS 200</td>
                    <td>Uber Ride</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default LatestExpenses