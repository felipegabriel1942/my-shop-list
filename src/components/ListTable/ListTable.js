import React, {Component} from 'react'
import {Table, Card} from 'reactstrap';
import classes from './ListTable.module.css'

class ListTable extends Component {
  
  render() {
    // this.props.lista.map é o primo do ngFor do react ele precisa de uma key
    //para evitar erros
    return (
      <Card 
        className={classes.Card}>
        <Table hover>
          <thead>
            <tr>
              <th>Listas cadastradas</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.lista.map(listas => (
                <tr key={listas.id}>
                  <td>{listas.nome}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Card>
    )
  }
}

export default ListTable;