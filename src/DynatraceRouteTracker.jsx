// DynatraceRouteTracker.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DynatraceRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.dtrum) {
      window.dtrum.setPage({
        name: location.pathname
      });
    }
  }, [location]);

  return null;
}

export default DynatraceRouteTracker;
