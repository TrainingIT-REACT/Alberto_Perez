import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { getAlbum } from './actions/album';
import { getSongsByAlbum } from './actions/song';

//components
import SongList from './components/SongList'


class Album extends Component {

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
    this.props.getSongsByAlbum(this.props.match.params.id);
  }


  renderAlbum() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <div>
              <p>Nombre: {this.props.album.album != null ? this.props.album.album.name : null}</p>
              <p>Artist: {this.props.album.album != null ? this.props.album.album.artist + " - " + this.props.album.album.total + "s" : null}</p>
              <p><img src={this.props.album.album != null ? "/api"+this.props.album.album.cover : null} 
                      alt={this.props.album.album != null ? this.props.album.album.name : null}>
                 </img>
              </p>
            </div>
    }
  }

  renderSongs() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <SongList songs={this.props.song.list} history={this.props.history}/>
    }
  }



  render() {
    return (
      <div>
        <h2>Detalle del Album</h2>
        { this.renderAlbum() }
        { this.renderSongs() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbum: (id) => dispatch(getAlbum(id)),
  getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Album);
