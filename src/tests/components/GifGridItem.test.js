import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {

   const title = "coso"
   const url = "https://localhost/coso.png"
   const wrapper = shallow(<GifGridItem title={title} url={url} />);

   test('Debe mostrar el componente correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de tener un párrafo cone el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });

   test('debe tener url y alt de los props', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
   });

   test('debe tenet animate__pulse', () => {
      const card = wrapper.find('.card');
      expect(String(card.prop('className')).indexOf("animate__pulse") >= 0).toBe(true)
   });

});
