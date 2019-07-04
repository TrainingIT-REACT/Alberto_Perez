import React from 'react';
import { connect } from 'react-redux';
// Acciones
import { searchSongs } from './actions/song';

import SongList from './components/SongList'

class SearchSong extends React.Component {
  constructor(props) {
    super(props);
    // Creamos la referencia para el input
    this.input = React.createRef();
    // Bind del método
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchSongs(this.input.current.value);
    //this.input.current.value = '';
  }

  renderSongs() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <SongList songs={this.props.song.search} history={this.props.history}/>
    }
  }


  render() {
    return (
      <div>
        <h2>Buscar música</h2>
        <div className="row">
          <div className="six columns">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <label htmlFor="name">Cancion </label>
                <input id="name" type="text" ref={this.input} placeholder="Princess Of The Dawn, ..."/>
              </div>
              <br/>
              <button>Buscar</button>
            </form>
          </div>
        </div>
        <br />
        { this.renderSongs() }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchSongs: (name) => dispatch(searchSongs(name))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchSong);
