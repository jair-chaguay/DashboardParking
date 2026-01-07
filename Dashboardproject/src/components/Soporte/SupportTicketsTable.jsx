const tickets = [
  {
    id: "SUP-1023",
    user: "Juan Pérez",
    issue: "Pago duplicado",
    priority: "Alta",
    status: "Abierto",
    time: "Hace 5 min",
  },
  {
    id: "SUP-1024",
    user: "María Gómez",
    issue: "Barrera no abre",
    priority: "Crítica",
    status: "En Progreso",
    time: "Hace 12 min",
  },
  {
    id: "SUP-1025",
    user: "Luis Andrade",
    issue: "QR inválido",
    priority: "Media",
    status: "Resuelto",
    time: "Hace 1 h",
  },
];

const SupportTicketsTable = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold text-lg mb-4">Tickets Recientes</h3>

    <table className="w-full text-sm">
      <thead>
        <tr className="text-slate-500 border-b">
          <th className="pb-3">ID</th>
          <th>Usuario</th>
          <th>Problema</th>
          <th>Prioridad</th>
          <th>Estado</th>
          <th>Tiempo</th>
        </tr>
      </thead>

      <tbody>
        {tickets.map((t) => (
          <tr
            key={t.id}
            className="border-b last:border-none hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <td className="py-3 font-mono">{t.id}</td>
            <td>{t.user}</td>
            <td>{t.issue}</td>
            <td>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    t.priority === "Crítica"
                      ? "bg-red-100 text-red-700"
                      : t.priority === "Alta"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
              >
                {t.priority}
              </span>
            </td>
            <td>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    t.status === "Resuelto"
                      ? "bg-green-100 text-green-700"
                      : t.status === "En Progreso"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
              >
                {t.status}
              </span>
            </td>
            <td>{t.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SupportTicketsTable;
