import fetchLogs from "../Api/fetchLogs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import GoogleMap from "../charts/Map";
import "./Graphs.css";
const Graphs = () => {
  const [intervalMs, _setIntervalMs] = useState(1000);
  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: fetchLogs,
    refetchInterval: intervalMs,
  });
  if (!data) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
  if (data.logs.length > 0) {
    const dataV = data.logs.map((log) => {
      return {
        ...log,
      };
    });

    const lastLog = dataV[data.logs.length - 1];
    const gpsCoordinate = lastLog.gps;
    return (
      <div className="tst">
        <h1 className="title">Coordenadas</h1>
        <GoogleMap gps={gpsCoordinate} />
      </div>
    );
  }
  return (
    <>
      <p>Loading</p>
    </>
  );
};

export default Graphs;
