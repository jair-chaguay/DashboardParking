import { MapPin } from "lucide-react";

const HeatmapCard = () => {
  return (
    <div className="
  h-full min-h-[320px] rounded-2xl
  bg-gradient-to-br from-indigo-50 to-indigo-100
  dark:from-slate-800 dark:to-slate-900
  border border-dashed border-indigo-300 dark:border-slate-700
  flex flex-col items-center justify-center
">
  <MapPin className="text-indigo-500 mb-3" size={32} />
  <p className="font-semibold text-indigo-700 dark:text-indigo-300">
    Mapa de Ocupación
  </p>
  <p className="text-sm text-indigo-500 dark:text-slate-400">
    Integración Mapbox / Google Maps
  </p>
</div>

  );
};

export default HeatmapCard;
