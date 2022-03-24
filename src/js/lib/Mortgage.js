module.exports = class Mortgage {
    constructor(principle, interest, term, period){
        this.principle = principle;
        this.interest = interest;
        this.term = term;
        this.period = period;
    }

    getPrinciple () {
        return this.principle;
    };
    getInterest () {
        return this.interest;
    }
    getTerm () {
        return this.term;
    }
    getPeriod () {
        return this.period;
    }

    monthlyPayment () {
        const monthlyInterestRate = (this.interest / 100) / this.period;
		const numberOfPayments = this.term * this.period;
		const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
        const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ( (Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1)
		const monthlyPayment = parseFloat((this.principle * interestQuotient).toFixed(2))
        return monthlyPayment;
    }
}