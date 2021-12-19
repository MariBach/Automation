import superagent from "superagent";
import chai from "chai"; 

const expect = chai.expect;
describe('API testing', () => {
    it('Write product review', async () => {
        const response = await superagent.put('http://localhost:3000/rest/products/1/reviews',{'message': "tasty↵", 'author': "test@test.com"});
        console.log("*****RESPONSE******" +  JSON.stringify(response));
        console.log(response.statusCode)
        expect(response.statusCode).to.equal(201);
    })
})
//http://localhost:3000/rest/products/1/reviews
//Request URL: http://localhost:3000/rest/products/1/reviews
