export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Argus Reimagine
            </h1>

            <p className="text-xs text-gray-500">
              Student Portal
            </p>
          </div>

        </div>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <button className="text-blue-600">
            Dashboard
          </button>

          <button className="text-gray-600 hover:text-blue-600 transition">
            Learning
          </button>

          <button className="text-gray-600 hover:text-blue-600 transition">
            Attendance
          </button>

          <button className="text-gray-600 hover:text-blue-600 transition">
            Calendar
          </button>

        </div>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gray-300"></div>

        </div>

      </div>
    </nav>
  );
}