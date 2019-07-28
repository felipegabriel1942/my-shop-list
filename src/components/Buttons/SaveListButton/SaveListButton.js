import React from 'react'
import { Button } from 'reactstrap';



const SaveListButton = (props) => (
    <Button 
        color="warning"
        className="float-right" 
        style={{marginRight: '5%', marginTop: '5%'}}
        onClick={props.clicked}
        > + Salvar Lista</Button>
);

export default SaveListButton;