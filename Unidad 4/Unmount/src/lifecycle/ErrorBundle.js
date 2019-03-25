import React from 'react'

export default class ErrorBundle extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        console.log('componentDidCatch ==> ');
        
        this.setState({
            hasError : true
        })
    }

    render(){
        return (
            <div>
                { this.state.hasError 
                    ? (<span style={{backgroundColor: 'red'}}>Upsss, hay un error... </span>)  
                    : this.props.children 
                }
            </div>
        )
    }

}