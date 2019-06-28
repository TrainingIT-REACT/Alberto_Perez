import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { getAlbums } from './actions/album';

// Css
import './App.css';

class Albums extends Component {

  constructor(props) {
    super(props);

    // Binds
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  onClick(e) {
    // Redirigimos al usuario a la ruta de destino!
    this.props.history.push(`/album/${e.target.getAttribute('data-key')}`);
  }

  renderAlbums() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <ul>{this.props.album.list.map(a => <li key={a.id} data-key={a.id} onClick={this.onClick}>{a.name}</li>)}</ul>
    }
  }
  

  render() {
    return (
      <div>
        <h2>Lista de Albums</h2>
        <p>
          Seleccione un albúm para ver sus canciones:
        </p>
          { this.renderAlbums() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Albums);
