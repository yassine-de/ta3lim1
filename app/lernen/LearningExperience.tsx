"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Languages,
  Lock,
  Play,
  RotateCcw,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import exerciseData from "@/content/reference-lessons/MA-G1-U1-T04/exercises.json";
import curriculumData from "@/data/curriculum/math-grade-1.json";
import styles from "./lernen.module.css";

type Locale = "fr" | "ar";
type Stage = "overview" | "video" | "quiz" | "result";
type Answer = string | number;

type ExerciseItem = {
  id: string;
  mode: string;
  type: string;
  left: number | { asset: string; count: number; layout?: string };
  right: number | { asset: string; count: number; layout?: string };
  choices: Array<string | number>;
  answer: Answer;
};

const text = {
  fr: {
    back: "Accueil",
    class: "Mathématiques · 1re année",
    unit: "Unité 1 · Nombres de 1 à 5",
    heading: "Comparer les nombres de 1 à 5",
    intro: "Découvre comment reconnaître où il y en a plus, moins ou autant.",
    progress: "Progression de la leçon",
    video: "1. Je comprends",
    videoDescription: "Nouri explique avec des objets simples.",
    practice: "2. Je m'entraîne",
    practiceDescription: "5 petites questions avec des indices.",
    reward: "3. Je réussis",
    rewardDescription: "Gagne jusqu'à trois étoiles.",
    start: "Commencer la leçon",
    watchTitle: "Regarde et compare",
    watchText: "Compte les pommes dans chaque panier. Il y en a 3 à gauche et 5 à droite.",
    more: "5, c'est plus que 3.",
    videoHint: "Pour comparer, compte puis associe les objets un par un.",
    continue: "Passer aux exercices",
    question: "Question",
    questionPrompt: "Choisis la bonne réponse.",
    less: "moins",
    moreChoice: "plus",
    equal: "autant",
    left: "à gauche",
    right: "à droite",
    correct: "Bravo, c'est juste !",
    incorrect: "Presque ! Compte ou associe les objets un par un.",
    next: "Question suivante",
    finish: "Voir mon résultat",
    resultTitle: "Leçon terminée !",
    resultText: "Tu sais comparer des quantités et des nombres jusqu'à 5.",
    score: "bonnes réponses",
    retry: "Recommencer",
    topics: "Dans cette unité",
    available: "Disponible",
    soon: "Après cette leçon",
  },
  ar: {
    back: "الرئيسية",
    class: "الرياضيات · المستوى الأول",
    unit: "الوحدة 1 · الأعداد من 1 إلى 5",
    heading: "مقارنة الأعداد من 1 إلى 5",
    intro: "اكتشف كيف تعرف أين يوجد أكثر أو أقل أو نفس العدد.",
    progress: "تقدم الدرس",
    video: "1. أفهم",
    videoDescription: "يشرح نوري باستعمال أشياء بسيطة.",
    practice: "2. أتدرب",
    practiceDescription: "5 أسئلة قصيرة مع تلميحات.",
    reward: "3. أنجح",
    rewardDescription: "اربح حتى ثلاث نجوم.",
    start: "ابدأ الدرس",
    watchTitle: "شاهد وقارن",
    watchText: "عدّ التفاحات في كل سلة. هناك 3 في اليسار و5 في اليمين.",
    more: "خمسة أكثر من ثلاثة.",
    videoHint: "للمقارنة، عدّ الأشياء ثم صِل كل عنصر بعنصر.",
    continue: "انتقل إلى التمارين",
    question: "السؤال",
    questionPrompt: "اختر الإجابة الصحيحة.",
    less: "أقل",
    moreChoice: "أكثر",
    equal: "نفس العدد",
    left: "اليسار",
    right: "اليمين",
    correct: "أحسنت، إجابة صحيحة!",
    incorrect: "اقتربت! عدّ الأشياء أو صِل بينها واحداً بواحد.",
    next: "السؤال التالي",
    finish: "شاهد النتيجة",
    resultTitle: "أكملت الدرس!",
    resultText: "أصبحت تعرف كيف تقارن الكميات والأعداد إلى 5.",
    score: "إجابات صحيحة",
    retry: "أعد المحاولة",
    topics: "في هذه الوحدة",
    available: "متاح",
    soon: "بعد هذا الدرس",
  },
};

