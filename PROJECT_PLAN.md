# TA3LIM – Gesamtprojektplan

**Version:** 1.0  
**Stand:** 17. November 2026  
**Projektziel:** Eine eigenständige, kindgerechte Lernplattform für Marokko mit funktionaler Tiefe nach dem Vorbild von Sofatutor – angepasst an den marokkanischen Lehrplan, mehrsprachig und für mobile Nutzung optimiert.

## 1. Management Summary

TA3LIM soll Kindern selbstständiges Lernen ermöglichen und Eltern einen verlässlichen Überblick geben. Das Produkt übernimmt bewährte Funktionsprinzipien einer Plattform wie Sofatutor, kopiert aber weder Marke, Texte, Medien, Quellcode noch das visuelle Design.

Das Ziel wird in drei Ausbaustufen erreicht:

1. **Pilot/MVP:** Mathematik, 1.–3. Klasse, Video → Übung → Zusammenfassung/Arbeitsblatt, Elternkonto, bis zu drei Kinderprofile, Fortschritt, Sterne und Admin-CMS.
2. **Produktreife:** Grundschule 1.–6. Klasse, Mathematik, Arabisch und Französisch, Abos und Zahlungen, Lernspiele, Klassenarbeiten, Elternberichte und Nouri als sicherer KI-Lernbegleiter.
3. **Funktionale Vollabdeckung:** Collège und Lycée/Bac, weitere Fächer, Vokabeltrainer, Lehrerhilfe/Fragenbox, Schulzugänge, native Apps und ausgereifte Personalisierung.

**Realistische Dauer:**

- Pilotfähiges MVP: 9–12 Monate
- Marktreifes Grundschulprodukt: 18–24 Monate
- Breite funktionale Abdeckung ähnlich Sofatutor: 36–48 Monate

Die größte Herausforderung ist nicht die Website, sondern die qualitätsgesicherte Produktion und Pflege der Lerninhalte.

## 2. Leitplanken und Annahmen

### 2.1 Produktleitplanken

- Lehrplanstruktur: Land → Lehrplanversion → Schulstufe → Klasse → Fach → Kapitel → Thema.
- Pro Thema: Lernziel, kurzes Video, interaktive Übungen, Zusammenfassung und optional Arbeitsblatt.
- Eltern bezahlen und verwalten die Familie; Kinder lernen in getrennten Profilen.
- Arabisch und Französisch ab dem ersten Release; RTL-Unterstützung ist Pflicht.
- Darija wird als optionale Erklärungssprache konzipiert, nicht als Ersatz für die offizielle Unterrichtssprache.
- Mobile-first und für langsamere Verbindungen optimiert.
- Eigene Inhalte, eigenes Design, eigene Figuren und eigene Marke.
- Kinderschutz, Datenschutz und pädagogische Qualität haben Vorrang vor Wachstum.

### 2.2 Rechtliche Abgrenzung

TA3LIM darf Funktionsprinzipien übernehmen, aber keine geschützten Inhalte oder verwechslungsfähige Gestaltung kopieren. Vor Veröffentlichung erfolgen Markenrecherche, Lizenzprüfung aller Assets, Prüfung der Nutzungsbedingungen verwendeter Dienste und rechtliche Abnahme.

### 2.3 Ausgangslage

Vorhanden:

- Landingpage als Next.js-Prototyp
- Grundkonzept, Zielgruppe und erster Datenbankentwurf
- visuelle Identität und KI-Lehrer-Figur Nouri
- erste Produktannahmen zu Sprachen, Familienkonten und Lernablauf

Noch nicht vorhanden:

- validierter Produktumfang und belastbare Nutzerforschung
- strukturierte und fachlich freigegebene Lehrplandaten
- Authentifizierung, Datenbank, CMS und Lernanwendung
- produktionsreife Lerninhalte
- Datenschutz-, Sicherheits- und Betriebsprozesse
- Abrechnung, Support und Go-to-Market-System

## 3. Referenzumfang: Was „wie Sofatutor“ funktional bedeutet

Die aktuelle Sofatutor-Referenz umfasst unter anderem Lernvideos, interaktive Übungen, Arbeitsblätter, Übungsklassenarbeiten, Lernspiele, Vokabeltraining, mehrere Geschwisterprofile, Abonnements sowie individuelle Hilfe durch Lehrkräfte. TA3LIM bildet diese Funktionsfamilien schrittweise und mit eigenem Produktdesign ab.

