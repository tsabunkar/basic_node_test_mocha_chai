const utilFile = require('./util')

//A test case is a function which will check weather we get expected output or not
it('Should add two number', () => {//Define new TestCase
    //Mocha is build on Behavioural driven development (BDD)    
    var res = utilFile.add(33, 11);

    if (res !== 44) {
        throw new Error(`Excepted 44 , but got ${res}`);
    }


});

it('Should square a number', () => {
    var result = utilFile.square(9);

    if (result !== 81) {
        throw new Error('Excepted 81, but got ${result}')
    }
})
