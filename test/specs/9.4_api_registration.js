import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Checking post for user creation', async () => {
        let requestBody = {
            "email": "test1@test.com", "password": "test123", "passwordRepeat": "test123",
            "securityAnswer": "11/12/1959", "securityQuestion":
                { 'id': 3, 'question': "Mother's birth date? (MM/DD/YY)","createdAt": "2021-12-12"}
        }
        const response = await superagent.post('http://localhost:3000/api/Users/', requestBody);
        console.log("*****RESPONSE******" + JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(201);
    })
})