import React, { Component } from 'react';
import TotoInput from './TotoInput';
import TotoListe from './TotoListe';

/*
la fonction appellée par le composant input embarque les props et mets à jours les states du composant Todo avec setState un spread est éffectué sur le state de base (avec prevState) et on lui rajoute le nouvel objet.

un objet dont la clé et la valeur ont le même nom peut etre écrit avec seulement le nom en commun
{exmeple='exemple'} == {exemple}
*/

class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      listItem:[
      ]
    }
    this.submitContent = this.submitContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  submitContent(content){

    this.setState( (prevState) => {
      return {listItem:[...prevState.listItem, {content:content,level:0}]}
    })
  }

  handleClick(index){
    const newArr = [...this.state.listItem]
    newArr[index] = { ...newArr[index],
       level: this.state.listItem[index].level ? 
       this.state.listItem[index].level -1:
       this.state.listItem[index].level +1 
    }

    this.setState(  
        {listItem: newArr}
    )
  }

  render() {
    return (
      <div className = "App">
          <TotoInput submitContent={this.submitContent}/>
          {/* on appelle le composant TodoListe en lui passant les props */}
          <TotoListe listItems={this.state.listItem} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default Todo;