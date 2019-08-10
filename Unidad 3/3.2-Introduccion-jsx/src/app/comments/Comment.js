import React from 'react'
import Footer from './Footer'

export default class Comment extends React.Component{

    render(){
        let array = [
            {
                name: "Oscar Blancarte",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut rhoncus nibh, eget mattis neque. Morbi congue enim mattis velit aliquam, ac hendrerit arcu facilisis. Aliquam erat volutpat. Nam eget pharetra urna. Pellentesque id nunc viverra, euismod leo blandit, tincidunt neque. Aliquam ut ante erat. Duis bibendum at nibh id lacinia. Sed nec sapien nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit odio, vestibulum in consectetur lacinia, dignissim sed purus. Maecenas at risus semper, egestas turpis semper, ullamcorper diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut finibus nibh. Etiam non consectetur neque."
            },
            {
                name: "Juan Perez",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut rhoncus nibh, eget mattis neque. Morbi congue enim mattis velit aliquam, ac hendrerit arcu facilisis. Aliquam erat volutpat. Nam eget pharetra urna. Pellentesque id nunc viverra, euismod leo blandit, tincidunt neque. Aliquam ut ante erat. Duis bibendum at nibh id lacinia. Sed nec sapien nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit odio, vestibulum in consectetur lacinia, dignissim sed purus. Maecenas at risus semper, egestas turpis semper, ullamcorper diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut finibus nibh. Etiam non consectetur neque."
            }
        ]



        let comments = 1==2 ? <article className="comment">
            <p style={ {backgroundColor: "red", color: "blue"} }>Oscar Blancarte</p>
            <p>xyz</p>
            <Footer></Footer>
        </article> : <p>hola mundo</p>

        return(
            <div>
                
                {comments}
            </div>
            
        )
    }
}

