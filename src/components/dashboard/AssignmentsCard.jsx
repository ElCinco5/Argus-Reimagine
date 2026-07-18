const assignments = [
  {
    subject: "Mathematics",
    title: "Worksheet 5",
    due: "20 Jul",
  },
  {
    subject: "English",
    title: "Essay Draft",
    due: "22 Jul",
  },
];

export default function AssignmentsCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Pending Assignments
        </h2>

        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
          2 Due
        </span>
      </div>

      <div className="space-y-3">

        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:border-red-300 hover:bg-red-50 transition-all"
          >

            <div>
              <p className="font-semibold text-gray-900">
                {assignment.subject}
              </p>

              <p className="text-sm text-gray-500">
                {assignment.title}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-red-600 font-semibold">
                Due
              </p>

              <p className="font-bold text-gray-900">
                {assignment.due}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}