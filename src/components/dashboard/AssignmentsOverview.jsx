import {
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const assignments = [
  {
    subject: "Physics",
    title: "Worksheet 5",
    due: "Due Tomorrow",
    status: "Pending",
    color: "bg-amber-100 text-amber-600",
  },
  {
    subject: "Mathematics",
    title: "Algebra Practice",
    due: "Due Friday",
    status: "Pending",
    color: "bg-blue-100 text-blue-600",
  },
  {
    subject: "Chemistry",
    title: "Lab Report",
    due: "Submitted",
    status: "Completed",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function AssignmentsOverview() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Assignments</h2>

        <button className="text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="flex justify-between items-center p-4 rounded-xl border hover:border-indigo-300 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${assignment.color}`}
              >
                <FileText size={22} />
              </div>

              <div>
                <h3 className="font-semibold">{assignment.title}</h3>

                <p className="text-gray-500 text-sm">
                  {assignment.subject}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium">{assignment.due}</p>

              <div className="flex items-center justify-end gap-2 mt-2">
                {assignment.status === "Completed" ? (
                  <>
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600"
                    />
                    <span className="text-emerald-600 text-sm">
                      Completed
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle
                      size={16}
                      className="text-amber-600"
                    />
                    <span className="text-amber-600 text-sm">
                      Pending
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}