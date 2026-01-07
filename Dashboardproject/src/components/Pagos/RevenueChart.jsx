import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { day: "Lun", revenue: 320 },
  { day: "Mar", revenue: 480 },
  { day: "Mié", revenue: 410 },
  { day: "Jue", revenue: 620 },
  { day: "Vie", revenue: 890 },
  { day: "Sáb", revenue: 1120 },
  { day: "Dom", revenue: 760 },
];

const RevenueChart = () => (
  <ResponsiveContainer width="100%" height={280}>
    <AreaChart data={revenueData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="revenue"
        strokeWidth={3}
        fillOpacity={0.3}
        isAnimationActive
        animationDuration={1400}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default RevenueChart;
