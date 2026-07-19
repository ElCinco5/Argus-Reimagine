import {
  Bell,
  Moon,
  Globe,
  Shield,
  UserCog,
  ChevronRight,
} from "lucide-react";

const settings = [
  {
    icon: UserCog,
    title: "Account Settings",
    description: "Manage your personal information",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Email, SMS and push notifications",
  },
  {
    icon: Globe,
    title: "Language",
    description: "English (India)",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Password and account protection",
  },
  {
    icon: Moon,
    title: "Appearance",
    description: "Light Mode",
  },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Settings
      </h1>

      <p className="text-gray-500 mb-8">
        Customize your Argus Reimagine experience.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

        {settings.map(({ icon: Icon, title, description }) => (

          <button
            key={title}
            className="w-full flex items-center justify-between p-6 border-b last:border-b-0 hover:bg-slate-50 transition"
          >

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">

                <Icon size={22} />

              </div>

              <div className="text-left">

                <h2 className="font-semibold text-lg">
                  {title}
                </h2>

                <p className="text-gray-500 text-sm">
                  {description}
                </p>

              </div>

            </div>

            <ChevronRight className="text-gray-400"/>

          </button>

        ))}

      </div>

    </div>
  );
}