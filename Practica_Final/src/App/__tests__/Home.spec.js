import React from 'react';
import { render, mount } from 'enzyme';

import { Provider } from "react-redux";
import store from '../store';

// Componente
import Home from '../Home';



describe("Home", () => {
  describe("Render", () => {
    let wrapper;
    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<Provider store={store}><Home/> </Provider>);
    });


    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });


    it('should add the HTML elements', () => {      
      // Comprobamos los distintos aspectos de HTML      
      expect(wrapper.find('h2')).toBeTruthy();
    }); 

  });

  /*
  describe("Features", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<Provider store={store}><Home/> </Provider>);
    });

    it('should pass the ref to the input', () => {
      // En este caso necesitamos montar el componente ya que la nueva API de
      // referencias solo se instancian con mount
      const instance = wrapper.instance();
      instance.setProps({ isLoading: true });

      expect(instance.find('p')).toBeTruthy();
    });

  });
  */

});


