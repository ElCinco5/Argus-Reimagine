import {
  CalendarDays,
  Clock3,
  BookOpen,
  Trophy,
  FileText,
} from "lucide-react";

const events = [
  {
    title: "Physics Unit Test",
    date: "24 July",
    time: "10:00 AM",
    icon: <BookOpen size={20} />,
    color: "bg-blue-500",
  },
  {
    title: "Math Assignment Due",
    date: "25 July",
    time: "11:59 PM",
    icon: <FileText size={20} />,
    color: "bg-orange-500",
  },
  {
    title: "Inter School Football",
    date: "28 July",
    time: "9:00 AM",
    icon: <Trophy size={20} />,
    color: "bg-green-500",
  },
  {
    title: "Parent Teacher Meeting",
    date: "30 July",
    time: "2:00 PM",
    icon: <CalendarDays size={20} />,
    color: "bg-purple-500",
  },
];

export default function Calendar() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        Calendar
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Stay on top of your schedule and upcoming events.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-8">

          <h2 className="text-2xl font-bold mb-6">
            July 2026
          </h2>

          <div className="grid grid-cols-7 gap-3 text-center">

            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day=>(
              <div
                key={day}
                className="font-semibold text-gray-500"
              >
                {day}
              </div>
            ))}

            {Array.from({length:35},(_,i)=>{

              const day=i-2;

              return(
                <div
                  key={i}
                  className={`h-14 rounded-xl flex items-center justify-center transition
                    ${
                      day===24
                        ?"bg-blue-600 text-white font-bold"
                        :day>0&&day<=31
                        ?"bg-gray-50 hover:bg-blue-50 cursor-pointer"
                        :""
                    }`}
                >
                  {day>0&&day<=31?day:""}
                </div>
              );

            })}

          </div>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-5">

            {events.map(event=>(
              <div
                key={event.title}
                className="flex gap-4"
              >

                <div
                  className={`w-12 h-12 rounded-xl ${event.color} text-white flex items-center justify-center`}
                >
                  {event.icon}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {event.title}
                  </h3>

                  <p className="text-gray-500">
                    {event.date}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">

                    <Clock3 size={15}/>

                    {event.time}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}