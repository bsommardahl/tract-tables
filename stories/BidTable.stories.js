import React from 'react';
import BidTable from '../components/BidTable'

export default {
  title: 'BidTable',
  component: BidTable,
};

const bid1 = {
    bidder: 1,
    bidAmount: 750000,
    perAcre: 8810.26,
    acreCount: 85.128,
    comboId: "C1",
    tracts: [1,2],
    winner: false
};

const bid2={
    bidder: 2,
    bidAmount: 850000,
    perAcre: 6560.26,
    acreCount: 125.128,
    comboId: "C5",
    tracts: [3],
    winner: false
};

const bid3 = {
    bidder: 3,
    bidAmount: 60000,
    perAcre: 600.26,
    acreCount: 15.128,
    comboId: "C3",
    tracts: [1,5,10],
    winner: false
};

const bid4winner = {
    bidder: 3,
    bidAmount: 60000,
    perAcre: 600.26,
    acreCount: 15.128,
    comboId: "C3",
    tracts: [1,5,10],
    winner: true
};

export const DataOneWinner = () => <BidTable bids={[bid4winner]} />;

DataOneWinner.story = {
  name: 'With Data, One Winner',
};

export const DataNoWinners = () => <BidTable bids={[bid1, bid2, bid3]} />;

DataNoWinners.story = {
  name: 'With Data, No Winners',
};

export const NoDataWithMessage = () => <BidTable bids={[]} no-data-message="There are no winning bids." />;

NoDataWithMessage.story = {
  name: 'Without Data',
};
