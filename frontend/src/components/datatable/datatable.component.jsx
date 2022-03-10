import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap.css';

const DataTable = ({ data, columns, events }) => {
  return (
    <ReactTabulator
      data={data}
      columns={columns}
      layout="fitColumns"
      responsiveLayout="hide"
      events={events}
    />
  )
}

export default DataTable;
