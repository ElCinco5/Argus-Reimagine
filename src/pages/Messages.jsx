import {
  Search,
  Send,
  User,
  GraduationCap,
  Bell,
} from "lucide-react";

const chats = [
  {
    name: "Mr. Sharma",
    role: "Mathematics Teacher",
    message: "Please revise Chapter 5 before tomorrow.",
    active: true,
  },
  {
    name: "Principal",
    role: "School Administration",
    message: "Assembly timing has been updated.",
    active: false,
  },
  {
    name: "Physics Department",
    role: "Department",
    message: "Lab report submission reminder.",
    active: false,
  },
];

export default function Messages() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Messages
      </h1>

      <p className="text-gray-500 mb-8">
        Communicate with teachers and school staff.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Chat List */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-5 border-b">

            <div className="relative">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                className="w-full pl-10 pr-4 py-3 rounded-xl border"
                placeholder="Search conversations..."
              />

            </div>

          </div>

          <div>

            {chats.map((chat) => (

              <button
                key={chat.name}
                className={`w-full text-left p-5 border-b hover:bg-gray-50 transition ${
                  chat.active ? "bg-blue-50" : ""
                }`}
              >

                <div className="flex gap-3">

                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">

                    <User size={20}/>

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {chat.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {chat.role}
                    </p>

                    <p className="text-sm mt-1 text-gray-600">
                      {chat.message}
                    </p>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* Chat Window */}

        <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm flex flex-col">

          <div className="border-b p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">

              <GraduationCap/>

            </div>

            <div>

              <h2 className="font-bold text-lg">
                Mr. Sharma
              </h2>

              <p className="text-gray-500">
                Mathematics Teacher
              </p>

            </div>

          </div>

          <div className="flex-1 p-8 space-y-5">

            <div className="bg-gray-100 rounded-xl p-4 max-w-md">
              Good morning! Please complete Exercise 5 before tomorrow.
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-4 max-w-md ml-auto">
              Sure sir. I'll finish it tonight.
            </div>

            <div className="bg-gray-100 rounded-xl p-4 max-w-md">
              Excellent. Let me know if you have any doubts.
            </div>

            <div className="bg-yellow-50 border rounded-xl p-4 flex gap-3">

              <Bell className="text-yellow-600"/>

              <div>

                <p className="font-semibold">
                  Reminder
                </p>

                <p className="text-gray-600 text-sm">
                  Homework submission closes tomorrow at 8:00 AM.
                </p>

              </div>

            </div>

          </div>

          <div className="border-t p-5 flex gap-3">

            <input
              className="flex-1 border rounded-xl px-4 py-3"
              placeholder="Type your message..."
            />

            <button className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition">

              <Send/>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}