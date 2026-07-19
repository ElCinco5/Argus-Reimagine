import {
  CalendarCheck,
  TrendingUp,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

const attendance = [
  {
    subject: "Mathematics",
    percentage: 96,
    color: "bg-green-500",
  },
  {
    subject: "Physics",
    percentage: 92,
    color: "bg-blue-500",
  },
  {
    subject: "Chemistry",
    percentage: 84,
    color: "bg-yellow-500",
  },
  {
    subject: "English",
    percentage: 98,
    color: "bg-purple-500",
  },
];

export default function Attendance() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        Attendance
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Track your attendance across all subjects.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <CalendarCheck className="text-blue-600 mb-3" size={30}/>
          <p className="text-gray-500">Overall Attendance</p>
          <h2 className="text-4xl font-bold mt-2">94%</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <CircleCheck className="text-green-600 mb-3" size={30}/>
          <p className="text-gray-500">Classes Attended</p>
          <h2 className="text-4xl font-bold mt-2">176</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <TriangleAlert className="text-orange-500 mb-3" size={30}/>
          <p className="text-gray-500">Classes Missed</p>
          <h2 className="text-4xl font-bold mt-2">11</h2>
        </div>

      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Attendance
          </h2>

          <TrendingUp className="text-blue-600"/>

        </div>

        <div className="space-y-6">

          {attendance.map((item)=>(
            <div key={item.subject}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {item.subject}
                </span>

                <span className="font-bold">
                  {item.percentage}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{width:`${item.percentage}%`}}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}