| Funktionsbereich | Pilot/MVP | Grundschulprodukt | Vollausbau |
|---|---:|---:|---:|
| Lehrplan-Navigation | Ja | Ja | Ja |
| Lernvideos | Mathe 1–3 | Mathe/Arabisch/Französisch 1–6 | alle Schulstufen/Fächer |
| Interaktive Übungen | 3–5 Typen | 8–12 Typen | adaptiv und fachabhängig |
| Lösungen und Erklärfeedback | Ja | Ja | personalisiert |
| Arbeitsblätter/PDF | Kerninhalte | vollständig | inkl. Generator |
| Übungstests/Klassenarbeiten | Einfach | Ja | Prüfungsmodus/Bac |
| Belohnungen/Lernspiel | Sterne/Streaks | Missionen und Welten | umfangreiche Lernspiele |
| Eltern-Dashboard | Basis | Berichte/Empfehlungen | Prognosen und Ziele |
| Geschwisterprofile | bis zu 3 | Ja | Ja |
| Vokabeltrainer | Nein | Französisch/Arabisch | weitere Sprachen |
| Nouri KI-Lehrer | begrenzter Beta-Modus | lehrplangebunden | multimodal/adaptiv |
| Lehrerhilfe/Fragenbox | Nein | Pilot | Live-Chat + SLA |
| Abos/Zahlungen | manuell/kostenlos | Ja | mehrere Pakete/B2B |
| Schulen/Lehrkräfte | Nein | Pilot | Klassen, Aufgaben, Berichte |
| Native Apps | PWA | optional | iOS/Android |

## 4. Erfolgskriterien

### 4.1 Pilot-KPIs

- mindestens 30 aktive Familien und 50 Kinder im kontrollierten Pilot
- mindestens 60 % der gestarteten Themen werden abgeschlossen
- mindestens 2 Lernsitzungen pro aktivem Kind und Woche
- mindestens 70 % der Eltern verstehen den Fortschrittsbericht ohne Erklärung
- mindestens 80 % der Kinder können Kernaufgaben ohne Hilfe eines Erwachsenen bedienen
- fachliche Fehlerquote in veröffentlichten Inhalten unter 1 %; kritische Fehler 0
- Absturzfreie Sitzungen über 99,5 %
- Ladezeit der wichtigsten Lernansichten unter 3 Sekunden bei definiertem Mobilnetz-Testprofil

### 4.2 Produkt-KPIs

- Aktivierung: Elternkonto → erstes Kinderprofil → erstes abgeschlossenes Thema
- Retention: D7, D30 und monatlich aktive Familien
- Lernwirkung: Vorher-/Nachher-Aufgaben pro Kompetenz
- Engagement: abgeschlossene Themen, Übungsquote, aktive Lerntage
- Qualität: gemeldete Inhaltsfehler, Supportfälle, Abbruchstellen
- Geschäft: Testphase-zu-Abo, Kündigung, Zahlungsausfälle, Umsatz pro Familie
- Sicherheit: Datenschutzvorfälle, Moderationsfälle, KI-Eskalationen

## 5. Governance und Entscheidungsstruktur

### 5.1 Rollen

- **Sponsor/Geschäftsführung:** Budget, Strategie, Partnerschaften, finale Freigaben
- **Senior Projektleitung/Product Lead:** Roadmap, Scope, Risiken, Abnahmen und Stakeholder
- **Pädagogische Leitung:** Lehrplan, Didaktik, Inhaltsstandards und fachliche Freigabe
- **Tech Lead:** Architektur, Sicherheit, Entwicklungsqualität und Betrieb
- **UX/UI Lead:** Forschung, Designsystem, Barrierefreiheit und Usability
- **Content Lead:** Produktionspipeline, Redaktion, Übersetzung und Medienqualität
- **Growth/Commercial Lead:** Pricing, Vertrieb, Pilotgewinnung und Marketing
- **Datenschutz/Recht:** CNDP, Verträge, Einwilligungen, Minderjährigenschutz und Lizenzen

### 5.2 Regeltermine

- tägliches 15-Minuten-Team-Stand-up je Umsetzungsteam
- wöchentlicher Produkt-/Technik-Review
- zweiwöchentliche Sprint-Abnahme mit Demo
- monatlicher Steering-Ausschuss zu Budget, Scope, Risiken und KPIs
- quartalsweise Roadmap- und Portfolio-Überprüfung

### 5.3 Entscheidungs-Gates

Kein Phasenwechsel ohne dokumentierte Abnahme:

1. Problem-/Marktvalidierung
2. Lehrplan- und MVP-Freigabe
3. Architektur-/Datenschutz-Freigabe
4. Alpha-Freigabe
5. Pilot-Freigabe
6. Zahlungs-/Launch-Freigabe
7. Skalierungsfreigabe

## 6. Phasenplan

## Phase 0 – Projektaufsetzung und Validierung (Wochen 1–4)

### Ziele

- Problem, Zielgruppe, Positionierung und Geschäftsmodell validieren
- Umfang, Budget, Team und Entscheidungswege verbindlich festlegen
- rechtliche und pädagogische Risiken früh klären

### Arbeitspakete

- 15–20 Elterninterviews in unterschiedlichen Regionen und Einkommensgruppen
- 8–12 Interviews mit Lehrkräften und Schulleitungen
- 5–8 moderierte Tests der bestehenden Landingpage mit Eltern und Kindern
- Wettbewerbsanalyse: lokale Angebote, YouTube-Nutzung, Nachhilfe, internationale Plattformen
- Preisbereitschaft und bevorzugte Zahlungswege untersuchen
- Produktvision, Zielgruppen-Personas und Jobs-to-be-Done dokumentieren
- Pilotregion, Pilotschulen und Rekrutierungskanal auswählen
- Marken-, Domain- und Namensprüfung für TA3LIM
- Projektbudget, Teamplan, Risiko-Register und Kommunikationsplan freigeben

