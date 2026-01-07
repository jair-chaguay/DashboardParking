const NotificationSettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Notificaciones</h3>

      <label className="flex items-center gap-3">
        <input type="checkbox" defaultChecked />
        Alertas por pagos fallidos
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Alertas por ocupación completa
      </label>

      <button className="btn-primary">Guardar</button>
    </div>
  );
};

export default NotificationSettings;
