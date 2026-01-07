const PaymentsKPIs = () => {
  const stats = [
    { label: "Ingresos Hoy", value: "$1,240" },
    { label: "Ingresos del Mes", value: "$32,540" },
    { label: "Ticket Promedio", value: "$4.80" },
    { label: "Pagos Fallidos", value: 18 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-sm
            transition hover:shadow-md hover:-translate-y-1
          "
        >
          <p className="text-sm text-slate-500">{s.label}</p>
          <h2 className="text-3xl font-black mt-2">{s.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default PaymentsKPIs;
