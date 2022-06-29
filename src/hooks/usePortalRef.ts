import { useRef, useEffect } from "react";

export const usePortalRef = () => {
  const portalRef = useRef<Node>();

  if (!portalRef.current) {
    portalRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (portalRef.current) {
      document.body.appendChild(portalRef.current);
    }

    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, []);

  return { portal: portalRef.current };
};
