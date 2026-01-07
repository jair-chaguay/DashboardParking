const users = [
  {
    id: 1,
    name: "Carlos Pérez",
    email: "carlos@mail.com",
    role: "Conductor",
    status: "Activo",
  },
  {
    id: 2,
    name: "Ana López",
    email: "ana@mail.com",
    role: "Operador",
    status: "Bloqueado",
  },
];

const TablaUser = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold text-lg mb-4">Usuarios</h3>

    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-slate-500 border-b">
          <th className="pb-3">Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr
            key={u.id}
            className="border-b last:border-none hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <td className="py-3 font-medium">{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    u.status === "Activo"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
              >
                {u.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TablaUser;
