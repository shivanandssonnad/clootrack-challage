import React from "react";
import PieChart from "../../components/charts/Pie";
import TableSeaction from "../Table";
import styles from "./styles.module.css";

class PieChartSection extends React.Component {
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
    const { chartTitle, series, seriesTitle } = this.props;
    this.setState({
      chartTitle,
      seriesTitle,
      series: series.map((each, index) => ({
        name: `Value ${index + 1}`,
        y: each
      }))
    });
  }

  handleChange = (seriesId, id, value) => {
    const series = [...this.state.series];
    series[id].y = value || 0;
    this.setState({
      series
    });
  };

  transformDataForTable = () => {
    const { series } = this.state;
    if (Array.isArray(series) && series.length) {
      return series.map((each, index) => ({
        label: each.name,
        value: {
          seriesId: 0,
          id: index,
          label: each,
          value: each.y,
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
    const { chartTitle } = this.state;
    return (
      <div className={styles["section-container"]}>
        <div>
          <TableSeaction data={this.transformDataForTable()} />
        </div>
        <div>
          <PieChart
            series={this.transformSeriesForChart()}
            chartTitle={chartTitle}
          />
        </div>
      </div>
    );
  }
}

export default PieChartSection;
