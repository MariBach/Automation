import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checking positive loggin', async () => {
        const response = await superagent.post('http://localhost:3000/assets/i18n/ru_RU.json',{"LANGUAGE": "Pусский", "NAV_SEARCH": "Поиск", "SEARCH_PLACEHOLDER": "Поиск...",});
        console.log("*****RESPONSE******" +  JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(200);
    })
})