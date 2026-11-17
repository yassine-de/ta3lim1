# ADR-001 – Technische Grundlage des MVP

**Status:** vorgeschlagen  
**Datum:** 17. November 2026

## Kontext

TA3LIM benötigt eine mehrsprachige Lernplattform mit Familienkonten, strukturierten Inhalten, Übungen, Fortschritt und späteren Abos. Das Team muss den MVP schnell validieren, ohne eine unnötig komplexe Infrastruktur aufzubauen.

## Entscheidung

1. Responsive Next.js-Web-App/PWA vor nativen Apps.
2. TypeScript über Frontend und Serverlogik.
3. PostgreSQL als System of Record.
4. Modularer Monolith mit klaren Domänengrenzen.
5. Verwaltete Infrastruktur bevorzugt, sofern Datenschutz, Datenstandort, Export und Anbieterwechsel akzeptabel sind.
6. Externe Anbieter werden hinter internen Adaptern gekapselt.
7. Curriculum- und Übungsdaten werden zusätzlich als validierbare Dateien versioniert.

## Begründung

- kürzere Entwicklungs- und Feedbackzyklen
- einheitliches Datenmodell und einfachere Transaktionen
- geringere Betriebs- und Debuggingkomplexität als Microservices
- PWA erreicht die Zielgeräte ohne App-Store-Abhängigkeit
- PostgreSQL passt zu relationalem Curriculum, Familien- und Fortschrittsmodell

## Nicht entschieden

- konkreter Hosting- und Auth-Anbieter
- produktiver Datenstandort
- Videoanbieter
- Messaging-/WhatsApp-Anbieter
- Zahlungsanbieter
- KI-Modell/-Anbieter

Diese Entscheidungen benötigen Kosten-, Datenschutz-, Verfügbarkeits- und Exit-Bewertung.

## Folgen

Positiv:

- schneller MVP-Aufbau
- gute lokale Testbarkeit
- klarer Weg zu späterer Skalierung

Negativ/Risiken:

- disziplinierte Modulgrenzen sind nötig
- PWA-Offlineverhalten muss explizit entwickelt werden
- verwaltete Dienste dürfen keine schwer lösbare Anbieterbindung erzeugen

## Revisionspunkt

Nach dem Beta-Pilot oder sobald ein Modul unabhängig skalieren oder betrieben werden muss.

