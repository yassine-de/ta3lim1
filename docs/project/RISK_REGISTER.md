# Risiko-Register

Skala: Wahrscheinlichkeit (W) und Auswirkung (A) von 1–5. Score = W × A.

| ID | Risiko | W | A | Score | Gegenmaßnahme | Owner | Status |
|---|---|---:|---:|---:|---|---|---|
| R-01 | Umfang „wie Sofatutor“ überfordert Zeit/Budget | 5 | 5 | 25 | Phasen, harte Gates, MVP-Scope-Regel | Product Lead | offen |
| R-02 | Lehrplanquelle oder -interpretation falsch | 3 | 5 | 15 | offizielle Quelle, Fachreview, Versionierung | Pädagogik | offen |
| R-03 | Content-Produktion langsamer als geplant | 4 | 5 | 20 | Referenzlektion, Durchsatz messen, Vorlagen/Pool | Content Lead | offen |
| R-04 | Arabische/französische Fachsprache inkonsistent | 3 | 4 | 12 | Glossar, getrennte Sprachreviews | Redaktion | offen |
| R-05 | CNDP-/Auslandstransfer nicht rechtzeitig geklärt | 3 | 5 | 15 | Rechtsberatung früh, Datenflusskarte, Anbieterprüfung | Datenschutz | offen |
| R-06 | Kinder- oder Profildaten werden unzureichend geschützt | 2 | 5 | 10 | Privacy by Design, Elternkontrolle, Tests, Minimierung | Tech Lead | offen |
| R-07 | Produkt funktioniert bei schwachem Mobilnetz schlecht | 4 | 4 | 16 | adaptive Medien, Feldtests, Performance-Budgets | Tech Lead | offen |
| R-08 | Pilotfamilien werden nicht ausreichend rekrutiert | 3 | 4 | 12 | Schulen/Communities, Rekrutierung vor Build | Growth | offen |
| R-09 | Kinder verstehen Bedienung oder Aufgaben nicht | 3 | 5 | 15 | frühe Tests, Altersvarianten, Beobachtung | UX/Pädagogik | offen |
| R-10 | KI gibt falsche oder ungeeignete Antworten | 4 | 5 | 20 | kein freier Chat im MVP, RAG/Testsets/Not-Aus | Trust & Safety | offen |
| R-11 | Zahlungsanbieter passt nicht zum Zielsegment | 3 | 4 | 12 | Nutzerforschung, Anbieter-PoC, manuelle Pilotphase | Commercial | offen |
| R-12 | Schlüsselrollen bleiben unbesetzt | 4 | 5 | 20 | Rollen und Vertretung vor Gate 1 besetzen | Sponsor | offen |
| R-13 | Fremde Medien/Lizenzen nicht sauber geklärt | 2 | 5 | 10 | Asset-Register, eigene Produktion, Lizenzreview | Content/Recht | offen |
| R-14 | Zu frühe Gamification erzeugt Druck statt Motivation | 2 | 4 | 8 | positive Regeln, Forschung, Elternfeedback | Product/Pädagogik | offen |
| R-15 | Fehlende Tests/CI verursachen Regressionen | 4 | 4 | 16 | Testpyramide und CI vor MVP-Feature-Ausbau | Tech Lead | offen |

## Eskalationsregel

- Score 15–25: wöchentliche Steuerungsprüfung und aktive Maßnahme
- Score 8–14: zweiwöchentliche Prüfung
- Score 1–7: monatliche Beobachtung
- Datenschutz-, Kinderschutz- und kritische Fachfehler werden unabhängig vom Score sofort eskaliert.

