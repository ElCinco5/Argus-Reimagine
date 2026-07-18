import Navbar from "../components/layout/Navbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import SummaryCard from "../components/dashboard/SummaryCard";
import ScheduleCard from "../components/dashboard/ScheduleCard";
import AssignmentsCard from "../components/dashboard/AssignmentsCard";
import AnnouncementsCard from "../components/dashboard/AnnouncementsCard";
import AIStudyAssistant from "../components/dashboard/AIStudyAssistant";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        <WelcomeBanner />

        {/* Summary Cards */}

        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <SummaryCard
              title="Attendance"
              value="94%"
              subtitle="This Month"
            />

            <SummaryCard
              title="Next Exam"
              value="Physics"
              subtitle="24 July"
            />

            <SummaryCard
              title="Pending Assignments"
              value="2"
              subtitle="Due this week"
            />

          </div>
        </section>

        {/* Main Dashboard */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="space-y-6">
            <ScheduleCard />
            <AnnouncementsCard />
          </div>

          <div className="space-y-6">
            <AssignmentsCard />
            <AIStudyAssistant />
          </div>

        </section>

      </main>
    </div>
  );
}