import type { Metadata } from "next";
import LearningExperience from "./LearningExperience";

export const metadata: Metadata = {
  title: "Erste Lernlektion | TA3LIM",
  description: "Interaktive TA3LIM-Mathematiklektion für die 1. Klasse.",
};

export default function LearnPage() {
  return <LearningExperience />;
}

