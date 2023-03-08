import { ENDPOINT } from "../../config";
import { ArticleMosk } from "../../__mosk__";

describe('getApi', ()  => {
    it('Should call correct function', async () => {
        try {
            const response = await fetch(ENDPOINT);
            const status = response.status;
            const data = await response.json();
            expect(status).toEqual(200);
            expect(data).toEqual(ArticleMosk);
        } catch (err) {}

    });
});