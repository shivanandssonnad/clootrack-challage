import React from "react";
import BarChart from "../../components/charts/Bar";
import TableSeaction from "../Table";

import styles from "./styles.module.css";

class BarChartSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartTitle: "Chart Title",
      chartSubTitle: "Chart Sub Title",
      yAxisTitle: "Y Axis Title",
      xAxisCategories: [],
      series: []
    };
  }

  componentDidMount() {
    const {
      chartTitle,
      chartSubTitle,
      yAxisTitle,
      series,
      seriesTitle
    } = this.props;
    this.setState({
      chartTitle,
      chartSubTitle,
      yAxisTitle,
      xAxisCategories: series.map((each, index) => `Value ${index + 1}`),
      seriesTitle,
      series
      // series: [
      //   {
      //     name: seriesTitle,
      //     data: series
      //   }
      // ]
    });
  }

  handleChange = (seriesId, id, value) => {
    const series = [...this.state.series];
    series[id] = value || 0;
    this.setState({
      series
    });
  };

  transformDataForTable = () => {
    const { series, xAxisCategories } = this.state;
    if (Array.isArray(series) && series.length) {
      return xAxisCategories.map((each, index) => ({
        label: each,
        value: {
          seriesId: 0,
          id: index,
          label: each,
          value: series[index],
          onChange: this.handleChange
        }
      }));
    }
    return [];
  };

  transformSeriesForChart = () => {
    const { series, seriesTitle } = this.state;
    return [
      {
        name: seriesTitle,
        data: series
      }
    ];
  };

  render() {
    const {
      chartTitle,
      chartSubTitle,
      yAxisTitle,
      xAxisCategories
    } = this.state;
    return (
      <div className={styles["section-container"]}>
        <div>
          <TableSeaction data={this.transformDataForTable()} />
        </div>
        <div>
          <BarChart
            series={this.transformSeriesForChart()}
            chartTitle={chartTitle}
            chartSubTitle={chartSubTitle}
            yAxisTitle={yAxisTitle}
            xAxisCategories={xAxisCategories}
          />
        </div>
      </div>
    );
  }
}

export default BarChartSection;
