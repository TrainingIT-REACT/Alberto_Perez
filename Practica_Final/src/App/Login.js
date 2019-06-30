import React from 'react';
import { connect } from 'react-redux';
// Acciones
import { updateName } from './actions/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Creamos la referencia para el input
    this.input = React.createRef();
    // Bind del método
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateName(this.input.current.value);
    this.input.current.value = '';
    this.props.history.push(`/myplaylist`);
  }


  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <div className="row">
          <div className="six columns">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <label htmlFor="name">Name </label>
                <input id="name" type="text" ref={this.input} placeholder="Ángel, María, Cris, etc."/>
              </div>
              <br/>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
