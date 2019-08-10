import React from 'react'

class FormApp extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      username: 'oscar',
      name: 'Oscar Blancarte',
      languaje: 'es',
      about: 'Soy programador',
      acept: false,
      gender: 'w',
      message: ''
    }
  }

  onChange(e){

    if(e.target.name === 'acept'){
      this.setState({
        [e.target.name]: e.target.checked
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  save(e){

    if(!this.validate()){
      return;
    }

    this.setState({
      message: 'Guardado correctamente'
    })
  }

  validate(){
    if(this.state.acept != true){
      this.setState({
        message: 'Acepte los terminos y condiciones'
      })

      return  false
    }

    return true
  }

  render(){
    return(
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          value={this.state.username}
          onChange={this.onChange.bind(this)}
          name="username" id="username" type="text" />

        <label htmlFor="name">Nombre</label>
        <input
          value={this.state.name}
          onChange={this.onChange.bind(this)}
          name="name" id="name" type="text" />

        <label htmlFor="languaje" >Idioma</label>
        <select id="languaje" name="languaje"
          value={this.state.languaje}
          onChange={this.onChange.bind(this)}>
          <option value="" >Seleccione un valor</option>
          <option value="en" >Ingles</option>
          <option value="es" >Español</option>
          <option value="de" >Alemán</option>
        </select>

        <div>
          <label htmlFor="gender" >Genero</label>
          <input type="radio" name="gender"
            value="m"
            onChange={this.onChange.bind(this)}
            checked={this.state.gender === 'm'}/>Hombre
          <input type="radio" name="gender" value="w"
            onChange={this.onChange.bind(this)}
            checked={this.state.gender === 'w'}
          />Mujer
        </div>

        <label htmlFor="about">Cuentanos algo de tí</label>
        <textarea id="about" name="about"
          value={this.state.about}
          onChange={this.onChange.bind(this)}/>

        <div>
          <input id="acept" name="acept" type="checkbox"
            value={this.state.acept}
            onChange={this.onChange.bind(this)}
            checked={this.state.acept}/> Aceptas terminos y condiciones
        </div>

        <div>
          <button onClick={this.save.bind(this)}>Guardar</button>
          <span style={{color: 'green'}}>{this.state.message}</span>
        </div>

        <div>
          <span>{JSON.stringify(this.state)}</span>
        </div>

      </div>

    )
  }
}

export default FormApp
