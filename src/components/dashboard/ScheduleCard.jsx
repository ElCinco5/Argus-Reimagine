const schedule = [
  {
    time: "08:30",
    subject: "Mathematics",
    room: "Room 203",
  },
  {
    time: "09:20",
    subject: "Physics",
    room: "Room 305",
  },
  {
    time: "10:10",
    subject: "English",
    room: "Room 101",
  },
  {
    time: "11:30",
    subject: "Computer Science",
    room: "Lab 2",
  },
];

export default function ScheduleCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Today's Schedule
        </h2>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          4 Classes
        </span>
      </div>

      <div className="space-y-3">
        {schedule.map((lesson) => (
          <div
            key={lesson.time}
            className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            <div className="w-12 text-center">
              <p className="font-bold text-blue-600">
                {lesson.time}
              </p>
            </div>

            <div className="w-px self-stretch bg-gray-200"></div>

            <div>
              <p className="font-semibold text-gray-900">
                {lesson.subject}
              </p>

              <p className="text-sm text-gray-500">
                {lesson.room}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}