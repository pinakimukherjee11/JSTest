const chai = require('chai')
const { describe } = require('mocha')
const expect = chai.expect
chai.use(require('chai-string'));

const basicUtil = require('../src/basicUtil')

describe('Testing Util functions', () => {
      it('if tiernum is 1, it should be premier', () =>{
          expect(basicUtil.tier(1)).to.equal('premier')
      })
      it('if tiernum is 2, it should not return premier', () =>{
        expect(basicUtil.tier(2)).to.not.equal('premier')
    })

    it('if tiernum is 0, it should be classic', () =>{
        expect(basicUtil.tier(0)).to.equal('classic')
    })

    
    it('if tiernum is 1, it should not be classic', () =>{
        expect(basicUtil.tier(1)).to.not.equal('classic')
    })
})