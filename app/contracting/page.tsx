import type { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Job Cost Command — A Live Demo for Craftsmen Contracting",
  description:
    "A working preview of what AI-run job cost tracking looks like for Craftsmen Contracting: estimate-to-final-inspection profit tracking, automatic cost overrun alerts, AI-sent milestone payment requests, and live crew & site visibility.",
  robots: { index: false, follow: false },
};

export default function ContractingPage() {
  return <Dashboard />;
}
