import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          value={x.value}
          maxValue={null}
          label={x.label}
          key={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