### Ergebnisse/Gate 1

- Product Brief und Business Case
- validierte Personas und Kernprobleme
- priorisierte MVP-Liste
- freigegebene Roadmap und Budgetrahmen
- Go/No-Go-Entscheidung

## Phase 1 – Lehrplan, Didaktik und Inhaltsarchitektur (Wochen 3–10)

### Ziele

- offizielle Lehrplangrundlage sichern
- vollständige Mathe-Struktur für Klasse 1–3 erstellen
- wiederholbare Produktions- und Qualitätssysteme definieren

### Arbeitspakete

- offizielle Dokumente des marokkanischen Bildungsministeriums beschaffen und versionieren
- Unterrichtssprache und regionale/Schulform-Unterschiede mit Fachleuten prüfen
- Kompetenzen und Lernziele extrahieren
- Struktur Klasse → Fach → Kapitel → Thema → Lernziel modellieren
- arabische und französische Fachterminologie redaktionell festlegen
- Abhängigkeiten/Vorkenntnisse zwischen Themen erfassen
- Content-Blueprint für Video, Übung, Feedback, Zusammenfassung und Arbeitsblatt definieren
- Alters- und Klassenstufenrichtlinien erstellen
- pädagogischen Reviewprozess mit Vier-Augen-Prinzip aufsetzen
- Musterlektion für drei unterschiedliche Themen produzieren und testen

### Ergebnisse/Gate 2

- freigegebener Curriculum-Datensatz Mathe 1–3
- Glossar Arabisch/Französisch/Darija-Regeln
- Content Style Guide und Vorlagen
- drei vollständig getestete Referenzlektionen
- Aufwand pro Lektion und Produktionskapazität bekannt

## Phase 2 – Produktdesign und technische Grundlage (Wochen 5–14)

### Produkt-/UX-Arbeit

- Informationsarchitektur für Eltern, Kinder und Admins
- End-to-End-Flows: Registrierung, Kind anlegen, Klasse wählen, Thema lernen, Fortschritt ansehen
- Designsystem mit RTL, Kontrast, Typografie, Icons und responsiven Komponenten
- Kinder-UX nach Altersgruppe: 1.–2. Klasse stärker visuell, ab Klasse 3 dichter
- Prototypen für Video, Übungen, Ergebnisse, Belohnungen und Eltern-Dashboard
- Usabilitytests auf günstigen Android-Geräten und kleinen Displays
- Barrierefreiheitsziel WCAG 2.2 AA, soweit für Produkt und Zielmarkt anwendbar

### Technische Grundlage

- Monorepo/Repository, Branching, Code Review und Releaseprozess
- Next.js-Web-App/PWA als erstes Frontend
- PostgreSQL/Supabase oder vergleichbare verwaltete Plattform evaluieren und entscheiden
- getrennte Umgebungen: lokal, Entwicklung, Staging, Produktion
- Infrastructure as Code und Secret Management
- Monitoring, Fehlertracking, strukturierte Logs und Audit-Logs
- automatisierte Backups und Wiederherstellungstest
- Feature Flags und gestaffelte Releases
- Authentifizierung zunächst über E-Mail/Telefon; SMS/WhatsApp erst nach Anbieter- und Kostenprüfung
- rollenbasierte Zugriffe für Eltern, Kinder, Redaktion, Prüfer, Support und Admin

### Datenschutz/Sicherheit

- Dateninventar und Verarbeitungsverzeichnis
- Rechtsgrundlagen, Einwilligung der Eltern und kindgerechte Hinweise
- CNDP-Erklärung/Autorisierung und Prüfung von Auslandstransfers
- Auftragsverarbeitungsverträge mit Hosting-, Video-, Analyse-, Kommunikations- und KI-Anbietern
- Datenminimierung, Löschfristen, Auskunft, Export und Kontolöschung
- Threat Model für Kinderkonten, Uploads, Chat, Zahlungen und Admin-CMS
- Verschlüsselung in Transit und at rest; private Medienzugriffe über kurzlebige URLs

### Ergebnisse/Gate 3

- getesteter interaktiver Prototyp
- freigegebene Systemarchitektur und Datenmodell v2
- CI/CD bis Staging
- Datenschutz- und Sicherheitskonzept
- belastbare technische Aufwandsschätzung

## Phase 3 – MVP-Entwicklung (Wochen 11–28)

Die Umsetzung erfolgt in zweiwöchigen Sprints. Produkt, Technik und Content laufen parallel.

### Epic A – Familienkonto und Profile

- Elternregistrierung und Verifikation
- Anmeldung, Passwort/Code-Wiederherstellung und Sitzungsverwaltung
- bis zu drei Kinderprofile
- Avatar-Auswahl; eigenes Foto erst nach Datenschutzfreigabe
- Klassenstufe, bevorzugte Sprache und Lernpräferenzen pro Kind
- Eltern-PIN für sensible Bereiche und Profilwechsel
- Einwilligungen, Benachrichtigungseinstellungen, Export und Löschung

### Epic B – Curriculum und Entdeckung

