import { createRoot } from "react-dom/client";
import AppRoutes from "./router/AppRoutes";

import "@/styles/global.css";
import "@/styles/custom.css";
import "@/styles/variables.css";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(<AppRoutes />);
