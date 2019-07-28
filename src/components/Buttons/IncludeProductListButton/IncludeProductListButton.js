import React from 'react'
import { Button } from 'reactstrap';



const IncludeProductListButton = (props) => (
    <Button 
        color="warning"
        className="float-right" 
        style={{marginRight: '10px'}}
        onClick={props.clicked}
        > + Adicionar a lista</Button>
);

export default IncludeProductListButton;