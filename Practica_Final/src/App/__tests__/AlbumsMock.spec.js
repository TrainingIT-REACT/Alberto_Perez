import React from 'react';
import { render, mount } from 'enzyme';

import { Provider } from "react-redux";
import store from '../store';

// Componente
import Albums from '../Albums';

describe("Mocks", () => {
  it('Albums', () => {
    // Definimos el mock
    const getAlbums = jest.fn(() => {
      return {
        "albums": [
          { "id": 1, "name": "Chip off the old block", "artist": "Blair", "cover": "/images/cover.jpg" },
          { "id": 2, "name": "Battle grounds", "artist": "Florian", "cover": "/images/cover.jpg" },
          { "id": 3, "name": "Decisions decisions", "artist": "Skylar", "cover": "/images/cover.jpg" },
          { "id": 4, "name": "Blank canvas", "artist": "Skylar", "cover": "/images/cover.jpg" },
          { "id": 5, "name": "Ice cold", "artist": "Kimberley", "cover": "/images/cover.jpg" },
          { "id": 6, "name": "Honesty", "artist": "Ted Garrett", "cover": "/images/cover.jpg" },
          { "id": 7, "name": "Creative director", "artist": "Delaney", "cover": "/images/cover.jpg" },
          { "id": 8, "name": "No guarantees", "artist": "Kimberley", "cover": "/images/cover.jpg" },
          { "id": 9, "name": "Don't push this button", "artist": "Delaney", "cover": "/images/cover.jpg" },
          { "id": 10, "name": "Cherry", "artist": "Stacy", "cover": "/images/cover.jpg" }
        ]
      }
    });

    // Lo utilizamos
    const albums = getAlbums();
    // Realizamos comprobaciones sobre el
    // Comprobamos que se ha llamado alguna vez
    expect(getAlbums).toHaveBeenCalled();

    // Comprobamos que los valores devueltos sean los correctos
    expect(getAlbums.mock.results[0].value.albums[0].name).toBe('Chip off the old block');
    expect(getAlbums.mock.results[0].value.albums[1].name).toBe('Battle grounds');
    expect(getAlbums.mock.results[0].value.albums[2].artist).toBe('Skylar');
  });

});

/*
describe("Albums", () => {
  
  
  describe("Features", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<Provider store={store}><Albums/> </Provider>);
    });

    it('should pass the ref to the input', () => {
      // En este caso necesitamos montar el componente ya que la nueva API de
      // referencias solo se instancian con mount
      const instance = wrapper.instance();
      instance.setProps({ isLoading: true });

      expect(instance.find('p')).toBeTruthy();
    });

  });

});
*/

