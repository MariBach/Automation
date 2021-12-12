import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checkig get feedback', async () => {
        const response = await superagent.get('http://localhost:3000/api/Feedbacks/');
        console.log("*****RESPONSE******" +  JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(200);
    })
})