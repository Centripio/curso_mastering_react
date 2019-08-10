import React from 'react'

export default class Footer extends React.Component{

    hola(){
        alert("Hola mundo")
    }

    render(){
        return(
            <button onClick={() => this.hola()}> envíar</button>
        )
    }
}