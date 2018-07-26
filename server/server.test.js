const request = require('supertest')
var chai = require('chai');

const { app } = require('./server');


var assert = chai.assert;    // Using Assert style (Assest Test FrameWork)
var expectjs = chai.expect;    // Using Expect style (Expect Test FrameWork)
var should = chai.should();  // Using Should style (Should Test FrameWork)



//describe is method from MOCHA
//descibe is helps to group test together

describe('Server Test Cases', () => {


    describe('#GET("/")', () => {
        //When u r running this test case , NO NEED TO RUN SERVER
        it('should pass hello world response', (done) => {

            request(app).get('/') //GET request url
                .expect(200) //Status code
                .expect('Hello World') //response body
                .end(done);
        })

    })

    describe('#GET("/error")', () => {

        it('should pass /error response where request is object', (done) => {

            /*   request(app).get('/error') 
                          .expect(404) 
                          .expect({
                             error : 'Page not found!'
                          })
                          .end(done); */

            //Alternative way, using chai
            request(app).get('/error')
                .expect(404)
                .expect((resp) => {
                    // console.log(res.body);
                    expectjs(resp.body).to.include({
                        error: 'Page not found!'
                    })
                })
                .end(done);
        });
    });


    describe('#GET("/user")', () => {
        it('Should pass /user routes', (done) => {

            request(app).get('/user')
                .expect(200)
                .expect((resp) => {
                    // console.log(resp.body);

                    expectjs(resp.body).to.be.an('array');
                    expectjs(resp.body).to.have.length(3);
                    expectjs(resp.body).not.eql([]);//checking not empty array
                    expectjs(resp.body).to.include.deep.members([
                        {
                            name: 'Tejas',
                            age: 24
                        }
                    ]);

                })
                .end(done);
        })
    })

})