import SupportKPIs from "./SupportKPIs";
import TicketStatusChart from "./TicketStatusChart";
import SLATimeChart from "./SLATimeChart";
import TicketCategoriesChart from "./TicketCategoriesChart";
import SupportTicketsTable from "./SupportTicketsTable";

const Soporte = () => {
  return (
    <div className="space-y-6">
      <SupportKPIs />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Estado de Tickets</h3>
          <TicketStatusChart />
        </div>

        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Tiempo de Respuesta (SLA)</h3>
          <SLATimeChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Categorías</h3>
          <TicketCategoriesChart />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <SupportTicketsTable />
        </div>
      </div>
    </div>
  );
};

export default Soporte;
