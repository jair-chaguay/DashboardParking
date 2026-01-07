import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const slaData = [
  { hour: "08h", time: 18 },
  { hour: "10h", time: 14 },
  { hour: "12h", time: 11 },
  { hour: "14h", time: 9 },
  { hour: "16h", time: 13 },
  { hour: "18h", time: 15 },
];

const SLATimeChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <LineChart data={slaData}>
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="time"
        strokeWidth={3}
        dot={false}
        isAnimationActive
      />
    </LineChart>
  </ResponsiveContainer>
);

export default SLATimeChart;
