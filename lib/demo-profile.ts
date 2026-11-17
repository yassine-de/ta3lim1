export const DEMO_PROFILE_KEY = "ta3lim-demo-profile-v1";

export type DemoProfile = {
  parentName: string;
  childName: string;
  grade: 1 | 2 | 3;
  locale: "ar" | "fr";
  avatar: "sun" | "rocket" | "star" | "leaf";
  createdAt: string;
};

export function readDemoProfile(): DemoProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(DEMO_PROFILE_KEY);
    return value ? (JSON.parse(value) as DemoProfile) : null;
  } catch {
    return null;
  }
}

export function saveDemoProfile(profile: DemoProfile) {
  window.localStorage.setItem(DEMO_PROFILE_KEY, JSON.stringify(profile));
}

