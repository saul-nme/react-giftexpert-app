import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

   const addCategories = jest.fn();

   let wrapper = shallow(<AddCategory addCategories={addCategories} />);

   beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory addCategories={addCategories} />);

   });

   test('Debe mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de cambiar la caja de texto', () => {

      const input = wrapper.find('input');
      const value = 'Hola m!';
      input.simulate('change', { target: { value } });

      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(value);

   });

   test('no debe de hacer submit', () => {

      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(addCategories).not.toHaveBeenCalled();

   });

   test('debe llamat addCaterogies y limiar la caja de texto', () => {
      /**
       * 1. Simular inputChange
       * 2. Simular submit
       * 3. Llamar addCategories
       * 4. El valor del input debe ser vacio ''
       */

      // 1
      const input = wrapper.find('input');
      const value = 'wenas wenas';
      input.simulate('change', { target: { value } });

      // 2
      const form = wrapper.find('form');
      form.simulate('submit', { preventDefault() { } });

      // 3
      expect(addCategories).toHaveBeenCalled();

      // 4
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe('');
   });



})
