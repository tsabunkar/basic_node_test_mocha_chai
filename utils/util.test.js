const utilFile = require('./util')
var chai = require('chai');  


var assert = chai.assert;    // Using Assert style (Assest Test FrameWork)
var expect = chai.expect;    // Using Expect style (Expect Test FrameWork)
var should = chai.should();  // Using Should style (Should Test FrameWork)

//A test case is a function which will check weather we get expected output or not
it('Should add two number', () => {//Define new TestCase
    //Mocha is build on Behavioural driven development (BDD)    
   var res = utilFile.add(33, 11);

     /* if (res !== 44) {
        throw new Error(`Excepted 44 , but got ${res}`);
    } */

    expect(res).to.equal(44);
    expect(res).to.be.a('number');


});

it('Should square a number', () => {
    var result = utilFile.square(9);

/*     if (result !== 81) {
        throw new Error('Excepted 81, but got ${result}')
    } */

    
    expect(result).to.equal(81).to.be.a('number');//chaining two assertions
  
});

it('Playing with expect', () => {
    expect(12).to.not.equal(11);//12 notequals to 11

    // expect({name:'Tejas'}).to.equal({name : 'Tejas'})//fails (checking hashcode of two different object)
    expect({name:'Tejas'}).to.deep.equal({name : 'Tejas'})//pass (two objects r equal)
    expect({name:'Tejas'}).to.not.deep.equal({name : 'tejas'})//pass  (two objects r not equal)
    // expect([2,3,4]).to.include(5);//fails (5 is not the there in that array)
    expect([2,3,4]).to.include(3);//pass
    expect([2,3,4]).to.not.include(5);//pass
    expect({name: "Tejas", age : 25, location : 'India'}).to.include({age:25})//pass(property& correct value is present in the object)
    // expect({name: "Tejas", age : 25, location : 'India'}).to.include({age:2})//fails
    expect({name: "Tejas", age : 25, location : 'India'}).to.not.include({sex:'Male'})
    expect({a: 1}).to.not.have.property('b');
    expect({a: 1, b : 32}).to.have.property('a');
    expect([1,2,3]).to.have.length(3);
    // expect([]).to.have.length.gt(0);//fails
    expect([1,2,3]).to.have.length.gt(0);
    // expect({ name: 'bob' }).to.have.key('age');//fails
    expect({ name: 'bob' }).to.have.key('name');
    expect({ a: 'Tejas', c: 'Kites' }).to.have.keys(['a', 'c']);
    expect({a: 1, b:23,c:'Tejas'}).to.have.property('a');
    // expect({a: 1, b:23,c:'Tejas'}).to.have.property('name');//fails
    expect(1).to.be.within(0, Infinity);
    // expect(2).to.be.within(23, Infinity);//fails
});

it('Verifiying user Object', () => {
    let userObj = utilFile.setName({},"Tejas Sabunkar");
  
    expect(userObj).to.be.an('object')//Similar to TypeOf
    expect(userObj).not.equal(NaN)
    expect(userObj).not.equal(undefined)
    expect(userObj).to.include({firstName:'Tejas'})
    expect(userObj).to.include({lastName:'Sabunkar'})
    expect(userObj).to.include({firstName:'Tejas', lastName:'Sabunkar'})
})
