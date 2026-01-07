const PricingSettings = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4">
      <h3 className="font-semibold text-lg">Tarifas</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-500 border-b">
            <th>Zona</th>
            <th>Tipo</th>
            <th>Precio / Hora</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zona A</td>
            <td>Auto</td>
            <td>$2.00</td>
            <td>
              <button className="text-indigo-600">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn-primary">Agregar Tarifa</button>
    </div>
  );
};

export default PricingSettings;
