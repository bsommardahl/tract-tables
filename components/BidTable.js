import React from 'react';
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

export default class BidTable extends React.Component {
  render() {
    const rows = this.props.bids;

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const renderRow = (row, index) => {
      return <tr key={index} class={row.winner ? 'winner' : ''}>
        <td>{row.bidder}</td>
        <td>{formatter.format(row.bidAmount)}</td>
        <td>{formatter.format(row.perAcre)}</td>
        <td>{row.acreCount}</td>
        <td>{row.comboId}</td>
        <td>{row.tracts.join(",")}</td>
      </tr>
    };

    if (rows.length === 0) {
      return <Alert>{this.props["no-data-message"]}</Alert>
    }

    return <Table striped hover>
      <thead>
        <tr>
          <th>Bidder</th>
          <th>Bid Amount</th>
          <th>Per Acre</th>
          <th>Acre Count</th>
          <th>Combo ID</th>
          <th>Tracts</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(renderRow)}
      </tbody>
    </Table>;
  }
}