- Navigation nach Klasse, Fach, Kapitel und Thema
- Suche und Filter
- Themenstatus: neu, begonnen, abgeschlossen, wiederholen
- Empfehlungen: weiterlernen, wiederholen, nächste Voraussetzung
- zweisprachige Inhalte und vollständiges RTL-Verhalten

### Epic C – Lernplayer

- adaptiver Videoplayer mit Untertiteln, Geschwindigkeit und Fortsetzen
- niedrige/automatische Videoqualität und Audio-only-Fallback prüfen
- strukturierter Ablauf: Einstieg → Video → Verständnisfrage → Übung → Abschluss
- Lesezeichen und Verlauf
- kindgerechte Fehler- und Offlinezustände
- Ereignis-Tracking ohne unnötige personenbezogene Daten

### Epic D – Übungsengine

MVP-Formate:

- Single-/Multiple-Choice
- Zahl- oder Kurztexteingabe
- Zuordnung
- Sortieren/Reihenfolge
- später Drag-and-Drop, Markieren, Lückentext, Audio, Geometrie und Freihand

Engine-Funktionen:

- zufällige Varianten und Antwortreihenfolge
- unmittelbares, erklärendes Feedback
- Hinweise in Stufen, ohne die Lösung sofort zu verraten
- mehrere Versuche, Teilerfolg und Musterlösung
- Tastatur-, Touch- und RTL-Unterstützung
- Autorenvorschau und automatisierte Validierung von Aufgabendaten

### Epic E – Fortschritt und Motivation

- Fortschritt pro Content-Item, Thema, Kapitel und Kind
- Sterne, Punkte, Streaks und kleine Abzeichen
- klare Regeln gegen manipulative oder suchtähnliche Mechaniken
- Wiederholungsempfehlungen auf Basis von Fehlern und Zeit
- kindgerechte Wochenziele
- Ereignismodell für spätere Lernwirkungsanalyse

### Epic F – Eltern-Dashboard

- heutige und wöchentliche Lernaktivität
- abgeschlossene Themen und Lernzeit
- Quote richtiger Antworten mit verständlicher Einordnung
- Stärken und Themen zum Wiederholen
- Aktivität pro Kinderprofil
- Empfehlungen für Eltern ohne Leistungsdruck
- später E-Mail-/WhatsApp-Wochenbericht nach ausdrücklicher Einwilligung

### Epic G – Content-Management-System

- Rollen: Autor, Übersetzer, Fachprüfer, Chefredaktion, Publisher
- Curriculum, Themen und Lernziele verwalten
- Versionierung und Statusworkflow: Entwurf → Review → Übersetzung → QA → veröffentlicht
- Videos, Transkripte, Untertitel, Übungen und PDFs verwalten
- Vorschau in Arabisch/Französisch und auf Mobil/Desktop
- Terminierung, Rücknahme, Änderungsverlauf und Audit-Log
- Import/Export als validiertes JSON/CSV
- Melden und Nachverfolgen von Inhaltsfehlern

### Epic H – Admin und Support

- Familien- und Abostatus einsehen, ohne Lerninhalte unnötig offenzulegen
- Kontosperre, Profilwiederherstellung und Supportnotizen
- Rollenverwaltung und Zwei-Faktor-Authentifizierung für privilegierte Konten
- Inhaltsmeldungen und technische Diagnosedaten
- Support-Ticket-Prozess und Wissensdatenbank

### Technische Definition of Done je Story

- Akzeptanzkriterien erfüllt und von Product Owner abgenommen
- Code Review, Typprüfung, Lint und automatisierte Tests erfolgreich
- Arabisch, Französisch, RTL und kleine Mobilansicht geprüft
- Tracking, Fehlerzustände und Berechtigungen berücksichtigt
- Barrierefreiheitsprüfung für neue Komponenten
- Sicherheits- und Datenschutzcheck bei personenbezogenen Daten
- Dokumentation und Release Notes aktualisiert

### Ergebnisse/Gate 4

- interne Alpha mit vollständigem Kern-Lernablauf
- 20–30 veröffentlichungsfähige Themen
- produktionsnahes CMS
- automatisierte Kern- und Berechtigungstests
- keine offenen kritischen Sicherheits- oder Inhaltsfehler

## Phase 4 – Content-Produktion und interne Alpha (Wochen 15–34)

### Produktionspipeline je Thema

1. Lernziel und Curriculum-Mapping
2. didaktisches Konzept und Storyboard
3. Fachreview
4. arabisches und französisches Skript
5. Sprach-/Terminologie-Review
6. Motion-Design/Animation
7. Sprecher- oder freigegebene KI-Stimme
8. Untertitel und Transkript
9. Übungsset mit progressiver Schwierigkeit
10. Zusammenfassung und Arbeitsblatt mit Lösung
11. technische QA
12. Fach- und Sprachabnahme
13. Test mit Kindern der Zielklasse
14. Veröffentlichung und spätere Fehler-/Wirkungsanalyse

### Inhaltsstandard pro MVP-Thema

- 1 Video mit etwa 4–8 Minuten
- 8–15 interaktive Aufgaben in mindestens drei Schwierigkeitsstufen
- mindestens zwei Hinweise für typische Fehler
- 1 Zusammenfassung
- 1 Arbeitsblatt mit Lösung, sofern didaktisch sinnvoll
- Untertitel/Transkript
- Lernziel, Voraussetzungen, Tags und geschätzte Dauer
- arabische und französische Fassung; Darija-Einsatz nach definierter Regel

