import { Clock, MapPin } from "lucide-react";

const classes = [
  {
    time: "08:30",
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    room: "Room 204",
    status: "Now",
  },
  {
    time: "10:00",
    subject: "Physics",
    teacher: "Mrs. Sen",
    room: "Lab 2",
    status: "Next",
  },
  {
    time: "11:30",
    subject: "English",
    teacher: "Ms. Roy",
    room: "Room 108",
    status: "",
  },
  {
    time: "02:00",
    subject: "Computer Science",
    teacher: "Mr. Das",
    room: "Computer Lab",
    status: "",
  },
];

export default function ScheduleCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Today's Classes</h2>

        <span className="text-sm text-blue-600 font-medium">
          View All
        </span>
      </div>

      <div className="space-y-5">
        {classes.map((item) => (
          <div
            key={item.time}
            className="flex items-start gap-4 border-l-4 border-blue-500 pl-4"
          >
            <div className="min-w-[70px]">
              <p className="font-bold">{item.time}</p>

              {item.status && (
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {item.status}
                </span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.subject}
              </h3>

              <p className="text-gray-500">
                {item.teacher}
              </p>

              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <MapPin size={15} />
                {item.room}
              </div>
            </div>

            <Clock size={18} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}