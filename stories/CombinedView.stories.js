import React from 'react';
import CombinedView from '../views/CombinedView';

export default {
  title: 'CombinedView',
  component: CombinedView,
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

export const DataOnBothSides = () => <CombinedView winning-bids={[bid4winner]} second-place-bids={[bid1,bid3,bid2]} />;

DataOnBothSides.story = {
  name: 'Data on both sides',
};

export const NoDataEitherSide = () => <CombinedView />;

NoDataEitherSide.story = {
  name: 'No data either side',
};

export const DataOnlyWinner = () => <CombinedView winning-bids={[bid4winner]} />;

DataOnlyWinner.story = {
  name: 'Data only winner',
};

export const DataOnlySecondPlace = () => <CombinedView second-place-bids={[bid3,bid2]} />;

DataOnlySecondPlace.story = {
  name: 'Data only second place',
};
