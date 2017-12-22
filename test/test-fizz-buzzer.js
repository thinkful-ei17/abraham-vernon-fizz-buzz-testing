const fizzBuzz = require("../fizzBuzzer");


require('chai').should();

var expect = require('chai').expect;
// // "describe" is used to declare the entity to be tested, and a callback function that sets up the tests
// describe('isEqual', function() {
//     // indicate the behavior to be tested
//     // typically the "it" statement will also include a callback that provides the test
//     it('should give right answers for equal and unequal inputs');
//   }
// );


describe('fizzBuzz', function () {
  it('should give an integer back', function () {
    fizzBuzz(14).should.be.a('number');
  });

  it('should give the word fizz if given 3', function () {
    fizzBuzz(3).should.be.equal('fizz');
  });

  it('should give the word buzz if given 5', function () {
    fizzBuzz(5).should.be.equal('buzz');
  });

 it('should give the word fizzbuzz if given 15', function () {
    fizzBuzz(15).should.be.equal('fizz-buzz');
  });

  it('should give the error num must be a number', function () {
    // fizzBuzz("2").should.throw(Error('`num` must be a number'));
    try {
      fizzBuzz("2");
    } catch (e) {
      expect(e).to.be.an('error');
    }
    //expect(new Error).to.be.an('error');
  })
});
