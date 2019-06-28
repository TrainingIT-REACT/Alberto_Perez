import React, { Component } from 'react';

class SongList extends Component {

  constructor(props) {
    super(props);

    // Binds
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // Redirigimos al usuario a la ruta de destino!
    this.props.history.push(`/song/${e.target.getAttribute('data-key')}`);
  }

  render() {
    return <ul>
      { this.props.songs.map((s) => (
        <li key={s.id} data-key={s.id} onClick={this.onClick}>{s.name} - {s.seconds}s.</li>
      ))}
    </ul>
  }
}

export default SongList;
