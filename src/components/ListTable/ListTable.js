import React, {Component} from 'react'
import {Table, Card, CardHeader} from 'reactstrap';
import classes from './ListTable.module.css'

class ListTable extends Component {
  
  render() {
    // this.props.lista.map é o primo do ngFor do react ele precisa de uma key
    //para evitar erros
    return (
      <Card 
        className={classes.Card}>
        <CardHeader style={{fontWeight: 'bold', textAlign: 'center'}}>Listas cadastradas</CardHeader> 
        <Table hover>
          <tbody>
            {
              this.props.lista.map(listas => (
                <tr key={listas.id}>
                  <td>{listas.nomeLista}</td>
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