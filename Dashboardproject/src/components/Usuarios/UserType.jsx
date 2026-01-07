import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const userTypeData = [
  { name: "Conductores", value: 980 },
  { name: "Administradores", value: 45 },
  { name: "Operadores", value: 215 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

const UserType = () => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={userTypeData}
        dataKey="value"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={4}
        isAnimationActive
      >
        {userTypeData.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default UserType;
