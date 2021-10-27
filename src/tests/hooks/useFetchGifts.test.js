import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifts } from '../../hooks/useFetchGifts';

describe('Pruebas en el hook useFetchGifts', () => {

   test('Debe de retornar el estado inicial', async () => {

      const { result, waitForNextUpdate } = renderHook(() => useFetchGifts("DBS"));
      await waitForNextUpdate();
      const { data, loading } = result.current;

      // expect(data).toEqual([]);
      expect(loading).toBe(false);
   });

   test('debe de retornar un arreglo de img y loading en false', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifts("DBS"));
      await waitForNextUpdate();

      const { data, loading } = result.current;

      expect(data.length).toEqual(10);
      expect(loading).toBe(false);
   });


});
