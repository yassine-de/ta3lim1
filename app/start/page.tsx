import type { Metadata } from "next";
import Onboarding from "./Onboarding";

export const metadata: Metadata = {
  title: "Familie einrichten | TA3LIM",
  description: "TA3LIM-Pilotprofil für Eltern und Kinder einrichten.",
};

export default function StartPage() {
  return <Onboarding />;
}

