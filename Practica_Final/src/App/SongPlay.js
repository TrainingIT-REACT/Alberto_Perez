import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from "react-h5-audio-player";

// Acciones
import { getSong } from './actions/song';


class SongPlay extends Component {

  componentDidMount() {
    this.props.getSong(this.props.match.params.id);
  }

  
  renderSong() {
    if (this.props.isLoading) {
      return <p>Cargando...</p>
    } else if (this.props.error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <div>
              <p>Nombre: {this.props.song.song != null ? this.props.song.song.name + " - " + this.props.song.song.seconds + "s": null}</p>
              <p>        {this.props.song.song != null ? 
                              <AudioPlayer
                                  autoPlay={true}
                                  src={"/api"+this.props.song.song.audio}
                                />
                              : null}</p>
            </div>
    }
  }


  render() {
    return (
      <div>
        <h2>Play Song</h2>
        { this.renderSong() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getSong: (id) => dispatch(getSong(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (SongPlay);
