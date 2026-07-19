const subjects = [
  { name: "Mathematics", score: 92, color: "bg-green-500" },
  { name: "Physics", score: 86, color: "bg-blue-500" },
  { name: "Chemistry", score: 78, color: "bg-yellow-500" },
  { name: "English", score: 95, color: "bg-purple-500" },
];

export default function AIStudyAssistant() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Performance Overview
        </h2>

        <span className="text-sm text-blue-600 font-medium">
          This Month
        </span>
      </div>

      <div className="space-y-5">

        {subjects.map((subject) => (

          <div key={subject.name}>

            <div className="flex justify-between mb-2">
              <span className="font-medium">
                {subject.name}
              </span>

              <span className="font-semibold">
                {subject.score}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className={`${subject.color} h-3 rounded-full`}
                style={{ width: `${subject.score}%` }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 p-5 rounded-xl bg-blue-50">

        <p className="text-sm text-gray-600">
          Overall Academic Performance
        </p>

        <h1 className="text-4xl font-bold text-blue-600 mt-2">
          88%
        </h1>

        <p className="text-gray-500 mt-2">
          Excellent progress compared to last month.
        </p>

      </div>

    </div>
  );
}