import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checking social media link', async () => {
        const response = await superagent.get('https://twitter.com/owasp_juiceshop?prefetchTimestamp=1639247991251');
        console.log("*****RESPONSE******" + response);
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(200);
    })
})
