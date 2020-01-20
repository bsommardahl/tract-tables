import React from 'react';
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

export default class TotalsTable extends React.Component {
  render() {
    const { saleTotal, perAcreTotal } = this.props;

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return <Table className="totalsTable">
      <tbody>
        <tr>
          <td>Sale Total: {formatter.format(saleTotal)}</td>
          <td class="per-acre">Per Acre Total: {formatter.format(perAcreTotal)}</td>
        </tr>
      </tbody>
    </Table>;
  }
}