import React from 'react';
import PropTypes from 'prop-types';

/*
on prend la liste recu par le parents transportée par les props
on map dessus pour itérer sur chaque item les fonctions et la valeur du level donnée par l'index au tout début
et on retourne la liste dans le <ul>

*/
const TotoListe = (props) =>  {
    const listItems = props.listItems

    const liste = listItems.map((item, index) =>
    
        <li style={{marginLeft:(item.level*20)+'px'}} onClick={()=>props.handleClick(index)}>
            {item.content} L.{item.level}
        </li>
    )

    return (
        <ul>{liste}</ul>
    )
}

TotoListe.propTypes = {
    listItems: PropTypes.array.isRequired
}

export default TotoListe;