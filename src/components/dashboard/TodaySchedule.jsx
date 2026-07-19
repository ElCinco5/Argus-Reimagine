import { Clock3 } from "lucide-react";

const schedule = [
  {
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    time: "09:00 AM",
  },
  {
    subject: "Physics",
    teacher: "Mrs. Patel",
    time: "10:30 AM",
  },
  {
    subject: "English",
    teacher: "Ms. Roy",
    time: "12:00 PM",
  },
  {
    subject: "Computer Science",
    teacher: "Mr. Das",
    time: "02:00 PM",
  },
];

export default function TodaySchedule() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6">
        Today's Schedule
      </h2>

      <div className="space-y-5">

        {schedule.map((item) => (

          <div
            key={item.subject}
            className="flex justify-between items-center border-b pb-4 last:border-none"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {item.subject}
              </h3>

              <p className="text-gray-500">
                {item.teacher}
              </p>

            </div>

            <div className="flex items-center gap-2 text-indigo-600 font-semibold">

              <Clock3 size={18} />

              {item.time}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}