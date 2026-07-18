const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function WelcomeBanner() {
  return (
    <section className="mb-10">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <p className="text-sm text-gray-500">
          {today}
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Good Morning 👋
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl">
          Welcome back! Here's a quick overview of your day. Stay on top of your
          classes, assignments, and announcements.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          View Full Schedule
        </button>

      </div>
    </section>
  );
}