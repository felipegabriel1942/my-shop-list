import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import ListTable from '../../components/ListTable/ListTable';
import {Row, Col } from 'reactstrap';
import IncludeListButton from '../../components/Buttons/IncludeListButton/IncludeListButton';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import ProdutoForm from '../../components/Forms/ProdutoForm/ProdutoForm';


class ShopList extends Component {

    state = {
        listas: [
            {
                id: 1,
                nome: 'Lista 1 cadastrada'
            },
            {
                id: 2,
                nome: 'Lista 2 cadastrada'
            },
            {
                id: 3,
                nome: 'Lista 3 cadastrada'
            },
            {
                id: 4,
                nome: 'Lista 4 cadastrada'
            }

        ],
        modoCriacaoLista: false
    }

    criacaoListaHandler = () => {
        this.setState({modoCriacaoLista: !this.state.modoCriacaoLista});
    }

    render() {

        let content = null;
        let navigationButton = null;

        if(this.state.modoCriacaoLista) {
            content = <ProdutoForm></ProdutoForm>;
            navigationButton = <BackButton
            clicked={this.criacaoListaHandler}></BackButton>
        } else {
            navigationButton = <IncludeListButton 
                clicked={this.criacaoListaHandler}></IncludeListButton>
                console.log(this.state.listas);
            content = <ListTable 
            lista={this.state.listas}/>
        }

        return(
            <div>
                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0}}>
                        <Toolbar />
                    </Col>                    
                </Row>

                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0, marginTop: '5%', marginBottom: '2%'}}
                        className="clearfix">
                        {navigationButton}
                    </Col>
                </Row>

                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0}}>
                           {content}                  
                    </Col>
                </Row>
            </div>
        );
    }

}


export default ShopList;