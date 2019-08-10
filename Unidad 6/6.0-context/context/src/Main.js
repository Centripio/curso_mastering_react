import React from 'react'
import UserContext from './contexs/UserContext'
import ThemeContext from './contexs/ThemeContext'
class Main extends React.Component{

    render(){
        return(
            <ThemeContext.Consumer>
                {
                    ({bg, color}) => (
                        <UserContext.Consumer>
                            {
                                ({login, username, name}) => (
                                    login ? <p style={{color: color}}>{username} - {name}</p>
                                        : <p style={{color: color}}>No autenticado</p>
                                    
                                )
                            }
                        </UserContext.Consumer>
                    )
                }
            </ThemeContext.Consumer>
            
        )
    }
}

export default Main