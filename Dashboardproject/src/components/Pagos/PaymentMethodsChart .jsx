import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const paymentMethodsData = [
  { method: "Tarjeta", value: 1840 },
  { method: "Efectivo", value: 920 },
  { method: "QR", value: 640 },
  { method: "App", value: 1120 },
];

const PaymentMethodsChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <BarChart data={paymentMethodsData}>
      <XAxis dataKey="method" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive />
    </BarChart>
  </ResponsiveContainer>
);

export default PaymentMethodsChart;
