
export function isValidInput (loanAmount, interestRate, years) {
    const loanAmountValue = parseFloat(loanAmount);
    const interestRateValue = parseFloat(interestRate) / 100;
    const yearsValue = parseFloat(years);

    return !(
        isNaN(loanAmountValue) ||
        isNaN(interestRateValue) ||
        isNaN(yearsValue) ||
        loanAmountValue <= 0 ||
        interestRateValue < 0 ||
        yearsValue <= 0
    );
};