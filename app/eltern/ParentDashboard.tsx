"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Languages,
  Leaf,
  Play,
  Rocket,
  Settings,
  Star,
  Sun,
  Target,
  TrendingUp,
} from "lucide-react";
import curriculumData from "@/data/curriculum/math-grade-1.json";
import { DemoProfile, readDemoProfile } from "@/lib/demo-profile";
import styles from "./eltern.module.css";

const avatars = { sun: Sun, rocket: Rocket, star: Star, leaf: Leaf };

const copy = {
  fr: {
    dashboard: "Espace parents",
    greeting: "Bonjour",
    subtitle: "Voici le parcours pilote de",
    prototype: "Données de démonstration",
    noProfile: "Aucun profil pilote n'est encore configuré.",
    setup: "Créer un profil",
    start: "Continuer la leçon",
    week: "Cette semaine",
    time: "Temps d'apprentissage",
    topics: "Notions terminées",
    accuracy: "Bonnes réponses",
    streak: "Jours de série",
    recommendation: "Recommandation du jour",
    recommendationText: "Commencer par comparer les nombres de 1 à 5. La leçon dure environ 10 minutes.",
    path: "Parcours · Unité 1",
    status: "Progression",
    available: "Disponible",
    next: "À venir",
    note: "Le prototype enregistre le profil uniquement dans ce navigateur. Les vraies données de progression seront connectées après la mise en place de l'authentification et de la base de données.",
  },
  ar: {
    dashboard: "فضاء الآباء",
    greeting: "مرحباً",
    subtitle: "هذا هو المسار التجريبي لـ",
    prototype: "بيانات تجريبية",
    noProfile: "لم يتم إعداد ملف تجريبي بعد.",
    setup: "أنشئ ملفاً",
    start: "تابع الدرس",
    week: "هذا الأسبوع",
    time: "وقت التعلم",
    topics: "دروس مكتملة",
    accuracy: "إجابات صحيحة",
    streak: "أيام متتالية",
    recommendation: "اقتراح اليوم",
    recommendationText: "ابدأ بمقارنة الأعداد من 1 إلى 5. يستغرق الدرس حوالي 10 دقائق.",
    path: "المسار · الوحدة 1",
    status: "التقدم",
    available: "متاح",
    next: "قريباً",
    note: "يحفظ النموذج الملف في هذا المتصفح فقط. سيتم ربط بيانات التقدم الحقيقية بعد إعداد تسجيل الدخول وقاعدة البيانات.",
  },
};

export default function ParentDashboard() {
  const [profile, setProfile] = useState<DemoProfile | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProfile(readDemoProfile());
    setLoaded(true);
  }, []);

  if (!loaded) return <main className={styles.loading}>TA3LIM…</main>;
  if (!profile) return <main className={styles.empty}><BookOpen /><h1>{copy.fr.noProfile}</h1><Link href="/start">{copy.fr.setup}<ArrowRight /></Link></main>;

  const rtl = profile.locale === "ar";
  const t = copy[profile.locale];
  const Avatar = avatars[profile.avatar];
  const unit = curriculumData.curriculum.units[0];

  return (
    <main className={`${styles.shell} ${rtl ? styles.rtl : ""}`} dir={rtl ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><span><BookOpen /></span><b>TA3LIM</b><i>تعليم</i></Link>
        <nav><span><Languages />{profile.locale === "ar" ? "العربية" : "Français"}</span><Link href="/start" aria-label="Settings"><Settings /></Link></nav>
      </header>

      <div className={styles.page}>
        <section className={styles.welcome}>
          <div><span className={styles.eyebrow}>{t.dashboard}</span><h1>{t.greeting} {profile.parentName} 👋</h1><p>{t.subtitle} <b>{profile.childName}</b>.</p></div>
          <span className={styles.prototype}>{t.prototype}</span>
        </section>

        <section className={styles.childBar}>
          <div className={styles.avatar}><Avatar /></div>
          <p><b>{profile.childName}</b><span>{profile.grade}{rtl ? " المستوى" : profile.grade === 1 ? "re année" : "e année"} · Mathématiques</span></p>
          <Link href="/lernen"><Play fill="currentColor" />{t.start}</Link>
        </section>

        <section className={styles.metrics}>
          {[
            [Clock3, "18 min", t.time],
            [CheckCircle2, "0", t.topics],
            [Target, "—", t.accuracy],
            [TrendingUp, "1", t.streak],
          ].map(([Icon, value, label]) => { const MetricIcon = Icon as typeof Clock3; return <article key={String(label)}><span><MetricIcon /></span><p><b>{String(value)}</b><small>{String(label)}</small></p></article>; })}
        </section>

        <div className={styles.grid}>
          <section className={styles.pathCard}>
            <div className={styles.cardTitle}><span><BookOpen /></span><p><small>{t.path}</small><b>{rtl ? "الأعداد من 1 إلى 5" : "Les nombres de 1 à 5"}</b></p><em>8%</em></div>
            <div className={styles.progress}><i /></div>
            <div className={styles.topicList}>
              {unit.topics.map((topic, index) => (
                <article key={topic.id} className={index === 3 ? styles.activeTopic : ""}>
                  <span>{index < 3 ? <CheckCircle2 /> : index === 3 ? <Play /> : <span>{index + 1}</span>}</span>
                  <p><b>{profile.locale === "ar" ? topic.title_ar : topic.title_fr}</b><small>{index === 3 ? t.available : index < 3 ? t.status : t.next}</small></p>
                  {index === 3 && <Link href="/lernen"><ArrowRight /></Link>}
                </article>
              ))}
            </div>
          </section>

          <aside>
            <section className={styles.recommendation}><span><Target /></span><h2>{t.recommendation}</h2><p>{t.recommendationText}</p><Link href="/lernen">{t.start}<ArrowRight /></Link></section>
            <section className={styles.weekCard}><div><CalendarDays /><b>{t.week}</b></div><div className={styles.bars}>{[25,45,20,65,0,0,0].map((height,index)=><span key={index}><i style={{height:`${height}%`}}/><small>{["L","M","M","J","V","S","D"][index]}</small></span>)}</div></section>
          </aside>
        </div>
        <p className={styles.note}><BarChart3 />{t.note}</p>
      </div>
    </main>
  );
}

