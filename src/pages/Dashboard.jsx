import Navbar from "../components/layout/Navbar";

import DashboardHero from "../components/dashboard/DashboardHero";
import SummaryCard from "../components/dashboard/SummaryCard";
import TodaySchedule from "../components/dashboard/TodaySchedule";
import MessageCenter from "../components/dashboard/MessageCenter";
import AssignmentsOverview from "../components/dashboard/AssignmentsOverview";
import QuickActions from "../components/dashboard/QuickActions";

import {
  CheckCircle,
  CalendarClock,
  ClipboardList,
  Flame,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <DashboardHero />

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <SummaryCard
            title="Attendance"
            value="94%"
            subtitle="This Month"
            icon={<CheckCircle size={24} />}
            color="bg-emerald-500"
          />

          <SummaryCard
            title="Assignments"
            value="3"
            subtitle="Pending"
            icon={<ClipboardList size={24} />}
            color="bg-amber-500"
          />

          <SummaryCard
            title="Next Exam"
            value="Physics"
            subtitle="24 July"
            icon={<CalendarClock size={24} />}
            color="bg-sky-500"
          />

          <SummaryCard
            title="Study Streak"
            value="12"
            subtitle="Days"
            icon={<Flame size={24} />}
            color="bg-indigo-600"
          />

        </section>

        <section className="grid lg:grid-cols-2 gap-6">

          <TodaySchedule />

          <MessageCenter />

        </section>

        <AssignmentsOverview />

        <QuickActions />

      </main>

    </div>
  );
}