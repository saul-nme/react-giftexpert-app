import { getGift } from '../../helpers/getGifts';

describe('Pruebas con getGifts fetch', () => {
   test('debe traer 10 elementos', async () => {

      const gifs = await getGift("opm");
      expect(gifs.length).toBe(10);

   });

   test('debe traer 0 elementos', async () => {

      const gifs = await getGift("");
      expect(gifs.length).toBe(0);

   });

})
