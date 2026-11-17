"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Languages,
  Leaf,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Star,
  Sun,
  UserRound,
} from "lucide-react";
import { DemoProfile, saveDemoProfile } from "@/lib/demo-profile";
import styles from "./start.module.css";

type Locale = "fr" | "ar";
type Avatar = DemoProfile["avatar"];

const copy = {
  fr: {
    back: "Retour",
    pilot: "Prototype pilote",
    title: "Créons l'espace d'apprentissage de votre enfant.",
    intro: "Trois petites étapes pour personnaliser son parcours. Aucune donnée n'est envoyée : ce prototype reste sur cet appareil.",
    parentStep: "Parent",
    childStep: "Enfant",
    readyStep: "Prêt",
    parentTitle: "Comment devons-nous vous appeler ?",
    parentLabel: "Votre prénom",
    parentPlaceholder: "Ex. Yassine",
    childTitle: "Parlons de votre enfant",
    childLabel: "Prénom ou pseudonyme de l'enfant",
    childPlaceholder: "Ex. Lina",
    gradeLabel: "Niveau scolaire",
    grade: ["1re année", "2e année", "3e année"],
    languageLabel: "Langue d'apprentissage préférée",
    arabic: "Arabe",
    french: "Français",
    avatarLabel: "Choisir un avatar",
    next: "Continuer",
    previous: "Retour",
    readyTitle: "Tout est prêt !",
    readyText: "Le tableau de bord affichera le parcours et les progrès de votre enfant.",
    create: "Créer l'espace pilote",
    local: "Les informations restent uniquement dans ce navigateur.",
    required: "Merci de renseigner ce champ.",
  },
  ar: {
    back: "رجوع",
    pilot: "نموذج تجريبي",
    title: "لنُنشئ فضاء التعلم الخاص بطفلك.",
    intro: "ثلاث خطوات قصيرة لتخصيص المسار. لا يتم إرسال أي بيانات، فهذا النموذج يبقى على هذا الجهاز.",
    parentStep: "ولي الأمر",
    childStep: "الطفل",
    readyStep: "جاهز",
    parentTitle: "كيف نناديك؟",
    parentLabel: "اسمك الأول",
    parentPlaceholder: "مثال: ياسين",
    childTitle: "أخبرنا عن طفلك",
    childLabel: "اسم الطفل أو اسم مستعار",
    childPlaceholder: "مثال: لينا",
    gradeLabel: "المستوى الدراسي",
    grade: ["المستوى الأول", "المستوى الثاني", "المستوى الثالث"],
    languageLabel: "لغة التعلم المفضلة",
    arabic: "العربية",
    french: "الفرنسية",
    avatarLabel: "اختر صورة رمزية",
    next: "متابعة",
    previous: "رجوع",
    readyTitle: "كل شيء جاهز!",
    readyText: "ستعرض لوحة التحكم مسار طفلك وتقدمه.",
    create: "أنشئ الفضاء التجريبي",
    local: "تبقى المعلومات في هذا المتصفح فقط.",
    required: "يرجى ملء هذا الحقل.",
  },
};

const avatars = [
  { id: "sun" as const, Icon: Sun, color: "#f6bd31" },
  { id: "rocket" as const, Icon: Rocket, color: "#eb7447" },
  { id: "star" as const, Icon: Star, color: "#3a83aa" },
  { id: "leaf" as const, Icon: Leaf, color: "#0b8a64" },
];

