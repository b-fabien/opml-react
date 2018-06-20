import React from 'react';
import PropTypes from 'prop-types';

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
