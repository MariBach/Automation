import superagent from "superagent";
import chai from "chai";
import Chance from "chance";

const expect = chai.expect;
let chance = new Chance();
let mail = chance.email({ domain: "@test.com" });
let password = chance.natural({ min: 5, max: 10 });
describe('API testing', () => {
    it('Checking post for user creation', async () => {        
        let requestBody = {
            "email": `${mail}`, "password": `${password}`, "passwordRepeat": `${password}`,
            "securityAnswer": "11/12/1959", "securityQuestion":
                { 'id': 3, 'question': "Mother's birth date? (MM/DD/YY)","createdAt": "2021-12-12"}
        }
        const response = await superagent.post('http://localhost:3000/api/Users/', requestBody);
        console.log("*****RESPONSE******" + JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(201);
    })
})