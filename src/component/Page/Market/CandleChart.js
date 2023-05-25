import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function CandleChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      const formattedData = formatDataWithColor(data);

      const chartOptions = {
        chart: {
          type: 'candlestick',
          width: '235%',
          height: '95%',
          foreColor: '#4E4F51', 
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          pan: {
            enabled: false,
          },
        },
        series: [
          {
            data: formattedData,
          },
        ],
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              height: '1px',
              colors: '#4E4F51', 
            },
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            style: {
              colors: '#4E4F51', 
            },
          },
        },
        grid: {
          borderColor: '#282A2E',
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
          x: {
            show: true,
            format: 'dd MMM yyyy',
          },
          y: {
            show: true,
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
        },        
      };

      const chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  const formatDataWithColor = (data) => {
    return data.map((item, index) => {
      const close = item.y[3];
      const color =
        index > 0 && close > data[index - 1].y[3] ? '#00b894' : '#e74c3c';
      return {
        x: item.x,
        y: item.y,
        color: color,
      };
    });
  };

  return <div ref={chartRef} />;
}

export default CandleChart;