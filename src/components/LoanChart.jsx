import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const LoanChart = ({ totalPrincipal, totalInterest, totalLoan }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const totalAmount = totalPrincipal + totalInterest;
        const principalPercentage = (totalPrincipal > 0 ? (totalPrincipal / totalAmount) * 100 : 0);
        const interestPercentage = (totalInterest > 0 ? (totalInterest / totalAmount) * 100 : 0);

        const options = {
            colors: ['#01BAF2', '#71BF45', '#FAA74B', '#B37CD2'],
            chart: {
                type: 'pie',
            },
            title: {
                text: `Mortage: $${totalLoan.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            },
            tooltip: {
                formatter: function () {
                  return `${this.point.name}: ${this.y.toFixed(2)}%`;
                },
              },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.2f} %'
                    },
                    showInLegend: true,
                },
            },
            series: [
                {
                    name: 'Percentage',
                    colorByPoint: true,
                    innerSize: '60%',
                    data: [
                        { name: 'Principal', y: principalPercentage },
                        { name: 'Interest', y: interestPercentage },
                    ],
                },
            ],
        };

        const chart = Highcharts.chart(chartRef.current, options);

        // Clean up the chart when the component unmounts
        return () => {
            chart.destroy();
        };
    }, [totalPrincipal, totalInterest]);

    return <div ref={chartRef} />;
};

export default LoanChart;