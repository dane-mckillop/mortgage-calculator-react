
//Calculates the total interest for a mortage
export function calculateInterest(principal, totalLoan) {

    const totalInterest = totalLoan - principal;

    console.log(totalInterest)

    return totalInterest;
};

//Calculates the total amount for a loan
//Requires the monthlyPayments to be known, see calculateMonthlyPayments
export function calculateTotalLoan(years, monthlyPayment) {

    const paymentsPerYear = 12;
    const totalRepayments = parseFloat(paymentsPerYear * years);

    console.log( totalRepayments * monthlyPayment );
    return totalRepayments * monthlyPayment;
}

//Calculates the principal for a mortage
export function calculatePrincipal(loanAmount, downPayment) {

    let principal = loanAmount - downPayment;

    principal = principal > 0 ? principal : 0;  //Check if principal is negative

    return principal;
};

//Calculates the monthly payments for a mortage
export function calculateMonthlyPayment(principal, years, interestRate) {

    const paymentsPerYear = 12;
    const totalRepayments = parseFloat(paymentsPerYear * years);
    const interestDecimal = parseFloat(interestRate / 100);
    const periodicInterest = interestDecimal / paymentsPerYear;

    const portionOfInterest = principal * (periodicInterest);
    const discountFactor = 1 - Math.pow((1 + (periodicInterest)), -totalRepayments)

    return portionOfInterest / discountFactor;
}