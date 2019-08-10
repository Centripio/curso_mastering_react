import React from 'react'
import UserContext from '../contexs/UserContext'
import ThemeContext from '../contexs/ThemeContext'

export default function Toolbar() {

    function updateUser(updateContext){
        let login = {
            login: true,
            username: "Juan",
            name: "Juan Perez"
        }
        updateContext(login)
    }

    return(
        <ThemeContext.Consumer>
            {
                ({bg, color}) => (
                    <UserContext.Consumer>
                        {
                            ({login, name, username, updateContext}) => (
                                <nav className={`navbar navbar-light ${bg} justify-content-between`} >
                                    <a className="navbar-brand" href="#" >
                                        <span style={{color: color}} >Centripio</span>
                                    </a>
                                    {
                                        login ? <span>{username}</span>
                                            : <button onClick={(e) => updateUser(updateContext)} className="btn btn-success btn-sm">Login</button>
                                    }
                                    
                                </nav>  
                            )
                        }
                    </UserContext.Consumer>
                )
            }
        </ThemeContext.Consumer>
        
        
    )
}