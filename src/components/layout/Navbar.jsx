import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">

      <div className="flex items-center justify-between px-8 py-5">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening today.
          </p>

        </div>

        <div className="flex items-center gap-5">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-72 pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">

            <Bell size={20} />

          </button>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              A
            </div>

            <div className="hidden md:block">

              <p className="font-semibold">
                Apratim
              </p>

              <p className="text-sm text-gray-500">
                Student
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}