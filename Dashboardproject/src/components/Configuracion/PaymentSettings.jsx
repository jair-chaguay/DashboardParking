const PaymentSettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Métodos de Pago</h3>

      {["Tarjeta", "QR", "Efectivo", "App"].map((m) => (
        <label key={m} className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          {m}
        </label>
      ))}

      <button className="btn-primary">Guardar Métodos</button>
    </div>
  );
};

export default PaymentSettings;
