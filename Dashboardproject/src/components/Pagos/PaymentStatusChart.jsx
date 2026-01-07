import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const statusData = [
  { name: "Completados", value: 86 },
  { name: "Pendientes", value: 9 },
  { name: "Fallidos", value: 5 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

const PaymentStatusChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={statusData}
        dataKey="value"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={4}
      >
        {statusData.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default PaymentStatusChart;
