import { useEffect } from "react";
import ResizableBox from "../ResizableBox";

interface Iprop {
  gps: string;
}

function GoogleMap({ gps }: Iprop) {
  useEffect(() => {
    const getNewLocation = () => {
      const ifameData = document.getElementById("iframeId");
      const [lat, lon] = gps.replace("(", "").replace(")", "").split(",");
      if (ifameData) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
      }
    };
    const timer = setTimeout(() => {
      getNewLocation();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <ResizableBox
      style={{
        background: "rgba(0, 27, 45, 0.9)",
        padding: ".5rem",
        borderRadius: "5px",
      }}
    >
      <iframe id="iframeId" height="800px" width="100%"></iframe>
    </ResizableBox>
  );
}
export default GoogleMap;
