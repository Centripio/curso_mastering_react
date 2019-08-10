import React, {useContext} from 'react'
import UserContext from './contexts/UserContext';

function Main(){

    const user = useContext(UserContext)

    function logout(){
        
        user.setUser({
            login: false
        })
    }

    return(
        <>
            {
                user.login 
                ? <p>{user.username}:{user.name}</p>
                : <p>No autenticado</p>
            }
            <button onClick={() => logout()}>logout</button>
        </>
    )
}

export default Main