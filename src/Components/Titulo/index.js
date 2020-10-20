import React, {Component} from 'react';
import './index.css';

// class pedido : Pedido
// Extends = Herança (:)
class Titulo extends Component {
       render(){
         // || utiliza caso a propriena não esteja inclusa.
        return(
            <div className='background'>
        <h1>{this.props.texto || 'titulo não informado'}</h1> 
        <h4>{this.props.descricao || 'Descrição não informado'}</h4>
        
            </div>
        )
       }
}

export default Titulo;