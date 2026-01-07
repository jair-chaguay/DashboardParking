const payments = [
  {
    id: "TX-9032",
    user: "Carlos Pérez",
    amount: "$5.00",
    method: "Tarjeta",
    status: "Completado",
    date: "2026-01-05",
  },
  {
    id: "TX-9033",
    user: "Ana López",
    amount: "$3.50",
    method: "QR",
    status: "Fallido",
    date: "2026-01-05",
  },
];

const PaymentsTable = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold text-lg mb-4">Transacciones</h3>

    <table className="w-full text-sm">
      <thead>
        <tr className="text-slate-500 border-b">
          <th className="pb-3">ID</th>
          <th>Usuario</th>
          <th>Monto</th>
          <th>Método</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((p) => (
          <tr
            key={p.id}
            className="border-b last:border-none hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <td className="py-3 font-mono">{p.id}</td>
            <td>{p.user}</td>
            <td className="font-semibold">{p.amount}</td>
            <td>{p.method}</td>
            <td>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    p.status === "Completado"
                      ? "bg-green-100 text-green-700"
                      : p.status === "Pendiente"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
              >
                {p.status}
              </span>
            </td>
            <td>{p.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PaymentsTable;
