import React from 'react';
import PropTypes from 'prop-types';
/*
toutes les données entrées dans l'application passe par l'input qui les stocke dans l'objet content du state à la soumission du formulaire
handleChange() permets d'obtenir en direct ce qui est écri dans le champ.

*/ 
class TotoInput extends React.Component {   
    constructor(props){
        super(props)
        this.state={
            content:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
    
        let newContent = this.state.content;
        if(newContent) {
            this.props.submitContent(newContent)
            this.setState(
                {content:''}
            )
          }
    }

    render() {
        return ( 
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.content} placeholder= "ajouter une tache" onChange={this.handleChange}/>
            <input type="submit" value="Submit" /> 
        </form>
             );
    }
}

TotoInput.propTypes = {
    submitContent : PropTypes.func.isRequired
}

export default TotoInput;
