import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import ListTable from '../../components/ListTable/ListTable';
import {Row, Col } from 'reactstrap';
import IncludeListButton from '../../components/Buttons/IncludeListButton/IncludeListButton';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import ProdutoForm from '../../components/Forms/ProdutoForm/ProdutoForm';


class ShopList extends Component {

    state = {
        lista: {
            id: 0,
            nomeLista: '',
            listaProdutos: []
        },
        listas: [],
        modoCriacaoLista: false
    }

    addListaHandler = (lista) => {
        let temp = this.state.listas;
        temp.push(lista);
        this.setState({listas: temp, modoCriacaoLista: !this.state.modoCriacaoLista})
        console.log(this.state);
    }

    criacaoListaHandler = () => {
        this.setState({modoCriacaoLista: !this.state.modoCriacaoLista});   
    }

    render() {

        let content = null;
        let navigationButton = null;

        if(this.state.modoCriacaoLista) {
            content = <ProdutoForm
                listaAdicionada={this.addListaHandler}></ProdutoForm>;
            navigationButton = <BackButton
            clicked={this.criacaoListaHandler}></BackButton>
        } else {
            navigationButton = <IncludeListButton 
                clicked={this.criacaoListaHandler}></IncludeListButton>
            content = <ListTable 
            lista={this.state.listas}/>
        }

        return(
            <div>
                <Toolbar />
                <Row style={{marginLeft: 0, marginRight: 0}}>
                    <Col 
                        md="12" 
                        style={{paddingLeft: 0, paddingRight: 0, marginTop: '5%', marginBottom: '2%'}}
                        className="clearfix">
                        {navigationButton}
                    </Col>
                </Row>

                <Row style={{marginLeft: 0, marginRight: 0}}>
                    <Col 
                        md="12" 
                        style={{paddingLeft: 0, paddingRight: 0}}>
                           {content}                  
                    </Col>
                </Row>
            </div>
        );
    }

}


export default ShopList;