export default function Onboarding() {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>("fr");
  const [step, setStep] = useState(0);
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [grade, setGrade] = useState<1 | 2 | 3>(1);
  const [learningLocale, setLearningLocale] = useState<Locale>("ar");
  const [avatar, setAvatar] = useState<Avatar>("sun");
  const [error, setError] = useState("");
  const t = copy[locale];
  const rtl = locale === "ar";

  function next() {
    if (step === 0 && !parentName.trim()) return setError(t.required);
    if (step === 1 && !childName.trim()) return setError(t.required);
    setError("");
    setStep((current) => Math.min(2, current + 1));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    saveDemoProfile({
      parentName: parentName.trim(),
      childName: childName.trim(),
      grade,
      locale: learningLocale,
      avatar,
      createdAt: new Date().toISOString(),
    });
    router.push("/eltern");
  }

  return (
    <main className={`${styles.shell} ${rtl ? styles.rtl : ""}`} dir={rtl ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><span><BookOpen size={21} /></span><b>TA3LIM</b><i>تعليم</i></Link>
        <button className={styles.language} onClick={() => setLocale(rtl ? "fr" : "ar")}><Languages size={18} />{rtl ? "Français" : "العربية"}</button>
      </header>

      <section className={styles.layout}>
        <aside className={styles.intro}>
          <span className={styles.pilot}><ShieldCheck size={16} />{t.pilot}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className={styles.privacy}><LockKeyhole size={20} /><span>{t.local}</span></div>
        </aside>

        <form className={styles.card} onSubmit={submit}>
          <nav className={styles.steps} aria-label="Onboarding">
            {[t.parentStep, t.childStep, t.readyStep].map((label, index) => (
              <div key={label} className={index <= step ? styles.activeStep : ""}>
                <span>{index < step ? <Check size={16} /> : index + 1}</span><small>{label}</small>
              </div>
            ))}
          </nav>

          {step === 0 && (
            <div className={styles.formStep}>
              <div className={styles.stepIcon}><UserRound /></div>
              <h2>{t.parentTitle}</h2>
              <label>{t.parentLabel}<input value={parentName} onChange={(event) => setParentName(event.target.value)} placeholder={t.parentPlaceholder} autoFocus /></label>
            </div>
          )}

          {step === 1 && (
            <div className={styles.formStep}>
              <h2>{t.childTitle}</h2>
              <label>{t.childLabel}<input value={childName} onChange={(event) => setChildName(event.target.value)} placeholder={t.childPlaceholder} autoFocus /></label>
              <fieldset><legend>{t.gradeLabel}</legend><div className={styles.choiceGrid}>{([1, 2, 3] as const).map((value) => <button type="button" key={value} className={grade === value ? styles.selected : ""} onClick={() => setGrade(value)}><b>{value}</b><span>{t.grade[value - 1]}</span></button>)}</div></fieldset>
              <fieldset><legend>{t.languageLabel}</legend><div className={styles.languageChoices}><button type="button" className={learningLocale === "ar" ? styles.selected : ""} onClick={() => setLearningLocale("ar")}>ع {t.arabic}</button><button type="button" className={learningLocale === "fr" ? styles.selected : ""} onClick={() => setLearningLocale("fr")}>Aa {t.french}</button></div></fieldset>
              <fieldset><legend>{t.avatarLabel}</legend><div className={styles.avatarChoices}>{avatars.map(({ id, Icon, color }) => <button aria-label={id} type="button" key={id} className={avatar === id ? styles.selectedAvatar : ""} style={{ "--avatar-color": color } as React.CSSProperties} onClick={() => setAvatar(id)}><Icon /></button>)}</div></fieldset>
            </div>
          )}

          {step === 2 && (
            <div className={`${styles.formStep} ${styles.ready}`}>
              <div className={styles.readyIcon}><Check size={36} /></div>
              <h2>{t.readyTitle}</h2><p>{t.readyText}</p>
              <div className={styles.summary}>
                <span>{avatars.map(({ id, Icon }) => id === avatar ? <Icon key={id} /> : null)}</span>
                <p><b>{childName}</b><small>{t.grade[grade - 1]} · {learningLocale === "ar" ? t.arabic : t.french}</small></p>
              </div>
            </div>
          )}

          {error && <p className={styles.error} role="alert">{error}</p>}
          <div className={styles.actions}>
            {step > 0 && <button type="button" className={styles.secondary} onClick={() => { setError(""); setStep((current) => current - 1); }}>{rtl ? <ArrowRight /> : <ArrowLeft />}{t.previous}</button>}
            {step < 2 ? <button type="button" className={styles.primary} onClick={next}>{t.next}{rtl ? <ArrowLeft /> : <ArrowRight />}</button> : <button type="submit" className={styles.primary}>{t.create}{rtl ? <ArrowLeft /> : <ArrowRight />}</button>}
          </div>
        </form>
      </section>
    </main>
  );
}