### Produktionsplanung

- zuerst 20–30 Themen für geschlossene Alpha
- danach 60–100 Themen für den Pilot, abhängig von Lehrplanzerlegung
- Kapazität erst nach drei Referenzlektionen verbindlich planen
- Content-Backlog mindestens acht Wochen vor Entwicklungsbedarf pflegen
- alle Medien- und Musiklizenzen zentral dokumentieren

### Ergebnisse

- vollständige Pilotbibliothek
- Inhaltsfehler- und Änderungsprozess
- messbare Produktionskosten und Durchlaufzeiten
- Backup-Pool aus Autoren, Übersetzern und Fachprüfern

## Phase 5 – Qualität, Sicherheit und Pilot (Wochen 29–40)

### Testprogramm

- Unit-, Integrations- und End-to-End-Tests
- Berechtigungs- und Mandantentrennungstests
- Geräte-/Browsermatrix mit Fokus auf Android und mobile Webviews
- Tests unter langsamen und instabilen Netzbedingungen
- RTL-, Übersetzungs- und Layout-Pseudolokalisierung
- Video-, Untertitel-, PDF- und Übungsvalidierung
- Lasttest für Pilot plus Sicherheitsreserve
- externe Sicherheitsprüfung/Penetrationstest vor öffentlichem Launch
- Backup-Wiederherstellung und Incident-Response-Übung
- Barrierefreiheits- und Usabilitytest

### Pilotablauf

- 10 Familien für Concierge-Alpha, anschließend 30–50 Familien für Beta
- Onboarding mit klarer Einwilligung und Supportkanal
- zwei bis vier Wochen Beobachtungszeit je Kohorte
- qualitative Interviews und Produktanalytics verbinden
- wöchentliche Triage von Produkt-, Content- und Supportproblemen
- keine automatische Abrechnung im ersten geschlossenen Pilot

### Ergebnisse/Gate 5

- Pilotbericht mit KPI-Ergebnis und priorisiertem Maßnahmenplan
- nachweisbare Lern- und Bedienbarkeitssignale
- keine kritischen Datenschutz-, Sicherheits- oder Kinderschutzprobleme
- Go/No-Go für bezahlte Beta

## Phase 6 – Bezahlen, Abos und öffentlicher Launch (Wochen 35–48)

### Kommerzielle Funktionen

- Preisforschung und Paketdefinition für Marokko
- kostenloser Test oder begrenzter Gratiszugang mit transparenten Regeln
- Pläne, Laufzeiten, Gutscheine und Familienlimits
- Zahlungsanbieter-Evaluierung für Karten und lokale Verfahren
- serverseitige Webhooks, Idempotenz und Zahlungsabgleich
- Rechnungen/Belege und Steuern nach lokaler Beratung
- Upgrade, Downgrade, Pausieren, Kündigung, Erstattung und Mahnprozess
- klare Anzeige von Preis, Laufzeit, Verlängerung und Kündigung
- Zugriffsentitlements getrennt vom Zahlungsstatus modellieren

### Launch Readiness

- AGB, Datenschutz, Cookie-/Tracking-Konzept, Impressum und Supportbedingungen
- CNDP-Prozess abgeschlossen oder rechtlich freigegebener Status
- Support-SLAs und Eskalationsplan
- Statusseite, Monitoring, Rufbereitschaft und Incident-Kommunikation
- SEO, App-Analytics, Kampagnenmessung und Consent Management
- Launchkampagne, Eltern-Onboarding und Empfehlungsprogramm
- Partnerschaften mit Schulen/Lehrkräften und Elterncommunities

### Ergebnisse/Gate 6

- zahlungsfähiges, rechtlich freigegebenes Produkt
- operative Dashboards für Technik, Inhalt, Support und Geschäft
- Launch-Runbook und Rollback-Plan
- kontrollierter Rollout in Kohorten statt Big-Bang

## Phase 7 – Grundschulausbau (Monate 12–24)

- Mathematik Klasse 4–6
- Arabisch und Französisch Klasse 1–6
- zusätzliche Übungstypen und Klassenarbeiten
- Vokabeltrainer
- größere Belohnungswelt/Lernspiel
- lernzielbasierte Wiederholung und Diagnostik
- ausgereifte Elternberichte
- kontrollierter Nouri-Rollout
- PWA-Offlinefunktionen für ausgewählte Inhalte
- Lehrer-/Schulpilot mit Klassen, Aufgaben und Fortschrittsansicht

## Phase 8 – Funktionale Vollabdeckung (Monate 24–48)

- Collège und Lycée/Bac
- Naturwissenschaften, weitere Sprachen und gesellschaftliche Fächer
- Prüfungsvorbereitung und umfangreiche Übungstests
- Lehrer-Fragenbox und anschließend Live-Hausaufgabenhilfe
- B2B-Schullizenzen, Klassenverwaltung und Aufgabenverteilung
- native iOS-/Android-Apps, falls Nutzungsdaten den Bedarf bestätigen
- weitere Länder über getrennte Curriculum-Datensätze

