import React from "react";
import ChartSection from "./modules/section";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartConfigs: [],
      initialised: false
    };
  }

  componentDidMount() {
    this.fetchChartDetails().then((res) => {
      this.setState({
        chartConfigs: res,
        initialised: true
      });
    });
  }

  fetchChartDetails = () => {
    return fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
    )
      .then((res) => res.json())
      .then((res) =>
        res.map((each, index) => ({
          id: index,
          chartType: each.type,
          series: each.elements,
          chartTitle: `Chart ${index + 1}`
        }))
      )
      .catch((res) => []);
  };

  render() {
    const { chartConfigs, initialised } = this.state;
    if (!initialised) return "loading";
    return (
      <div className="App">
        {chartConfigs.map((each) => (
          <ChartSection
            key={each.id}
            chartType={each.chartType}
            series={each.series}
            seriesTitle={each.seriesTitle}
            chartTitle={each.chartTitle}
          />
        ))}
      </div>
    );
  }
}

export default App;
