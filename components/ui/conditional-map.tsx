"use client";

import { usePathname } from "next/navigation";
import MapboxMap from "@/components/ui/mapbox";

interface ConditionalMapProps {
  children: React.ReactNode;
}

const ConditionalMap: React.FC<ConditionalMapProps> = ({ children }) => {
  const pathname = usePathname();

  const routesWithoutMap = ["/", "/conclusion"];

  if (routesWithoutMap.includes(pathname)) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <>
      <div className="w-full md:w-1/2 h-full overflow-auto">{children}</div>
      <div className="w-full md:w-1/2 h-full">
        <MapboxMap />
      </div>
    </>
  );
};

export default ConditionalMap;
