import { useState } from "react";
import GeneralSettings from "./GeneralSettings";
import PricingSettings from "./PricingSettings";
import ScheduleSettings from "./ScheduleSettings";
import PaymentSettings from "./PaymentSettings";
import NotificationSettings from "./NotificationSettings";
import SecuritySettings from "./SecuritySettings";

const tabs = [
  { id: "general", label: "General" },
  { id: "pricing", label: "Tarifas" },
  { id: "schedule", label: "Horarios" },
  { id: "payments", label: "Pagos" },
  { id: "notifications", label: "Notificaciones" },
  { id: "security", label: "Seguridad" },
];

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black">Configuración</h1>

      {/* TABS */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition
              ${
                activeTab === tab.id
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {activeTab === "general" && <GeneralSettings />}
      {activeTab === "pricing" && <PricingSettings />}
      {activeTab === "schedule" && <ScheduleSettings />}
      {activeTab === "payments" && <PaymentSettings />}
      {activeTab === "notifications" && <NotificationSettings />}
      {activeTab === "security" && <SecuritySettings />}
    </div>
  );
};

export default Configuracion;
