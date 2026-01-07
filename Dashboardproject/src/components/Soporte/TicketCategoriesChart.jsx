import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const categoryData = [
  { category: "Pagos", count: 28 },
  { category: "Barrera", count: 18 },
  { category: "QR", count: 14 },
  { category: "Tarifas", count: 9 },
];

const TicketCategoriesChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <BarChart data={categoryData}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" radius={[8, 8, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default TicketCategoriesChart;
