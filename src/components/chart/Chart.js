import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const values = props.dataPoints.map(point => point.value);
    const totalMaximum = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          value={x.value}
          maxValue={totalMaximum}
          label={x.label}
          key={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
