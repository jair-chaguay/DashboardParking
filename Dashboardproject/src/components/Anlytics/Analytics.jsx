import {
  TrendingUp,
  TrendingDown,
  Clock,
  ParkingCircle,
} from "lucide-react";

const kpis = [
  {
    title: "Ingresos Totales",
    value: "$18,420",
    change: "+12.5%",
    positive: true,
    icon: TrendingUp,
  },
  {
    title: "Crecimiento Mensual",
    value: "8.2%",
    change: "-1.3%",
    positive: false,
    icon: TrendingDown,
  },
  {
    title: "Tiempo Promedio",
    value: "2h 18m",
    change: "+5%",
    positive: true,
    icon: Clock,
  },
  {
    title: "Rotación de Cupos",
    value: "4.6x",
    change: "+0.4",
    positive: true,
    icon: ParkingCircle,
  },
];

const parkings = [
  {
    name: "Centro Histórico",
    revenue: "$6,200",
    occupancy: "92%",
    trend: "up",
  },
  {
    name: "Mall Central",
    revenue: "$4,850",
    occupancy: "81%",
    trend: "up",
  },
  {
    name: "Aeropuerto",
    revenue: "$3,120",
    occupancy: "68%",
    trend: "down",
  },
];

const Analytics = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Análisis de rendimiento y métricas clave
          </p>
        </div>

        {/* FILTROS */}
        <div className="flex gap-2">
          {["Hoy", "Semana", "Mes"].map((filtro) => (
            <button
              key={filtro}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-slate-100 dark:bg-slate-800
                hover:bg-indigo-600 hover:text-white
                transition
              "
            >
              {filtro}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="
              bg-white dark:bg-slate-900
              rounded-2xl p-6 shadow-sm
              hover:shadow-md transition
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {kpi.title}
                </p>
                <h2 className="text-3xl font-bold mt-1">
                  {kpi.value}
                </h2>
              </div>

              <div className="
                p-3 rounded-xl
                bg-indigo-100 dark:bg-indigo-500/20
              ">
                <kpi.icon className="w-6 h-6 text-indigo-600" />
              </div>
            </div>

            <p
              className={`mt-4 text-sm font-medium ${
                kpi.positive
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {kpi.change} vs periodo anterior
            </p>
          </div>
        ))}
      </div>

      {/* GRÁFICAS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* INGRESOS */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Ingresos en el tiempo
          </h3>

          <div className="
            h-64 rounded-xl
            bg-gradient-to-br from-indigo-100 to-purple-100
            dark:from-indigo-500/10 dark:to-purple-500/10
            flex items-center justify-center
            text-slate-400
          ">
            📈 Gráfica de ingresos
          </div>
        </div>

        {/* HORAS PICO */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Horas Pico
          </h3>

          <div className="
            h-64 rounded-xl
            bg-gradient-to-br from-emerald-100 to-teal-100
            dark:from-emerald-500/10 dark:to-teal-500/10
            flex items-center justify-center
            text-slate-400
          ">
            ⏱️ Gráfica de horas pico
          </div>
        </div>
      </div>

      {/* COMPARATIVA */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-4">
          Rendimiento por Parqueadero
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-3">Parqueadero</th>
                <th>Ingresos</th>
                <th>Ocupación</th>
                <th>Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {parkings.map((p, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-200 dark:border-slate-800"
                >
                  <td className="py-3 font-medium">
                    {p.name}
                  </td>
                  <td>{p.revenue}</td>
                  <td>{p.occupancy}</td>
                  <td>
                    {p.trend === "up" ? (
                      <span className="text-green-600">▲</span>
                    ) : (
                      <span className="text-red-500">▼</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Analytics;
