const GeneralSettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Información General</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Nombre del Parqueadero" />
        <input className="input" placeholder="Ciudad" />
        <input className="input" placeholder="Dirección" />
        <input className="input" placeholder="Capacidad total" />
      </div>

      <button className="btn-primary">Guardar Cambios</button>
    </div>
  );
};

export default GeneralSettings;
