const chai = require('chai');
const expect = chai.expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');


var post;
var postHelperStub;
describe("Test cases for posts", function () {
  

  describe("when post exists, should return title with prepend string", function () {
    beforeEach(function () {
      postHelperStub =sinon.stub(); // the fake method on the dependency
      postHelperStub.withArgs('Abc').returns({'title': 'Abc'});

      post = proxyquire('../src/helpers/post', {
      '../posts/postHelper' : { 'getPostByCriteria' : postHelperStub},
      '@noCallThru': true
          });// the module to test
        
    });

    afterEach(function () {
      sinon.restore();
    });

    it("should return `true`", function () {
      var actual = post('Abc');
      expect(actual.title).to.equals('Abc');
            
    });
  });

  describe("when no post passed should return null", function () {
      beforeEach(function () {
        postHelperStub =sinon.stub(); // the fake method on the dependency
        postHelperStub.withArgs('').returns(null);
  
        post = proxyquire('../src/helpers/post', {
        '../posts/postHelper' : { 'getPostByCriteria' : postHelperStub},
        '@noCallThru': true
            });// the module to test
          
      });
  
      afterEach(function () {
        sinon.restore();
      });

      it("should return `null`", function () {
        var actual = post('');
        expect(actual).to.be.a('null');
              
      });
  
});

});