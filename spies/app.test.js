var chai = require('chai');
var sinon = require('sinon')
var sinonChai = require("sinon-chai");
var rewire = require('rewire')

var app = rewire('./app');

var assert = chai.assert;    // Using Assert style (Assest Test FrameWork)
var expectjs = chai.expect;    // Using Expect style (Expect Test FrameWork)
var should = chai.should();  // Using Should style (Should Test FrameWork)

chai.use(sinonChai);

describe('Playing with spy :)', () => {
    it('should call the callback function spy correctly', () => {
        var spy = sinon.spy();

        helloFunc("Tejas", spy);
        expectjs(spy).to.have.been.calledWith("hello Tejas");

    })

    it('should call the spy correctly', () => {
        var spy = sinon.spy();

        spy('Tejas', 24);
        expectjs(spy).to.have.been.calledWith('Tejas', 24);//check spy have been called with that data

    })
})


function helloFunc(name, cb) {
    cb("hello " + name);
}


describe('DB Testing', () => {

    let dbObj = {
        saveUser: sinon.spy()
    };
    app.__set__('db', dbObj);//setting db file with spy

    it('Should call saveUser with user object', () => {
        var email = 'tsabunkar@gmail.com';
        var password = '123KA50V7660';

        app.handleSignup(email, password);
        expectjs(dbObj.saveUser).to.have.been.calledWith({ email: email, password: password });
    })


})
