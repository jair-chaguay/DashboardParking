const ScheduleSettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Horarios de Operación</h3>

      <div className="grid grid-cols-2 gap-4">
        <input type="time" className="input" />
        <input type="time" className="input" />
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Operar 24/7
      </label>

      <button className="btn-primary">Guardar Horarios</button>
    </div>
  );
};

export default ScheduleSettings;