## 7. Nouri – Plan für einen sicheren KI-Lernbegleiter

Nouri wird nicht als allgemeiner Chatbot gestartet, sondern als eng begrenzte Lernfunktion.

### Stufe 1: Regelbasierte Hilfe

- vorformulierte Hinweise je Aufgabe
- alternative Beispiele aus freigegebenem Content
- keine freie Texteingabe durch Kinder

### Stufe 2: Retrieval-gestützte Beta

- Antworten ausschließlich aus freigegebenen TA3LIM-Inhalten
- Kontext: Klasse, Fach, Thema und aktuelle Aufgabe
- keine direkte Lösung beim ersten Versuch
- Eingabe-/Ausgabefilter und klarer Themenbereich
- Eltern-/Admin-Abschaltung und vollständige Auditierbarkeit
- keine Nutzung von Kinderinhalten zum Modelltraining

### Stufe 3: Multimodale Hilfe

- Foto einer Aufgabe nur nach Datenschutz- und Sicherheitsfreigabe
- automatische Entfernung unnötiger Metadaten und kurze Aufbewahrung
- Eskalation zu menschlicher Hilfe bei Unsicherheit
- laufende pädagogische, Bias- und Sicherheitsevaluation

### KI-Abnahmekriterien

- definierte Testsets pro Fach und Klassenstufe
- fachliche Korrektheit, Altersangemessenheit und Sprachqualität gemessen
- harte Ablehnung gefährlicher, persönlicher oder fachfremder Anfragen
- Unsicherheit wird transparent gemacht
- Not-Aus, Rate Limits, Kostenlimits und Monitoring vorhanden

## 8. Lehrerhilfe und Fragenbox

Diese Funktion ist personalintensiv und wird erst nach Produkt-Markt-Fit eingeführt.

### Vorbereitung

- Nachfrage und Zahlungsbereitschaft messen
- Fächer, Betriebszeiten und Antwort-SLA definieren
- Lehrkräfte prüfen, schulen und vertraglich binden
- Moderations-, Kinderschutz- und Eskalationsrichtlinien
- sichere Chatplattform ohne Austausch privater Kontaktdaten
- Bild-Upload mit Malwareprüfung und Datenschutzregeln
- Qualitätsreviews, Kapazitätsplanung und Vertretung

### Einführung

1. asynchrone Fragenbox mit Antwort innerhalb eines definierten Zeitfensters
2. begrenzte Live-Sprechzeiten für Mathematik
3. Ausbau nach Auslastung und Qualitätskennzahlen

## 9. Zielarchitektur

### 9.1 Empfohlener Start-Stack

- Frontend: Next.js + TypeScript als responsive PWA
- Backend/API: zunächst Next.js-Serverfunktionen oder klar getrennte API-Schicht
- Datenbank: PostgreSQL
- Auth: verwalteter Anbieter mit Telefon/E-Mail, MFA für Admins
- Objekt-/Dateispeicher: privat, signierte URLs
- Video: adaptives Streaming mit mehreren Qualitätsstufen und Untertiteln
- Suche: zunächst PostgreSQL, später spezialisierter Suchdienst
- Jobs/Queues: Videoverarbeitung, Berichte, E-Mails und Content-Publishing
- Analytics: datensparsame Produktanalyse mit Consent
- Monitoring: Fehler, Performance, Logs, Uptime und Security Alerts
- CDN/WAF: Schutz und schnelle Medienauslieferung

### 9.2 Architekturprinzipien

- modulare Monolith-Architektur vor Microservices
- Curriculum und Übersetzungen als zentrale Domänen
- Inhalte versioniert und Veröffentlichungen reproduzierbar
- Entitlements getrennt von Zahlungen
- Lernereignisse append-only, aggregierte Fortschrittsansichten ableitbar
- keine geheimen Lösungen oder Adminrechte im Client
- KI-Anbieter über austauschbare Schnittstelle
- externe Anbieter nicht direkt aus der Kinderanwendung ansprechen

### 9.3 Datenmodell v2 – notwendige Ergänzungen

Zusätzlich zum vorhandenen Entwurf:

- curriculum_versions, competencies, learning_objectives, prerequisites
- topic_learning_objectives
- content_versions, content_reviews, publishing_releases
- exercise_variants, hints, solution_explanations
- learning_sessions, learning_events, mastery_scores
- achievements, reward_rules, child_achievements
- family_accounts, parental_consents, notification_preferences
- roles, permissions, audit_logs
- media_assets, subtitles, transcripts, licenses
- product_plans, entitlements, invoices, refunds, payment_events
- support_tickets, content_issues, moderation_cases
- ai_sessions, ai_messages_redacted, ai_safety_events
- experiments und feature_flags

## 10. Nichtfunktionale Anforderungen

### Performance

- Core Web Vitals für zentrale öffentliche und Lernseiten überwachen
- Bilder und Videos responsiv, komprimiert und lazy-loaded
- Lernansichten auch bei schwacher Verbindung sinnvoll nutzbar
- automatische Wiederaufnahme nach Verbindungsabbruch

