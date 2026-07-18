import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}