import React from 'react'

import Toolbar from './components/Toolbar'
import Main from './Main'

class Template extends React.Component {
    render(){
        return(
            <div>
                <Toolbar/>
                <Main/>
            </div>
        )
    }
}
export default Template;