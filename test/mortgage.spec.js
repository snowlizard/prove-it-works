const expect = require('chai').expect;
const Mortgage = require('../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach( () => {
        let principal = 250000;
        let interest = 3;
        let term = 30;
        let period = 12;
        mortgage = new Mortgage(principal, interest, term, period);
    });

    it('should have a montlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a principle', () => {
        expect(mortgage.getPrinciple()).to.be.a('number')
    });

    it('should have an interest rate', () => {
        expect(mortgage.getInterest()).to.be.a('number')
    });

    it('should have a term', () => {
        expect(mortgage.getTerm()).to.be.a('number')
    });

    it('should have a period', () => {
        expect(mortgage.getPeriod()).to.be.a('number')
    });

    it('should have a monthly payment of $1,054.01', () => {
        expect(mortgage.monthlyPayment()).to.be.equal(1054.01);
    })
});