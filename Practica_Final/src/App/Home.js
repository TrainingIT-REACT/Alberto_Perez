import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { getSongs } from './actions/song';

//components
import SongList from './components/SongList'
import SearchSong from './SearchSong'

class Home extends Component {

  componentDidMount() {
    this.props.getSongs();
  }

  renderSongs() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      //obtenemos 5 canciones al azar
      let index = Math.floor(Math.random()*this.props.song.list.length)
      //controlamos el indice inferior
      if(index < 5){
        index = index + 5
      }
      let list = this.props.song.list.slice(index-5,index)
      return <SongList songs={list} history={this.props.history}/>
    }
  }

  render() {
    return (
      <div>
        <h2>Canciones Recomendadas</h2>
        { this.renderSongs() }
        <SearchSong history={this.props.history}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Home);