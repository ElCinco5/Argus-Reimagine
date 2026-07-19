import {
  User,
  Mail,
  Phone,
  School,
  Trophy,
  BookOpen,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Profile
      </h1>

      <p className="text-gray-500 mb-8">
        Manage your student profile.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border p-8 text-center">

          <div className="w-28 h-28 rounded-full bg-indigo-600 text-white text-4xl font-bold flex items-center justify-center mx-auto">
            A
          </div>

          <h2 className="text-2xl font-bold mt-5">
            Apratim
          </h2>

          <p className="text-gray-500">
            Class IX
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Edit Profile
          </button>

        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-8">

          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Info icon={<User size={20}/>} label="Full Name" value="Apratim"/>

            <Info icon={<School size={20}/>} label="Class" value="IX"/>

            <Info icon={<Mail size={20}/>} label="Email" value="student@argus.edu"/>

            <Info icon={<Phone size={20}/>} label="Phone" value="+91 XXXXX XXXXX"/>

          </div>

          <hr className="my-8"/>

          <h2 className="text-2xl font-bold mb-6">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <Achievement
              icon={<BookOpen size={24}/>}
              title="Assignments"
              value="126"
            />

            <Achievement
              icon={<Trophy size={24}/>}
              title="Badges"
              value="18"
            />

            <Achievement
              icon={<School size={24}/>}
              title="Attendance"
              value="94%"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex gap-4 items-center border rounded-xl p-4">
      <div className="text-indigo-600">{icon}</div>

      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Achievement({ icon, title, value }) {
  return (
    <div className="border rounded-xl p-5 text-center">

      <div className="text-indigo-600 flex justify-center mb-3">
        {icon}
      </div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}