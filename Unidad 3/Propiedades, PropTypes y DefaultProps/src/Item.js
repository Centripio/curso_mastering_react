import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component{

  static defaultProps = {
    employee: true
  }

  render(){

    let user = this.props.user
    console.log("user > ", user)

    return (
      <li>
        {user.name} {user.role} ({user.tel})
        <button onClick={() => this.props.deleteOp(this.props.id)} >x</button>
      </li>
    )
  }
}



Item.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tel: PropTypes.number.isRequired,
    rol: PropTypes.string,
  }).isRequired,
  deleteOp: PropTypes.func.isRequired,
}

export default Item
