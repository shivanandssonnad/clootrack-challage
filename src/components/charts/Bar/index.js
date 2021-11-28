import React, { useMemo } from "react";
import ReactHighcharts from "react-highcharts";

function BarChart(props) {
  const {
    chartTitle,
    chartSubTitle,
    yAxisTitle,
    xAxisCategories,
    series
  } = props;

  const config = useMemo(
    () => ({
      chart: {
        type: "column"
      },
      title: {
        text: chartTitle
      },
      subtitle: {
        text: chartSubTitle
      },
      xAxis: {
        categories: xAxisCategories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: yAxisTitle
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series
    }),
    [chartTitle, chartSubTitle, yAxisTitle, xAxisCategories, series]
  );

  return <ReactHighcharts config={config} />;
}

BarChart.defaultProps = {
  chartTitle: "",
  chartSubTitle: "",
  yAxisTitle: "",
  xAxisCategories: [],
  series: []
};

export default BarChart;
