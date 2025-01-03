import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { AppRoutes } from "./Routes.tsx";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.tsx";
import { ShowVideoProvider } from "./contexts/ContexShowVideo.tsx";
import { DataProvider } from "./contexts/ContexVideos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <ShowVideoProvider>
        <GlobalStyles />
        <AppRoutes />
      </ShowVideoProvider>
    </DataProvider>
  </StrictMode>
);
