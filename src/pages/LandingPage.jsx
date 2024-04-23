import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import RepaymentCalculator from '../components/RepaymentCalculator';
import LoanChart from '../components/LoanChart';

const LandingPage = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPrincipal, setTotalPrincipal] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalLoan, setTotalLoan] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const changeMonthlyPayment = (value) => {
        setMonthlyPayment(value);
    }
    const changeTotalPrincipal = (value) => {
        setTotalPrincipal(value);
    }
    const changeTotalInterest = (value) => {
        setTotalInterest(value);
    }
    const changeTotalLoan = (value) => {
        setTotalLoan(value);
    }
    const changeDownPayment = (value) => {
        setDownPayment(value);
    }

    return (
        <div>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Typography variant="h4" sx={{ py: 3 }}>
                    Repayment Calculator
                </Typography>
                <RepaymentCalculator
                    monthlyPayment={monthlyPayment}
                    changeMonthlyPayment={changeMonthlyPayment}
                    totalLoan={totalLoan}
                    changeTotalLoan={changeTotalLoan}
                    totalPrincipal={totalPrincipal}
                    changeTotalPrincipal={changeTotalPrincipal}
                    totalInterest={totalInterest}
                    changeTotalInterest={changeTotalInterest}
                    downPayment={downPayment}
                    changeDownPayment={changeDownPayment}
                />
                <LoanChart
                    totalPrincipal={totalPrincipal}
                    totalInterest={totalInterest}
                    totalLoan={totalLoan}
                />
            </Stack>
        </div>
    )
}

export default LandingPage;