import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <div className="flex-1">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}