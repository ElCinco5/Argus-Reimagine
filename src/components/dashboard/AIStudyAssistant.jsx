export default function AIStudyAssistant() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">

      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
        AI Powered
      </span>

      <h2 className="text-3xl font-bold mt-5">
        AI Study Assistant
      </h2>

      <p className="mt-4 text-blue-100 leading-7">
        Need help understanding today's lessons? Ask the AI Study Assistant for
        explanations, summaries, practice questions, or personalized study tips.
      </p>

      <button className="mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
        Ask AI
      </button>

    </div>
  );
}