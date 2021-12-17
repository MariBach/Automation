import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checking negative loggin', async () => {
        try {
            const response = await superagent.post('http://localhost:3000/rest/user/login/', { "email": "test@test.com", "password": "test1234"});
            console.log("*****RESPONSE******" + JSON.stringify(response));
            console.log(response.statusCode)
        } catch (err) {
            console.error(err);
            }        
    })
})
