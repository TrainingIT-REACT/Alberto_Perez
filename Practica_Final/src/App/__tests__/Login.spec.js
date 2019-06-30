import React from 'react';
import { render } from 'enzyme';

import { Provider } from "react-redux";
import store from '../store';

// Componente
import Login from '../Login';


describe("Login", () => {
  let wrapper;
  // Inicializamos el componente en un beforeEach para
  // evitar tener que repetir esta línea en cada test
  beforeEach(() => {
    wrapper = render(<Provider store={store}><Login/> </Provider>);
  });


  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should add the HTML elements', () => {      
    // Comprobamos los distintos aspectos de HTML      
    expect(wrapper.find('form')).toBeTruthy();
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  }); 

})


