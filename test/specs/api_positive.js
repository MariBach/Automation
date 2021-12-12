import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checking positive loggin', async () => {
        const response = await superagent.post('http://localhost:3000/rest/user/login/',{'email': "test1@test.com", 'password': "test123"});
        console.log("*****RESPONSE******" +  JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(200);
    })
})