import React from 'react';
import BidTable from '../components/BidTable';
import TotalsTable from '../components/TotalsTable';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

export default class CombinedView extends React.Component {
  render() {

    function getSum(total, num) {
      return total + num;
    }

    const winningBids = this.props["winning-bids"] || [];
    const secondPlaceBids = this.props["second-place-bids"] || [];

    const saleTotal = winningBids.map(x => x.bidAmount).reduce(getSum, 0);
    const perAcreTotal = winningBids.map(x => x.perAcre).reduce(getSum, 0);

    return <Container>
      <Row>
        <Col>
          <h2 class="title">Winning Bids</h2>
          <BidTable bids={winningBids} no-data-message="There are no winning bids." />
          <TotalsTable saleTotal={saleTotal} perAcreTotal={perAcreTotal} />
        </Col>
        <Col>
          <h2 class="title">Second Place Bids</h2>
          <BidTable bids={secondPlaceBids} no-data-message="There are no second place bids." />
        </Col>
      </Row>
    </Container>;
  }
}