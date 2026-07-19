import { Sparkles, Bot } from "lucide-react";

export default function DashboardHero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl text-white p-8 shadow-lg">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-indigo-100">
            Welcome back
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Good Morning 👋
          </h1>

          <p className="mt-3 text-indigo-100">
            Ready to continue your learning journey with Argus Reimagine?
          </p>

        </div>

        <Bot size={70} />

      </div>

      <div className="mt-8 bg-white rounded-2xl p-2 flex">

        <input
          className="flex-1 px-4 outline-none text-slate-800"
          placeholder="Ask Argus anything..."
        />

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
          <Sparkles size={18} />
          Ask
        </button>

      </div>

    </div>
  );
}