const SecuritySettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Seguridad</h3>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Autenticación de dos factores
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" defaultChecked />
        Registrar actividad de usuarios
      </label>

      <button className="btn-danger">Cerrar todas las sesiones</button>
    </div>
  );
};

export default SecuritySettings;