const assetEmoji: Record<string, string> = {
  block: "🧊",
  circle: "●",
  apple: "🍎",
};

function countOf(value: ExerciseItem["left"]) {
  return typeof value === "number" ? value : value.count;
}

function Collection({ value }: { value: ExerciseItem["left"] }) {
  if (typeof value === "number") return <strong className={styles.bigNumber}>{value}</strong>;
  const symbol = assetEmoji[value.asset] ?? "●";
  return (
    <span className={`${styles.collection} ${value.layout === "spread" ? styles.spread : ""}`}>
      {Array.from({ length: value.count }, (_, index) => (
        <span key={index} aria-hidden="true">{symbol}</span>
      ))}
    </span>
  );
}

export default function LearningExperience() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [stage, setStage] = useState<Stage>("overview");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<Answer | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const t = text[locale];
  const rtl = locale === "ar";

  const questions = useMemo(
    () => (exerciseData.items as ExerciseItem[]).filter((item) => item.mode === "graded"),
    [],
  );
  const question = questions[questionIndex];
  const isCorrect = selected !== null && String(selected) === String(question?.answer);
  const topics = curriculumData.curriculum.units[0].topics;
  const completed = stage === "result" ? 100 : stage === "quiz" ? 45 + questionIndex * 10 : stage === "video" ? 28 : 8;

  function choose(answer: Answer) {
    if (selected !== null) return;
    setSelected(answer);
  }

  function advance() {
    if (selected === null) return;
    const nextAnswers = [...answers, isCorrect];
    setAnswers(nextAnswers);
    setSelected(null);
    if (questionIndex === questions.length - 1) setStage("result");
    else setQuestionIndex((current) => current + 1);
  }

  function resetLesson() {
    setQuestionIndex(0);
    setSelected(null);
    setAnswers([]);
    setStage("video");
  }

  const correctCount = answers.filter(Boolean).length;

  return (
    <main className={`${styles.shell} ${rtl ? styles.rtl : ""}`} dir={rtl ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="TA3LIM">
          <span><BookOpen size={21} /></span><b>TA3LIM</b><i>تعليم</i>
        </Link>
        <div className={styles.headerActions}>
          <button className={styles.language} onClick={() => setLocale(rtl ? "fr" : "ar")}>
            <Languages size={18} />{rtl ? "Français" : "العربية"}
          </button>
          <Link href="/" className={styles.homeLink}>
            {rtl ? <ArrowRight size={17} /> : <ArrowLeft size={17} />}{t.back}
          </Link>
        </div>
      </header>

      <div className={styles.progressHeader}>
        <div>
          <span>{t.class}</span>
          <strong>{t.unit}</strong>
        </div>
        <div className={styles.progressBlock}>
          <span>{t.progress} · {completed}%</span>
          <div><i style={{ width: `${completed}%` }} /></div>
        </div>
      </div>

      {stage === "overview" && (
        <section className={styles.overview}>
          <div className={styles.overviewCopy}>
            <span className={styles.kicker}><Sparkles size={16} />{t.available}</span>
            <h1>{t.heading}</h1>
            <p>{t.intro}</p>
            <div className={styles.lessonSteps}>
              {[
                [Play, t.video, t.videoDescription],
                [BookOpen, t.practice, t.practiceDescription],
                [Trophy, t.reward, t.rewardDescription],
              ].map(([Icon, title, description]) => {
                const StepIcon = Icon as typeof Play;
                return <div key={String(title)}><span><StepIcon size={20} /></span><p><b>{String(title)}</b><small>{String(description)}</small></p><Check size={18} /></div>;
              })}
            </div>
            <button className={styles.primaryButton} onClick={() => setStage("video")}>
              <Play size={18} fill="currentColor" />{t.start}
            </button>
          </div>
          <aside className={styles.robotPanel}>
            <div className={styles.robotGlow} />
            <Image src="/ta3lim-ai-teacher-v2-cutout.png" alt="Nouri" width={560} height={560} priority />
            <div className={styles.speech}>{rtl ? "هيا نتعلم معاً!" : "On apprend ensemble !"}</div>
          </aside>
        </section>
      )}

      {stage === "video" && (
        <section className={styles.learningCard}>
          <div className={styles.cardTop}><span>01</span><b>{t.watchTitle}</b></div>
          <div className={styles.demoArea}>
            <div className={styles.nouriMini}>
              <Image src="/ta3lim-ai-teacher-v2-cutout.png" alt="Nouri" width={190} height={190} />
            </div>
            <div className={styles.baskets}>
              <div><span>🍎 🍎 🍎</span><b>3</b></div>
              <div><span>🍎 🍎 🍎 🍎 🍎</span><b>5</b></div>
            </div>
          </div>
          <div className={styles.explanation}>
            <div><Sparkles size={20} /></div>
            <p><b>{t.more}</b><span>{t.watchText}</span><small>{t.videoHint}</small></p>
          </div>
          <button className={styles.primaryButton} onClick={() => setStage("quiz")}>
            {t.continue}{rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </button>
        </section>
      )}

      {stage === "quiz" && question && (
        <section className={styles.quizCard}>
          <div className={styles.quizHeader}>
            <span>{t.question} {questionIndex + 1}/{questions.length}</span>
            <div>{questions.map((_, index) => <i key={index} className={index <= questionIndex ? styles.doneDot : ""} />)}</div>
          </div>
          <h1>{t.questionPrompt}</h1>
          <div className={styles.comparison}>
            <div><Collection value={question.left} /><small>{countOf(question.left)}</small></div>
            <span>?</span>
            <div><Collection value={question.right} /><small>{countOf(question.right)}</small></div>
          </div>
          <div className={styles.answers}>
            {question.choices.map((choice) => {
              const labels: Record<string, string> = {
                left: t.left,
                right: t.right,
                less: t.less,
                more: t.moreChoice,
                equal: t.equal,
              };
              const label = labels[String(choice)] ?? String(choice);
              const active = selected !== null && String(selected) === String(choice);
              const correct = selected !== null && String(question.answer) === String(choice);
              return (
                <button
                  key={String(choice)}
                  className={`${styles.answerButton} ${active ? styles.selected : ""} ${correct ? styles.correctAnswer : ""}`}
                  onClick={() => choose(choice)}
                  disabled={selected !== null}
                >
                  {label}{correct && <Check size={18} />}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className={`${styles.feedback} ${isCorrect ? styles.goodFeedback : styles.retryFeedback}`} role="status">
              <span>{isCorrect ? "✓" : "↻"}</span><p><b>{isCorrect ? t.correct : t.incorrect}</b></p>
            </div>
          )}
          <button className={styles.primaryButton} disabled={selected === null} onClick={advance}>
            {questionIndex === questions.length - 1 ? t.finish : t.next}
            {rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </button>
        </section>
      )}

      {stage === "result" && (
        <section className={styles.resultCard}>
          <div className={styles.trophy}><Trophy size={48} /></div>
          <div className={styles.resultStars}>
            {[0, 1, 2].map((star) => <Star key={star} fill={star < Math.ceil(correctCount / 2) ? "currentColor" : "none"} />)}
          </div>
          <h1>{t.resultTitle}</h1>
          <p>{t.resultText}</p>
          <strong>{correctCount}/{questions.length} {t.score}</strong>
          <button className={styles.primaryButton} onClick={resetLesson}><RotateCcw size={18} />{t.retry}</button>
        </section>
      )}

      <section className={styles.unitTopics}>
        <span>{t.topics}</span>
        <div>
          {topics.map((topic, index) => (
            <article key={topic.id} className={index === 3 ? styles.currentTopic : ""}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <p>{locale === "ar" ? topic.title_ar : topic.title_fr}</p>
              {index <= 3 ? <ChevronRight size={18} /> : <Lock size={16} />}
            </article>
          ))}
        </div>
        <small>{t.soon}</small>
      </section>
    </main>
  );
}