### Verfügbarkeit und Wiederherstellung

- MVP-Ziel 99,5 %, später mindestens 99,9 %
- definierte RPO/RTO-Werte
- tägliche Backups und regelmäßige Wiederherstellungstests
- Statusseite und Incident-Prozess

### Sicherheit

- OWASP ASVS als Prüfraster
- MFA für Admin/Redaktion
- Least Privilege und regelmäßige Berechtigungsreviews
- Rate Limits, Bot-/Missbrauchsschutz und sichere Uploads
- Dependency-, Secret- und Schwachstellenscans in CI
- jährlicher externer Penetrationstest, vor kritischen Launches zusätzlich

### Datenschutz und Minderjährige

- nur notwendige Daten erheben
- Eltern als Kontoinhaber und Einwilligungsinstanz
- Fotos optional, privat und getrennt geschützt
- keine verhaltensbasierte Werbung für Kinder
- klare Lösch- und Aufbewahrungsfristen
- Anbieter- und Auslandstransferprüfung vor Integration
- Melde- und Reaktionsprozess für Datenschutzvorfälle

### Qualität und Barrierefreiheit

- WCAG-orientierte Komponenten, Tastaturbedienung und Screenreader-Basics
- ausreichender Kontrast und gut lesbare Mindestschriftgrößen
- Untertitel/Transkripte für Videos
- keine Information nur über Farbe vermitteln
- verständliche Sprache für Eltern und altersgerechte Sprache für Kinder

## 11. Team- und Kapazitätsplan

### MVP-Kernteam

- 1 Product Lead/Projektleitung
- 1 Tech Lead/Full-Stack Senior
- 2 Full-Stack Engineers
- 1 Frontend/Design-System Engineer
- 1 UX/UI Designer und Researcher
- 1 QA/Automation Engineer
- 1 DevOps/Security anteilig
- 1 pädagogische Leitung Mathematik
- 2–3 Content-Autoren/Fachlehrkräfte
- 1 arabische Sprachredaktion
- 1 französische Sprachredaktion
- 1 Motion Designer/Video Producer
- Sprecher oder qualitätsgesicherte Voice-Produktion
- Datenschutz/Recht und Finance anteilig
- Support/Community spätestens ab Pilot

### Skalierung für Grundschule

- getrennte Fachredaktionen
- zusätzliche Video-/Motion-Produktion
- Content Operations und Publishing Manager
- Data/Product Analyst
- Growth und Partnerships
- Customer Support
- Trust & Safety/Moderation für KI und Lehrerhilfe

## 12. Grobzeitplan und Meilensteine

| Zeitraum | Meilenstein |
|---|---|
| Monat 1 | Projektauftrag, Nutzerforschung und MVP freigegeben |
| Monat 2 | Curriculum Mathe 1–3 und Referenzlektion freigegeben |
| Monat 3 | Architektur, Datenschutzkonzept und klickbarer Prototyp freigegeben |
| Monat 4–5 | Familienkonto, Curriculum-Navigation, CMS und Lernplayer intern nutzbar |
| Monat 6–7 | Übungsengine, Fortschritt, Eltern-Dashboard und erste 20–30 Themen |
| Monat 8 | interne Alpha und Sicherheitstest |
| Monat 9 | Concierge-Pilot mit 10 Familien |
| Monat 10 | Beta mit 30–50 Familien |
| Monat 11 | Verbesserungen, Payment- und Support-Readiness |
| Monat 12 | kontrollierter öffentlicher MVP-Launch |
| Monat 13–18 | Klasse 4–6, Fächerausbau, Nouri-Beta, Tests/Klassenarbeiten |
| Monat 19–24 | vollständiges Grundschulprodukt, Vokabeltrainer, Schul-/Lehrerpilot |
| Monat 24–48 | Collège, Lycée/Bac, Lehrerhilfe, weitere Fächer und Apps |

## 13. Kritischer Pfad

1. offizieller Lehrplan und didaktische Freigabe
2. Referenzlektion und belastbare Content-Kapazität
3. Datenmodell, CMS und Übungsengine
4. genügend qualitätsgeprüfte Pilotinhalte
5. Datenschutz/CNDP und Anbieterfreigaben
6. Pilot mit nachgewiesener Bedienbarkeit und Lernwirkung
7. Zahlungs- und Supportprozesse

Eine Verzögerung in der Inhaltsproduktion verschiebt den Launch direkt. Das CMS muss deshalb vor großen Content-Mengen stabil sein.

## 14. Hauptrisiken und Gegenmaßnahmen

