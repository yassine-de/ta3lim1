import type { Metadata } from "next";
import ParentDashboard from "./ParentDashboard";

export const metadata: Metadata = {
  title: "Eltern-Dashboard | TA3LIM",
  description: "Lernfortschritt und Empfehlungen im TA3LIM-Elternbereich.",
};

export default function ParentPage() {
  return <ParentDashboard />;
}

