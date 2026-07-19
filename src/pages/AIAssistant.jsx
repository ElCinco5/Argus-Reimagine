import {
  Bot,
  Send,
  Paperclip,
  Mic,
  Sparkles,
  BookOpen,
  Brain,
  FileText,
  GraduationCap,
} from "lucide-react";

const suggestions = [
  {
    icon: BookOpen,
    title: "Explain Newton's Laws",
  },
  {
    icon: GraduationCap,
    title: "Create today's study plan",
  },
  {
    icon: FileText,
    title: "Summarize Chapter 5",
  },
  {
    icon: Brain,
    title: "Quiz me on Algebra",
  },
];

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl text-white p-8 shadow-lg">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">

              <Bot size={42}/>

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Argus AI
              </h1>

              <p className="text-indigo-100 mt-2">
                Your intelligent learning assistant
              </p>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          {suggestions.map(({icon:Icon,title})=>(

            <button
              key={title}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-left hover:shadow-lg hover:-translate-y-1 transition"
            >

              <Icon
                className="text-indigo-600 mb-4"
                size={28}
              />

              <h2 className="font-semibold text-lg">
                {title}
              </h2>

            </button>

          ))}

        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-8">

          <div className="p-6 border-b">

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">

                <Bot/>

              </div>

              <div>

                <h3 className="font-semibold">
                  Argus AI
                </h3>

                <p className="text-gray-500">
                  Hello! How can I help you today?
                </p>

              </div>

            </div>

          </div>

          <div className="h-[420px] overflow-y-auto p-6 space-y-5">

            <div className="bg-slate-100 rounded-2xl p-5 max-w-xl">

              Explain difficult concepts

            </div>

            <div className="bg-indigo-600 text-white rounded-2xl p-5 max-w-xl ml-auto">

              Explain Newton's Second Law.

            </div>

            <div className="bg-slate-100 rounded-2xl p-5 max-w-xl">

              Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

            </div>

          </div>

          <div className="border-t p-5">

            <div className="flex items-center gap-3">

              <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

                <Paperclip/>

              </button>

              <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

                <Mic/>

              </button>

              <input
                className="flex-1 border rounded-xl px-5 py-4 outline-none"
                placeholder="Ask Argus anything..."
              />

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl flex items-center gap-2 transition">

                <Sparkles size={18}/>

                Ask

                <Send size={18}/>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}