| Risiko | Auswirkung | Gegenmaßnahme |
|---|---|---|
| Scope „genau wie Sofatutor“ zu groß | Zeit/Budget laufen aus | stufenweise Funktionsabdeckung, harte Gates |
| fehlende/falsche Lehrplanzuordnung | Vertrauensverlust | offizielle Quellen, Fachreview, Versionierung |
| zu langsame Content-Produktion | Launchverzug | Referenzlektion, Kapazitätsmessung, Vorlagen, Parallelteams |
| schwache Sprachqualität | geringe Akzeptanz | getrennte Fach- und Sprachreviews |
| Datenschutz bei Kindern/Fotos/KI | rechtliches Risiko | Privacy by Design, CNDP, Minimierung, Elternkontrolle |
| schlechte Mobilnetze | Abbruch | adaptive Medien, kleine Assets, Wiederaufnahme, Feldtests |
| KI gibt falsche Antworten | Lern-/Reputationsschaden | enger Scope, RAG, Testsets, Filter, menschliche Eskalation |
| Zahlungsausfälle/ungeeignete Anbieter | Umsatzverlust | Anbieter-PoC, Webhook-/Reconciliation-Tests |
| Gamification erzeugt Druck | pädagogischer Schaden | positive, nicht manipulative Mechaniken, Forschung |
| Abhängigkeit von Einzelpersonen | Betriebsrisiko | Dokumentation, Review, Vertretungs- und Lieferantenpool |

## 15. Budgetstruktur

Vor einer seriösen Zahl muss Phase 0 abgeschlossen sein. Das Budget wird in folgende Kostenblöcke aufgeteilt:

- Produktentwicklung und QA
- UX/Research und Design
- Lehrplanarbeit und pädagogische Redaktion
- Video, Audio, Animation, Übersetzung und Arbeitsblätter
- Hosting, Video-Streaming, Kommunikation, Analytics und KI
- Recht, Datenschutz, CNDP und Sicherheitstests
- Zahlungsgebühren, Support und Betrieb
- Pilotgewinnung, Marketing und Partnerschaften
- Reserve von 15–20 % für Risiken und Rework

Jede Phase erhält ein eigenes Budget-Gate. Content-Kosten werden pro veröffentlichtem Thema und Sprache gemessen.

## 16. Reporting

### Wöchentlich

- Sprintfortschritt und Blocker
- Content-Durchsatz und Review-Stau
- Fehler nach Priorität
- technische Risiken und Entscheidungen

### Monatlich

- Budget Ist/Plan und Forecast
- Meilensteinstatus Rot/Gelb/Grün
- Produkt- und Pilot-KPIs
- Risiko-Register
- Datenschutz-/Sicherheitsstatus
- Scope-Änderungen und Entscheidungen

## 17. Konkreter 30-Tage-Aktionsplan

### Woche 1

- Projektauftrag und Entscheidungsgremium bestätigen
- Product Lead, pädagogische Leitung und Tech Lead benennen
- Nutzerforschungsplan und Interviewleitfäden freigeben
- offiziellen Lehrplan und relevante Versionen beschaffen
- Marken-/Rechtsprüfung anstoßen

### Woche 2

- erste Eltern- und Lehrkräfteinterviews
- Mathe-Lehrplan Klasse 1 strukturieren
- Datenmodell- und Architekturworkshop
- Datenschutz-Dateninventar beginnen
- Referenzthema auswählen

### Woche 3

- Interviews fortsetzen und Muster erkennen
- erstes Storyboard, Skript und Übungsset produzieren
- End-to-End-Prototyp für Eltern- und Kinderfluss
- Zahlungs- und Kommunikationsanbieter shortlistieren
- Pilotfamilien-Rekrutierung vorbereiten

### Woche 4

- Referenzlektion mit Kindern/Eltern testen
- MVP-Scope, KPI-Ziele und Backlog finalisieren
- Team- und Budgetplan bestätigen
- Architektur- und Anbieterentscheidungen protokollieren
- Gate-1-Entscheidung und Sprint 1 starten

## 18. Sofort zu treffende Managemententscheidungen

1. Pilot nur Mathematik 1–3 oder bereits Arabisch/Französisch?
2. primäre Lernsprache je Fach und Rolle von Darija?
3. Startregion und Zielsegment der ersten Familien?
4. kostenloser Pilot, Preisspanne und Zahlungsmodell?
5. eigene Content-Produktion, Partner oder Mischmodell?
6. Mindestmenge an Themen für den Pilot?
7. Hosting-/Datenstandort und Umgang mit Auslandstransfers?
8. Nouri im Pilot nur regelbasiert oder bereits als kontrollierte KI-Beta?
9. Budgetrahmen und fest verfügbares Kernteam?

## 19. Offizielle Referenzen

- Sofatutor Leistungs- und Paketübersicht: https://www.sofatutor.com/preise
- Sofatutor Hausaufgabenhilfe: https://www.sofatutor.com/informationen/hausaufgaben-chat
- Sofatutor AGB/Funktionsabgrenzung: https://www.sofatutor.com/legal/agb
- Marokkanisches Bildungsministerium – offizielle Dokumente: https://www.men.gov.ma/وثائق-رسمية
- CNDP – Gesetzestexte und Datenschutz: https://www.cndp.ma/textes-et-lois/
- CNDP – Meldung von Datenverarbeitungen: https://www.cndp.ma/notifier-un-traitement/

---

**Projektdefinition:** Das Projekt gilt nicht als abgeschlossen, wenn lediglich die Website fertig ist. Abgeschlossen ist die jeweilige Ausbaustufe erst, wenn Produkt, Inhalte, Datenschutz, Sicherheit, Betrieb, Support, Messbarkeit und Geschäftsprozesse gemeinsam die definierten Abnahmekriterien erfüllen.
