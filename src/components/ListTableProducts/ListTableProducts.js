import React, {Component} from 'react'
import {Table, Card, CardHeader} from 'reactstrap';
import classes from './ListTableProducts.module.css'

class ListTableProduct extends Component {
  
  render() {
    // this.props.lista.map é o primo do ngFor do react ele precisa de uma key
    //para evitar erros
    return (
      <Card 
        className={classes.Card}>
        <CardHeader style={{fontWeight: 'bold', textAlign: 'center'}}>Produtos na lista</CardHeader>
        <Table hover>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.lista.map((lista, index) => (
                <tr key={index}>
                  <td>{lista.produto}</td>
                  <td>{lista.quantidade}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Card>
    )
  }
}

export default ListTableProduct;