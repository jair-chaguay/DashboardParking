import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ticketStatusData = [
  { name: "Abiertos", value: 14 },
  { name: "En Progreso", value: 6 },
  { name: "Resueltos", value: 52 },
];

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

const TicketStatusChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={ticketStatusData}
        dataKey="value"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={4}
        isAnimationActive
      >
        {ticketStatusData.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default TicketStatusChart;
