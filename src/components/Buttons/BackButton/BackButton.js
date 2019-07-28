import React from 'react'
import { Button } from 'reactstrap';



const BackButton = (props) => (
    <Button 
        color="primary"
        className="float-right" 
        style={{marginRight: '10px'}}
        onClick={props.clicked}
        >Voltar</Button>
);

export default BackButton;