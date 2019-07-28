import React from 'react'
import {Table} from 'reactstrap';
import classes from './ListTable.module.css'


const ListTable = (props) => (
  <Table hover>
    <thead>
      <tr>
        <th>Listas cadastradas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lista 1</td>
      </tr>
      <tr>
        <td>Lista 2</td>
      </tr>
      <tr>
        <td>Lista 3</td>
      </tr>
    </tbody>

  </Table>
);

export default ListTable;