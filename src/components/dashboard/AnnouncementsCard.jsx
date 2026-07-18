const announcements = [
  {
    title: "Science Exhibition",
    details: "Friday, 24 July • School Auditorium",
  },
  {
    title: "Parent-Teacher Meeting",
    details: "Wednesday, 29 July • 10:00 AM",
  },
  {
    title: "Library Notice",
    details: "Library closes at 4:00 PM today.",
  },
];

export default function AnnouncementsCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Announcements
        </h2>

        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
          3 New
        </span>
      </div>

      <div className="space-y-3">

        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-100 p-4 hover:border-amber-300 hover:bg-amber-50 transition-all"
          >
            <p className="font-semibold text-gray-900">
              {announcement.title}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {announcement.details}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}