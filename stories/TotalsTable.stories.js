import React from 'react';
import TotalsTable from '../components/TotalsTable'

export default {
  title: 'TotalsTable',
  component: TotalsTable,
};

export const WithData = () => <TotalsTable saleTotal={750000} perAcreTotal={8810.26} />;

WithData.story = {
  name: 'With Data',
};
