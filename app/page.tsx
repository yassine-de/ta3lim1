"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, AudioLines, BarChart3, BookOpen, Bot, Brain, Calculator, Check,
  ChevronDown, Clock3, Download, FileText, GraduationCap, HelpCircle, Languages,
  Lightbulb, Menu, MessageCircle, Play, Printer, Shapes, ShieldCheck, Sparkles,
  Star, Target, Trophy, Users, X,
} from "lucide-react";

type Language = "fr" | "ar";

const copy = {
  fr: {
    nav: ["Comment ça marche", "Matières", "Pour les parents"], login: "Se connecter", trial: "Essayer gratuitement",
    eyebrow: "Conçu pour le programme marocain",
    titleA: "Chaque enfant peut", titleB: "aimer apprendre.",
    intro: "Des leçons courtes, des exercices interactifs et un suivi clair — pour progresser en mathématiques avec confiance, à son rythme.",
    cta: "Commencer gratuitement", demo: "Voir comment ça marche", noCard: "Sans carte bancaire · 7 jours gratuits",
    visualLabel: "Leçon du jour", visualTitle: "Comparer les nombres", visualProgress: "Progression du thème", minutes: "8 min",
    social: "Une méthode rassurante pour toute la famille", chips: ["Aligné au programme", "Français & arabe", "Pensé pour le mobile"],
    howEyebrow: "Une routine qui fonctionne", howTitle: "Comprendre. Pratiquer. Réussir.",
    howText: "Un parcours simple qui transforme chaque notion du programme en petite victoire.",
    steps: [
      ["01", "Regarder", "Une vidéo courte et vivante explique la notion avec des exemples familiers."],
      ["02", "S'entraîner", "Des exercices interactifs s'adaptent au rythme et renforcent la compréhension."],
      ["03", "Être fier", "Étoiles, séries et encouragements donnent envie de revenir et de progresser."],
    ],
    programEyebrow: "Apprendre sans se perdre", programTitle: "Tout le programme, au même endroit.",
    programText: "Des contenus organisés exactement comme l'école : niveau, matière, chapitre, notion. L'enfant sait toujours quoi faire ensuite.",
    explore: "Explorer le programme", subjects: ["Nombres & calcul", "Géométrie", "Mesures", "Problèmes"],
    parentEyebrow: "Pour les parents", parentTitle: "Vous voyez les progrès. Pas seulement le temps d'écran.",
    parentText: "En quelques secondes, comprenez ce que votre enfant a appris, où il avance bien et où il a besoin d'un coup de pouce.",
    metrics: ["12 notions terminées", "86% de bonnes réponses", "4 jours de série"], report: "Aperçu de la semaine", child: "Yasmine · CE2",
    week: ["L", "M", "M", "J", "V", "S", "D"], strength: "Point fort", strengthValue: "Addition jusqu'à 1 000", improve: "À renforcer", improveValue: "Problèmes à deux étapes",
    trustTitle: "Pensé pour les enfants. Rassurant pour les parents.",
    trust: [["Un profil par enfant", "Chaque enfant avance à son rythme, avec son propre parcours."], ["Un espace sécurisé", "Pas de publicité, pas de distraction, des données familiales protégées."], ["Apprendre partout", "Rapide sur mobile et adapté aux connexions plus lentes."]],
    finalTitle: "La prochaine petite victoire commence ici.", finalText: "Offrez à votre enfant une façon plus joyeuse et plus claire d'apprendre.", finalCta: "Créer mon compte gratuitement",
    footer: "L'apprentissage qui donne confiance.", product: "Produit", company: "TA3LIM", legal: "Légal", copyright: "© 2026 TA3LIM. Tous droits réservés.",
  },
  ar: {
    nav: ["كيف يعمل", "المواد", "للآباء"], login: "تسجيل الدخول", trial: "جرّب مجاناً",
    eyebrow: "مصمّم وفق المنهاج المغربي",
    titleA: "كل طفل يستطيع أن", titleB: "يحبّ التعلّم.",
    intro: "دروس قصيرة، تمارين تفاعلية ومتابعة واضحة — ليتقدم طفلك في الرياضيات بثقة، حسب إيقاعه الخاص.",
    cta: "ابدأ مجاناً", demo: "شاهد كيف يعمل", noCard: "بدون بطاقة بنكية · 7 أيام مجاناً",
    visualLabel: "درس اليوم", visualTitle: "مقارنة الأعداد", visualProgress: "تقدم الدرس", minutes: "8 دقائق",
    social: "طريقة مطمئنة لكل أفراد الأسرة", chips: ["متوافق مع المنهاج", "العربية والفرنسية", "مصمّم للهاتف"],
    howEyebrow: "روتين فعّال", howTitle: "يفهم. يتدرّب. ينجح.", howText: "مسار بسيط يحوّل كل مفهوم في المنهاج إلى إنجاز صغير.",
    steps: [["٠١", "يشاهد", "فيديو قصير وممتع يشرح المفهوم بأمثلة قريبة."], ["٠٢", "يتدرّب", "تمارين تفاعلية تناسب إيقاعه وتقوّي فهمه."], ["٠٣", "يفتخر", "نجوم وتشجيعات تحفّزه على العودة والتقدم."]],
    programEyebrow: "تعلّم منظّم", programTitle: "المنهاج كاملاً، في مكان واحد.", programText: "محتوى منظّم مثل المدرسة تماماً: المستوى، المادة، الوحدة والدرس. طفلك يعرف دائماً خطوته التالية.", explore: "اكتشف المنهاج", subjects: ["الأعداد والحساب", "الهندسة", "القياس", "المسائل"],
    parentEyebrow: "للآباء", parentTitle: "ترى التقدم، وليس فقط وقت الشاشة.", parentText: "في ثوانٍ، اعرف ما تعلّمه طفلك، أين يتفوّق وأين يحتاج إلى دعم.",
    metrics: ["12 درساً مكتملاً", "86% إجابات صحيحة", "4 أيام متتالية"], report: "ملخص الأسبوع", child: "ياسمين · المستوى الثالث", week: ["ن", "ث", "ر", "خ", "ج", "س", "ح"], strength: "نقطة قوة", strengthValue: "الجمع إلى 1000", improve: "يحتاج تدريباً", improveValue: "مسائل من خطوتين",
    trustTitle: "مصمّم للأطفال. مطمئن للآباء.", trust: [["حساب لكل طفل", "يتقدم كل طفل حسب إيقاعه، في مساره الخاص."], ["فضاء آمن", "بدون إعلانات أو تشتيت، وبيانات الأسرة محمية."], ["تعلّم من أي مكان", "سريع على الهاتف ومناسب للاتصالات البطيئة."]],
    finalTitle: "الإنجاز الصغير القادم يبدأ هنا.", finalText: "امنح طفلك طريقة أوضح وأكثر متعة للتعلّم.", finalCta: "أنشئ حسابي مجاناً",
    footer: "تعلّم يمنح الثقة.", product: "المنتج", company: "تعليم", legal: "قانوني", copyright: "© 2026 تعليم. جميع الحقوق محفوظة.",
  },
};

