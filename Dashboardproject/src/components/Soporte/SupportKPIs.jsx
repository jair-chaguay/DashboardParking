const SupportKPIs = () => {
  const stats = [
    { label: "Tickets Abiertos", value: 14 },
    { label: "En Progreso", value: 6 },
    { label: "Resueltos Hoy", value: 21 },
    { label: "Tiempo Promedio", value: "12 min" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-sm
            hover:shadow-md hover:-translate-y-1 transition
          "
        >
          <p className="text-sm text-slate-500">{s.label}</p>
          <h2 className="text-3xl font-black mt-2">{s.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default SupportKPIs;
