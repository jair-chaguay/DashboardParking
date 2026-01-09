import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  ParkingCircle,
} from "lucide-react";

const ICONS = {
  TrendingUp,
  TrendingDown,
  Clock,
  ParkingCircle,
};

const useAnalyticsKPIs = () => {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    fetch("/analytics_kpis.json")
      .then((res) => res.json())
      .then((data) => {
        const parsed = data.slice(0, 4).map((kpi) => ({
          ...kpi,
          icon: ICONS[kpi.icon], // 🔥 AQUÍ ESTÁ LA MAGIA
        }));

        setKpis(parsed);
      })
      .catch(console.error);
  }, []);

  return kpis;
};

export default useAnalyticsKPIs;
