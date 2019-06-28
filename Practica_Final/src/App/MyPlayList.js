import React, { Component } from 'react';
import { connect } from 'react-redux';
// Acciones
import { updateName } from './actions/user';
//components
import SongList from './components/SongList'

class MyPlayList extends Component {

  componentDidMount() {
    if(this.props.name === ""){
      this.props.history.push(`/`);
    }
  }

  render() {
    return <div>
      <h2>Hola {this.props.name}</h2>
      <p>Canciones escuchadas: </p>
      <SongList songs={this.props.song} history={this.props.history}/>
      <p>Albumes visitados: </p>
      <ul>{this.props.album.map(a => <li key={a.id} data-key={a.id}>{a.name}</li>)}</ul>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    album: state.user.album,
    song: state.user.song
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateName: () => dispatch(updateName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlayList);
