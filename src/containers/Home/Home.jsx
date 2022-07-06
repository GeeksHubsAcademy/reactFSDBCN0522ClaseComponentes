

import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
		super(props);
		
		this.state = {
			//Este es el estado, que ahora está vacio, que sería
            //el equivalente a los hooks.
            nombre : '',
            peliculas : []
		}
		
	}

    //En vez de useEffect, tenemos funciones prehechas más intuitivas....

    //Funcion que equivale al montaje del componente

    componentDidMount(){
        if(this.state.nombre === ''){
            setTimeout(()=>{

                this.setState({nombre : "Ivan"})
            },5000);
        }
    }

    //Funcion para cuando se actualiza

    componentDidUpdate(){

        console.log("Me he actualizado...",this.state.nombre);

    }

    //Funcion que equivale al desmontaje del componente
    componentWillUnmount(){
        console.log("Esto se ejecutará cuando se desmonte el componente");
    }


    render(){
        return(
            <div>
                {this.state.nombre}
            </div>
        )
    }

}

export default Home;