function Logo() {
  return <a href="#" className="logo" aria-label="TA3LIM accueil"><span className="logo-mark"><BookOpen size={21} /></span><span>TA3LIM</span><i>تعليم</i></a>;
}

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [grade, setGrade] = useState(1);
  const t = copy[lang];
  const rtl = lang === "ar";
  const curriculum = rtl ? {
    1:[["الأعداد والحساب","الأعداد من 0 إلى 99 · الجمع والطرح · المقارنة"],["الهندسة","الأشكال البسيطة · التموضع في الفضاء"],["القياس","الطول · الزمن · النقود"],["المسائل","فهم السؤال · اختيار العملية"]],
    2:[["الأعداد والحساب","الأعداد إلى 999 · الحساب الذهني · الضرب"],["الهندسة","المضلعات · التماثل · المجسمات"],["القياس","المتر · الكيلوغرام · الساعة"],["المسائل","مسائل من خطوة أو خطوتين"]],
    3:[["الأعداد والحساب","الأعداد إلى 9 999 · القسمة · الكسور"],["الهندسة","الزوايا · المحيط · الشبكات"],["القياس","التحويلات · المساحة · المدة"],["المسائل","تنظيم المعطيات · شرح الحل"]]
  } : {
    1:[["Nombres & calcul","De 0 à 99 · addition · soustraction · comparaison"],["Géométrie","Formes simples · repérage dans l'espace"],["Mesures","Longueurs · temps · monnaie"],["Problèmes","Comprendre la question · choisir l'opération"]],
    2:[["Nombres & calcul","Jusqu'à 999 · calcul mental · multiplication"],["Géométrie","Polygones · symétrie · solides"],["Mesures","Mètre · kilogramme · heure"],["Problèmes","Situations en une ou deux étapes"]],
    3:[["Nombres & calcul","Jusqu'à 9 999 · division · fractions"],["Géométrie","Angles · périmètre · quadrillage"],["Mesures","Conversions · aire · durées"],["Problèmes","Organiser les données · expliquer sa démarche"]]
  };

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "arabic" : ""}>
      <header className="nav-shell">
        <nav className="nav container">
          <Logo />
          <div className="nav-links">
            <a href="#methode">{t.nav[0]}</a><a href="#subjects">{t.nav[1]}</a><a href="#parents">{t.nav[2]}</a>
          </div>
          <div className="nav-actions">
            <button className="lang" onClick={() => setLang(rtl ? "fr" : "ar")} aria-label="Changer la langue"><Languages size={17} /> {rtl ? "FR" : "العربية"}</button>
            <a href="#" className="login">{t.login}</a><a href="/lernen" className="button small">{t.trial}</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="mobile-menu"><a href="#methode" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a><a href="#subjects" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a><a href="#parents" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a><button className="lang" onClick={() => { setLang(rtl ? "fr" : "ar"); setMenuOpen(false); }}><Languages size={17}/>{rtl ? "Français" : "العربية"}</button><a href="/lernen" className="button">{t.trial}</a></div>}
      </header>

      <section className="hero">
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span><Sparkles size={15}/></span>{t.eyebrow}</div>
            <h1>{t.titleA}<br/><em>{t.titleB}</em></h1>
            <p className="lead">{t.intro}</p>
            <div className="hero-actions"><a className="button primary" href="/lernen">{t.cta}<ArrowRight size={18}/></a><a className="text-button" href="#methode"><span className="play"><Play size={15} fill="currentColor"/></span>{t.demo}</a></div>
            <p className="micro"><Check size={14}/>{t.noCard}</p>
          </div>
          <div className="hero-visual">
            <div className="image-wrap"><Image src="/ta3lim-hero.png" alt="Deux enfants apprennent les mathématiques avec TA3LIM" width={1536} height={1024} priority /></div>
            <div className="lesson-card">
              <div className="lesson-icon"><Target size={22}/></div><div><small>{t.visualLabel}</small><strong>{t.visualTitle}</strong><span><Clock3 size={13}/>{t.minutes}</span></div>
            </div>
            <div className="progress-card"><div className="progress-head"><span>{t.visualProgress}</span><strong>72%</strong></div><div className="progress-track"><i/></div><div className="stars"><Star fill="currentColor"/><Star fill="currentColor"/><Star/></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container"><p>{t.social}</p><div>{t.chips.map((chip, i) => <span key={chip}>{i === 0 ? <ShieldCheck/> : i === 1 ? <Languages/> : <Sparkles/>}{chip}</span>)}</div></div></section>

      <section className="section discover" id="contenu">
        <div className="container">
          <div className="discover-head">
            <div><span className="kicker">{rtl ? "كل ما يحتاجه طفلك" : "Une plateforme complète"}</span><h2>{rtl ? "من درس المدرسة إلى لحظة الفهم." : "Du programme de classe au déclic."}</h2></div>
            <p>{rtl ? "تعليم يجمع الشرح والتطبيق والمراجعة في مسار واحد واضح، متوافق مع المنهاج المغربي ومصمم للاستعمال اليومي في البيت." : "TA3LIM réunit explication, pratique et révision dans un parcours clair, aligné sur le programme marocain et pensé pour le quotidien à la maison."}</p>
          </div>
          <div className="offer-grid">
            {[
              {icon:<Play/>,tag:rtl?"أفهم":"Je comprends",title:rtl?"فيديوهات قصيرة":"Vidéos courtes",text:rtl?"شرح بصري بسيط، مثال خطوة بخطوة وملخص في بضع دقائق.":"Une explication visuelle, un exemple pas à pas et un résumé en quelques minutes.",tone:"green"},
              {icon:<Brain/>,tag:rtl?"أطبّق":"Je pratique",title:rtl?"تمارين تفاعلية":"Exercices interactifs",text:rtl?"أسئلة متنوعة، تصحيح فوري وتلميحات تساعد دون إعطاء الجواب.":"Questions variées, correction immédiate et indices qui aident sans donner la réponse.",tone:"orange"},
              {icon:<Printer/>,tag:rtl?"أراجع":"Je révise",title:rtl?"أوراق عمل جاهزة":"Fiches à imprimer",text:rtl?"تمارين إضافية للعمل بعيداً عن الشاشة والاستعداد للتقييم.":"Des activités complémentaires hors écran pour réviser et préparer les contrôles.",tone:"yellow"},
              {icon:<Trophy/>,tag:rtl?"أتقدم":"Je progresse",title:rtl?"مسار محفّز":"Parcours motivant",text:rtl?"نجوم ومستويات وتحديات قصيرة تجعل التقدم واضحاً وممتعاً.":"Étoiles, niveaux et petits défis rendent chaque progrès visible et gratifiant.",tone:"blue"},
            ].map(item=><article className={`offer-card ${item.tone}`} key={item.title}><div className="offer-icon">{item.icon}</div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><span className="offer-arrow"><ArrowRight/></span></article>)}
          </div>
          <div className="grade-bar"><div><GraduationCap/><span><small>{rtl?"المستويات المتاحة في النسخة الأولى":"Niveaux du premier lancement"}</small><strong>{rtl?"الابتدائي · من المستوى الأول إلى الثالث":"Primaire · 1re à 3e année"}</strong></span></div><div className="grade-pills"><b>{rtl?"الرياضيات":"Mathématiques"}</b><span>{rtl?"العربية قريباً":"Arabe bientôt"}</span><span>{rtl?"الفرنسية قريباً":"Français bientôt"}</span></div></div>
        </div>
      </section>

      <section className="section subject-worlds" id="subjects"><div className="container"><div className="subjects-heading"><div><span className="kicker">{rtl?"عوالم التعلّم":"Nos univers d'apprentissage"}</span><h2>{rtl?"ثلاث مواد، عالم كامل لكل واحدة.":"Trois matières, un univers pour chacune."}</h2></div><p>{rtl?"يجد الطفل مادته بسرعة بفضل ألوان ورموز مختلفة. نبدأ بالرياضيات، ثم نفتح العربية والفرنسية تدريجياً.":"Chaque matière possède ses couleurs, ses repères et son propre parcours. Nous commençons par les mathématiques, puis ouvrons progressivement l'arabe et le français."}</p></div><div className="subject-cards">
        <article className="subject-card math-card"><div className="subject-top"><span className="subject-icon"><Calculator/></span><span className="availability live"><i/>{rtl?"متاح في النسخة التجريبية":"Disponible au pilote"}</span></div><div className="subject-visual math-visual"><span className="shape triangle"/><span className="shape circle"/><div className="math-board"><b>7</b><em>+</em><b>5</b><i>=</i><strong>12</strong></div><Shapes/></div><div className="subject-body"><small>01</small><h3>{rtl?"الرياضيات":"Mathématiques"}</h3><p>{rtl?"الأعداد، الحساب، الهندسة، القياس وحل المسائل من المستوى الأول إلى الثالث.":"Nombres, calcul, géométrie, mesures et résolution de problèmes, de la 1re à la 3e année."}</p><div className="subject-tags"><span>{rtl?"المستوى 1–3":"1re–3e année"}</span><span>{rtl?"فيديو + تمارين":"Vidéo + exercices"}</span></div><a href="#matieres">{rtl?"اكتشف البرنامج":"Voir le programme"}<ArrowRight/></a></div></article>
        <article className="subject-card arabic-card"><div className="subject-top"><span className="subject-icon"><BookOpen/></span><span className="availability soon"><i/>{rtl?"قريباً":"Bientôt"}</span></div><div className="subject-visual arabic-visual"><span className="arabic-letter l1">أ</span><span className="arabic-letter l2">ب</span><span className="arabic-letter l3">ت</span><div className="sound-wave"><AudioLines/></div></div><div className="subject-body"><small>02</small><h3>{rtl?"اللغة العربية":"Arabe"}</h3><p>{rtl?"الحروف والقراءة والفهم والتعبير والقواعد من خلال قصص وتمارين صوتية.":"Lettres, lecture, compréhension, expression et langue à travers des histoires et activités audio."}</p><div className="subject-tags"><span>{rtl?"قراءة":"Lecture"}</span><span>{rtl?"صوت ونطق":"Audio & prononciation"}</span></div><span className="subject-note">{rtl?"قيد إعداد المحتوى":"Contenus en préparation"}</span></div></article>
        <article className="subject-card french-card"><div className="subject-top"><span className="subject-icon"><Languages/></span><span className="availability soon"><i/>{rtl?"قريباً":"Bientôt"}</span></div><div className="subject-visual french-visual"><div className="word-card"><small>bonjour</small><strong>Aa</strong></div><span className="speech s-left">Salut !</span><span className="speech s-right">Merci</span><Star fill="currentColor"/></div><div className="subject-body"><small>03</small><h3>{rtl?"اللغة الفرنسية":"Français"}</h3><p>{rtl?"المفردات والاستماع والقراءة والتواصل بثقة في مواقف قريبة من حياة الطفل.":"Vocabulaire, écoute, lecture et communication dans des situations proches du quotidien de l'enfant."}</p><div className="subject-tags"><span>{rtl?"مفردات":"Vocabulaire"}</span><span>{rtl?"استماع":"Écoute"}</span></div><span className="subject-note">{rtl?"قيد إعداد المحتوى":"Contenus en préparation"}</span></div></article>
      </div></div></section>

      <section className="section curriculum-explorer" id="matieres"><div className="container">
        <div className="explorer-title"><div><span className="kicker">{rtl?"داخل البرنامج":"Dans le programme"}</span><h2>{rtl?"اعثر على الدرس المناسب في ثوانٍ.":"Trouvez la bonne notion en quelques secondes."}</h2></div><p>{rtl?"اختر المستوى لتشاهد المحاور التي سيجدها طفلك في تعليم. كل محور مقسم إلى دروس قصيرة ومرتبة.":"Choisissez un niveau pour voir les grands domaines proposés dans TA3LIM. Chaque domaine est découpé en leçons courtes et ordonnées."}</p></div>
        <div className="explorer-shell"><div className="explorer-sidebar"><span>{rtl?"اختر المستوى":"Choisir le niveau"}</span>{[1,2,3].map(n=><button key={n} className={grade===n?"active":""} onClick={()=>setGrade(n)}><b>{n}</b><span>{rtl?`المستوى ${n}`:`${n}${n===1?'re':'e'} année`}</span><ArrowRight/></button>)}<div className="coming-levels"><small>{rtl?"قريباً":"Prochainement"}</small><span>4e</span><span>5e</span><span>6e</span></div></div><div className="explorer-content"><div className="subject-head"><span><BookOpen/></span><div><small>{rtl?`الرياضيات · المستوى ${grade}`:`Mathématiques · ${grade}${grade===1?'re':'e'} année`}</small><strong>{rtl?"المحاور الرئيسية":"Les grands domaines"}</strong></div><b>{rtl?"وفق المنهاج المغربي":"Programme marocain"}</b></div><div className="domain-grid">{curriculum[grade as 1|2|3].map((item,i)=><article key={item[0]}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div><ArrowRight/></article>)}</div><div className="explorer-foot"><span><Check/>{rtl?"فيديو وتمارين وورقة عمل لكل موضوع":"Vidéo, exercices et fiche pour chaque notion"}</span><a href="#inscription">{rtl?"ابدأ بهذا المستوى":"Commencer à ce niveau"}<ArrowRight/></a></div></div></div>
      </div></section>

      <section className="section method" id="methode"><div className="container"><div className="section-heading centered"><span>{t.howEyebrow}</span><h2>{t.howTitle}</h2><p>{t.howText}</p></div><div className="step-grid">{t.steps.map((step, i) => <article className={`step step-${i+1}`} key={step[1]}><div className="step-top"><b>{step[0]}</b><div>{i === 0 ? <Play/> : i === 1 ? <Target/> : <Star/>}</div></div><h3>{step[1]}</h3><p>{step[2]}</p><div className="step-art" aria-hidden>{i === 0 ? <><span className="video-window"><i/><Play fill="currentColor"/></span><span className="dot d1"/><span className="dot d2"/></> : i === 1 ? <><span className="number">7</span><span className="plus">+</span><span className="number orange">5</span><span className="answer">12 <Check/></span></> : <><span className="big-star"><Star fill="currentColor"/></span><span className="spark">✦</span><span className="streak">+ 50 XP</span></>}</div></article>)}</div></div></section>

      <section className="section ai-teacher" id="nouri">
        <div className="container ai-grid">
          <div className="robot-stage">
            <div className="robot-halo"/><Image src="/ta3lim-ai-teacher-v3.png" alt={rtl?"نوري، المعلم الذكي في تعليم":"Nouri, le professeur IA de TA3LIM"} width={1024} height={1536}/>
            <span className="robot-badge"><Sparkles/> {rtl?"متاح أثناء التعلّم":"Disponible pendant la leçon"}</span>
            <div className="mini-chat c1"><span>?</span><p>{rtl?"اشرحها بطريقة أسهل":"Explique-moi autrement"}</p></div>
            <div className="mini-chat c2"><span><Check/></span><p>{rtl?"أحسنت! لنجرّب مثالاً آخر":"Bravo ! Essayons un autre exemple."}</p></div>
          </div>
          <div className="ai-copy"><span className="kicker">{rtl?"المعلم الذكي لتعليم":"Le professeur IA de TA3LIM"}</span><div className="nouri-title"><h2>{rtl?"تعرّف على نوري، رفيق التعلّم.":"Voici Nouri, le compagnon qui explique."}</h2><span><Bot/></span></div><p>{rtl?"عندما يتوقف طفلك عند سؤال، يساعده نوري على فهم الفكرة بدل إعطائه الجواب مباشرة. يشرح بكلمات أبسط، يقترح مثالاً جديداً ويشجعه على المحاولة.":"Quand votre enfant bloque, Nouri l'aide à comprendre sans répondre à sa place. Il reformule avec des mots simples, propose un nouvel exemple et l'encourage à essayer."}</p>
            <div className="ai-benefits">
              <div><span><Lightbulb/></span><p><strong>{rtl?"شرح يناسب الطفل":"Une explication qui s'adapte"}</strong><small>{rtl?"يعيد صياغة الفكرة خطوة بخطوة بالعربية أو الفرنسية.":"Il reformule pas à pas, en arabe ou en français."}</small></p></div>
              <div><span><MessageCircle/></span><p><strong>{rtl?"مساعدة في اللحظة المناسبة":"Une aide au bon moment"}</strong><small>{rtl?"تلميحات مرتبطة بالدرس والتمرين الحالي.":"Des indices liés à la leçon et à l'exercice en cours."}</small></p></div>
              <div><span><ShieldCheck/></span><p><strong>{rtl?"فضاء موجّه وآمن":"Un cadre guidé et sécurisé"}</strong><small>{rtl?"محادثات محدودة بالتعلّم ومناسبة للأطفال.":"Des échanges limités à l'apprentissage et adaptés aux enfants."}</small></p></div>
            </div>
            <div className="ai-note"><ShieldCheck/><span><strong>{rtl?"ميزة مخططة للنسخة التالية":"Fonction prévue pour une prochaine version"}</strong>{rtl?" سنختبرها أولاً مع العائلات والمعلمين قبل الإطلاق.":" Elle sera testée avec des familles et des enseignants avant son lancement."}</span></div>
          </div>
        </div>
      </section>

      <section className="section program" id="programme"><div className="container program-grid"><div className="program-copy"><span className="kicker">{t.programEyebrow}</span><h2>{t.programTitle}</h2><p>{t.programText}</p><ul>{t.subjects.map(s => <li key={s}><Check/>{s}</li>)}</ul><a className="inline-link" href="#inscription">{t.explore}<ArrowRight/></a></div><div className="curriculum-card"><div className="card-nav"><div><span className="mini-logo"><BookOpen/></span><b>Mathématiques</b></div><button><span>3e</span><ChevronDown/></button></div><div className="chapter-head"><span>Chapitre 4</span><strong>{rtl ? "الجمع والطرح" : "Addition & soustraction"}</strong><small>3 / 6 {rtl ? "دروس مكتملة" : "notions terminées"}</small></div><div className="topic-list">{[
          ["01", rtl ? "جمع أعداد من ثلاثة أرقام" : "Additionner jusqu'à 1 000", 100],
          ["02", rtl ? "الطرح مع الاحتفاظ" : "Soustraire avec retenue", 100],
          ["03", rtl ? "حل مسائل قصيرة" : "Résoudre un problème", 74],
          ["04", rtl ? "التحقق من النتيجة" : "Vérifier son résultat", 0],
        ].map(([n, label, value]) => <div className={`topic ${value === 0 ? "locked" : ""}`} key={String(n)}><span>{n}</span><div><strong>{label}</strong><i><em style={{width: `${value}%`}}/></i></div>{value === 100 ? <Check/> : value === 0 ? <Play/> : <b>{value}%</b>}</div>)}</div></div></div></section>

      <section className="section parents" id="parents"><div className="container parents-grid"><div className="dashboard"><div className="dash-top"><div><small>{t.report}</small><strong>{t.child}</strong></div><span className="avatar">Y</span></div><div className="metric-row">{t.metrics.map((m, i) => <div key={m}><span>{i === 0 ? <BookOpen/> : i === 1 ? <Target/> : <Sparkles/>}</span><strong>{m.split(" ")[0]}</strong><small>{m.substring(m.indexOf(" ")+1)}</small></div>)}</div><div className="chart"><div className="chart-title"><strong>{rtl ? "وقت التعلّم" : "Temps d'apprentissage"}</strong><span>{rtl ? "هذا الأسبوع" : "Cette semaine"}</span></div><div className="bars">{[38,62,46,84,52,72,34].map((h,i) => <div key={i}><i style={{height:`${h}%`}} className={i===3?"active":""}/><small>{t.week[i]}</small></div>)}</div></div><div className="insight-row"><div><span className="good"><Star/></span><p><small>{t.strength}</small><strong>{t.strengthValue}</strong></p></div><div><span className="focus"><Target/></span><p><small>{t.improve}</small><strong>{t.improveValue}</strong></p></div></div></div><div className="parent-copy"><span className="kicker">{t.parentEyebrow}</span><h2>{t.parentTitle}</h2><p>{t.parentText}</p><div className="parent-points">{t.metrics.map((m,i)=><div key={m}><span>{i===0?<BarChart3/>:i===1?<Target/>:<Clock3/>}</span><p><strong>{m}</strong><small>{i===0?(rtl?"تابع الإنجازات لحظة بلحظة.":"Suivez les notions maîtrisées au fil du temps."):i===1?(rtl?"اعرف أين يحتاج طفلك إلى المساعدة.":"Repérez rapidement les points à renforcer."):(rtl?"ابنِ عادة تعلم منتظمة.":"Encouragez une routine régulière et sereine.")}</small></p></div>)}</div></div></div></section>

      <section className="section use-cases"><div className="container"><div className="section-heading centered"><span>{rtl?"في كل لحظة دراسية":"Pour chaque moment d'apprentissage"}</span><h2>{rtl?"تعليم معكم طوال الأسبوع.":"TA3LIM accompagne toute la semaine."}</h2><p>{rtl?"ليس فقط عند الفروض. اختاروا المسار المناسب حسب حاجة الطفل اليوم.":"Pas seulement avant un contrôle. Choisissez le parcours adapté au besoin du jour."}</p></div><div className="case-grid">{[
        [<Clock3/>,rtl?"بعد المدرسة":"Après l'école",rtl?"10 دقائق لمراجعة درس اليوم وتثبيت ما تم فهمه في القسم.":"10 minutes pour revoir la notion du jour et consolider ce qui a été vu en classe.","10 min"],
        [<HelpCircle/>,rtl?"عند التعثر":"Quand ça bloque",rtl?"شرح آخر وتلميحات وتمارين متدرجة لاستعادة الثقة.":"Une autre explication, des indices et des exercices progressifs pour reprendre confiance.",rtl?"حسب الإيقاع":"À son rythme"],
        [<FileText/>,rtl?"قبل التقييم":"Avant une évaluation",rtl?"ملخص واضح وتمارين مركزة وورقة عمل قابلة للطباعة.":"Un résumé clair, des exercices ciblés et une fiche à imprimer.",rtl?"مراجعة":"Révision"],
        [<Trophy/>,rtl?"للتقدم أكثر":"Pour aller plus loin",rtl?"تحديات اختيارية للطفل الذي يريد اكتشاف مسائل جديدة.":"Des défis optionnels pour l'enfant qui souhaite explorer de nouveaux problèmes.",rtl?"تحدي":"Défi"],
      ].map(item=><article key={String(item[1])}><div>{item[0]}</div><span>{item[3]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></div></section>

      <section className="section safe"><div className="container"><h2>{t.trustTitle}</h2><div className="safe-grid">{t.trust.map((item,i)=><article key={item[0]}><span>{i===0?<Users/>:i===1?<ShieldCheck/>:<Languages/>}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

      <section className="section quality"><div className="container quality-grid"><div className="quality-copy"><span className="kicker">{rtl?"محتوى نثق به":"Un contenu construit avec méthode"}</span><h2>{rtl?"من المنهاج إلى شاشة طفلك.":"Du programme officiel à l'écran de votre enfant."}</h2><p>{rtl?"كل درس يمر بمراحل واضحة حتى يكون مفيداً وسهلاً ومناسباً للسن، وليس مجرد فيديو جميل.":"Chaque leçon suit un processus clair pour être utile, compréhensible et adaptée à l'âge — pas seulement jolie à regarder."}</p><a className="inline-link" href="#inscription">{rtl?"انضم إلى العائلات التجريبية":"Rejoindre les familles pilotes"}<ArrowRight/></a></div><div className="quality-steps">{[
        ["01",rtl?"نحدد الهدف من المنهاج":"Nous partons du programme",rtl?"نحوّل كل كفاية إلى هدف تعلّم واضح وقابل للقياس.":"Chaque compétence devient un objectif d'apprentissage clair."],
        ["02",rtl?"نبني الشرح والتدريب":"Nous concevons la leçon",rtl?"شرح قصير، مثال، تمارين متدرجة وملخص للعمل المستقل.":"Explication courte, exemple, pratique progressive et synthèse."],
        ["03",rtl?"نراجع ونجرب":"Nous vérifions et testons",rtl?"تُراجع اللغة والحساب وتجربة الطفل قبل نشر المحتوى.":"Langue, calcul et expérience enfant sont vérifiés avant publication."],
      ].map(x=><div key={x[0]}><b>{x[0]}</b><span><strong>{x[1]}</strong><small>{x[2]}</small></span></div>)}</div></div></section>

      <section className="pilot"><div className="container pilot-box"><div><span className="pilot-label"><Sparkles/>{rtl?"المرحلة التجريبية":"Programme pilote"}</span><h2>{rtl?"ساعدنا في بناء تعليم مع أول 10 عائلات.":"Construisons TA3LIM avec les 10 premières familles."}</h2><p>{rtl?"وصول مجاني خلال التجربة، متابعة مباشرة مع الفريق وتأثير حقيقي على المحتوى والمنتج.":"Accès gratuit pendant le pilote, échanges directs avec l'équipe et influence réelle sur les contenus et le produit."}</p><a href="mailto:bonjour@ta3lim.ma" className="button light">{rtl?"أطلب الانضمام":"Demander une place"}<ArrowRight/></a></div><div className="pilot-list">{[rtl?"حتى 3 أطفال":"Jusqu'à 3 enfants",rtl?"رياضيات المستوى 1–3":"Maths, niveaux 1 à 3",rtl?"العربية والفرنسية":"Arabe et français",rtl?"بدون التزام":"Sans engagement"].map(x=><span key={x}><Check/>{x}</span>)}</div></div></section>

      <section className="section faq"><div className="container faq-grid"><div className="faq-intro"><span className="kicker">{rtl?"أسئلة العائلات":"Questions des familles"}</span><h2>{rtl?"كل ما تريد معرفته قبل البدء.":"Tout ce qu'il faut savoir avant de commencer."}</h2><p>{rtl?"نسخة تجريبية بسيطة وشفافة، مصممة لنتعلم مع أولى العائلات ونطوّر المنتج معها.":"Une première version simple et transparente, conçue pour apprendre avec les premières familles et améliorer le produit avec elles."}</p><a href="mailto:bonjour@ta3lim.ma" className="inline-link">{rtl?"لدي سؤال آخر":"Poser une autre question"}<ArrowRight/></a></div><div className="faq-list">{[
        [rtl?"لمن صُمّمت تعليم؟":"À qui s'adresse TA3LIM ?",rtl?"نبدأ بتلاميذ الابتدائي من المستوى الأول إلى الثالث، مع تركيز أول على الرياضيات. ستضاف مستويات ومواد أخرى تدريجياً.":"Nous commençons avec les enfants du primaire, de la 1re à la 3e année, d'abord en mathématiques. D'autres niveaux et matières seront ajoutés progressivement."],
        [rtl?"هل المحتوى مطابق للمنهاج المغربي؟":"Le contenu suit-il le programme marocain ?",rtl?"نعم، تُنظم الدروس حسب المستوى والوحدة والموضوع وفق المنهاج المغربي. يراجع المحتوى التربوي قبل نشره.":"Oui. Les contenus sont organisés par niveau, chapitre et notion selon le programme marocain, puis relus avant publication."],
        [rtl?"ما اللغات المتاحة؟":"Quelles langues sont disponibles ?",rtl?"الواجهة والمحتوى متاحان بالعربية والفرنسية. يمكن للأسرة اختيار لغة كل طفل، مع دعم كامل للكتابة من اليمين إلى اليسار.":"L'interface et les contenus sont prévus en arabe et en français. La famille choisit la langue de chaque enfant, avec une prise en charge complète du RTL."],
        [rtl?"هل يحتاج الطفل إلى الدراسة وحده؟":"Mon enfant peut-il apprendre seul ?",rtl?"المسار مصمم ليكون واضحاً ومستقلاً، مع تعليمات صوتية وبصرية وتلميحات. يبقى الوالد على اطلاع من لوحة المتابعة.":"Le parcours est conçu pour être clair et autonome, avec consignes visuelles, explications et indices. Le parent garde une vue simple sur les progrès."],
        [rtl?"هل يمكنني إضافة أكثر من طفل؟":"Puis-je ajouter plusieurs enfants ?",rtl?"نعم، يدير حساب الوالد حتى ثلاثة ملفات أطفال في النسخة الأولى، ولكل طفل مستواه وتقدمه ومكافآته.":"Oui. Un compte parent pourra gérer jusqu'à trois profils dans la première version, chacun avec son niveau, ses progrès et ses récompenses."],
      ].map((item,i)=><details key={String(item[0])} open={i===0}><summary><span>{item[0]}</span><b>+</b></summary><p>{item[1]}</p></details>)}</div></div></section>

      <section className="final" id="inscription"><div className="container final-box"><div className="final-star s1">✦</div><div className="final-star s2">✦</div><div><span className="final-icon"><Star fill="currentColor"/></span><h2>{t.finalTitle}</h2><p>{t.finalText}</p><a className="button light" href="mailto:bonjour@ta3lim.ma">{t.finalCta}<ArrowRight/></a><small><Check/>{t.noCard}</small></div></div></section>

      <footer><div className="container footer-grid"><div><Logo/><p>{t.footer}</p></div><div><strong>{t.product}</strong><a href="#methode">{t.nav[0]}</a><a href="#matieres">{t.nav[1]}</a><a href="#parents">{t.nav[2]}</a><a href="#nouri">{rtl?"نوري، المعلم الذكي":"Nouri, professeur IA"}</a></div><div><strong>{t.company}</strong><a href="#">{rtl?"عن تعليم":"À propos"}</a><a href="#">{rtl?"تواصل معنا":"Nous contacter"}</a><a href="#">{rtl?"المساعدة":"Aide"}</a></div><div><strong>{t.legal}</strong><a href="#">{rtl?"الخصوصية":"Confidentialité"}</a><a href="#">{rtl?"الشروط":"Conditions"}</a></div></div><div className="container footer-bottom"><span>{t.copyright}</span><button className="lang" onClick={() => setLang(rtl ? "fr" : "ar")}><Languages/>{rtl?"Français":"العربية"}</button></div></footer>

      <a className="sticky-tutor" href="#nouri" aria-label={rtl?"اسأل نوري، المعلم الذكي":"Découvrir Nouri, le professeur IA"}><span className="sticky-bubble"><b>{rtl?"مرحباً! أنا نوري":"Besoin d'un indice ?"}</b><small>{rtl?"أنا هنا للمساعدة":"Nouri reste avec vous"}</small></span><span className="sticky-robot"><Image src="/ta3lim-ai-teacher-v3.png" alt="" width={1024} height={1536}/><i><MessageCircle/></i></span></a>
    </main>
  );
}
