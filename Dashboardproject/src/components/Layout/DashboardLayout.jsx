import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Analytics from "../Anlytics/Analytics";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../Usuarios/Usuarios";
import Payments from "../Pagos/Pagos"
import Support from "../Soporte/Soporte"
import Settings from "../Configuracion/Configuracion"

const DashboardLayout = ({ children, darkMode, setDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
  switch (page) {
    case "analytics":
      return <Analytics />;

    case "users":
      return <Usuarios />;

    case "payments":
      return <Payments />;

    case "support":
      return <Support />;

    case "settings":
      return <Settings />;

    default:
      return <Dashboard />;
  }
};

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* SIDEBAR */}
      <Sidebar
        collapsed={collapsed}
        currentPage={page}
        onPageChange={setPage}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          page={page}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onToggleSidebar={() => setCollapsed(!collapsed)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
