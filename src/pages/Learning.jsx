import {
  BookOpen,
  PlayCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const courses = [
  {
    title: "Mathematics",
    progress: 78,
    lessons: 24,
    color: "bg-blue-600",
  },
  {
    title: "Physics",
    progress: 62,
    lessons: 18,
    color: "bg-green-600",
  },
  {
    title: "Chemistry",
    progress: 45,
    lessons: 15,
    color: "bg-orange-500",
  },
  {
    title: "English",
    progress: 91,
    lessons: 30,
    color: "bg-purple-600",
  },
];

export default function Learning() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Learning
      </h1>

      <p className="text-gray-500 mb-8">
        Continue your learning journey.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course) => (

          <div
            key={course.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center">

              <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center text-white`}>
                <BookOpen size={26} />
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
                <PlayCircle size={18} />
                Continue
              </button>

            </div>

            <h2 className="text-2xl font-bold mt-6">
              {course.title}
            </h2>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${course.color} h-3 rounded-full`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

            </div>

            <div className="flex justify-between mt-6 text-gray-500">

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                {course.lessons} Lessons
              </div>

              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 size={18} />
                Active
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}