import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifts } from "../../hooks/useFetchGifts";

jest.mock('../../hooks/useFetchGifts')

describe('Pruebas en <GifGrid/>', () => {
   const category = "coso";

   test('Debe mostrarse correctamente', () => {
      useFetchGifts.mockReturnValue({
         data: [],
         loading: true,
      });

      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de mostrar items cuando se cargan imágenes useFetchGifts', () => {
      const gifs = [{
         id: "ABC",
         url: 'https://localhost/coso.png',
         title: 'Cosos'
      }]

      useFetchGifts.mockReturnValue({
         data: gifs,
         loading: false,
      });

      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('p').exists()).toBe(false);
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

   });

});
