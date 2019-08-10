import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component{
    
    constructor(args){
        super(args)
        this.state = {
            comments: [
                {
                    name: "Oscar Blancarte",
                    comment: "hola mundo"
                },{
                    name: "Juan Perez",
                    comment: "Curso de Mastering React"
                }
            ]
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.comments.map((item,index) => <Comment key={index} name={item.name} comment={item.comment}/>)
                }
            </div>
        )
    }
}