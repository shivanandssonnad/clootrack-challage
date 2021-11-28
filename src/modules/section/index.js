import React from "react";
import BarChartSection from "./BarChartSection";
import PieChartSection from "./PieChartSection";

class ChartSection extends React.Component {
  render() {
    const { chartType } = this.props;
    switch (chartType) {
      case "Bar":
        return <BarChartSection {...this.props} />;
      case "Pie":
        return <PieChartSection {...this.props} />;
      default:
        return "Invalid chart type";
    }
  }
}

export default ChartSection;
