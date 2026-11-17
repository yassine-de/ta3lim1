# TA3LIM – Technische Zielarchitektur

**Status:** Arbeitsentwurf für Architecture Gate  
**Prinzip:** modularer Monolith vor Microservices

## 1. Architekturziele

- schneller, kontrollierbarer MVP-Aufbau
- klare Trennung von Eltern-, Kinder-, Redaktions- und Adminrechten
- Arabisch/Französisch und RTL als Kerneigenschaft
- Curriculum und Inhalte versionierbar
- sichere Verarbeitung von Daten Minderjähriger
- bei schwachen Mobilverbindungen nutzbar
- austauschbare Anbieter für Auth, Video, Kommunikation, Zahlung und KI

## 2. Systemkontext

```text
Eltern / Kinder / Redaktion / Support
                 │
          Next.js Web/PWA
                 │
       Application Service Layer
                 │
 ┌───────────────┼────────────────┐
 │ Identity      │ Family         │
 │ Curriculum    │ Content        │
 │ Learning      │ Progress       │
 │ Entitlements  │ Operations     │
 └───────────────┼────────────────┘
                 │
             PostgreSQL
                 │
   Object Storage / Video / Queue
```

## 3. Domänenmodule

### Identity

- Benutzeridentität und externe Auth-ID
- Rollen und privilegierte Zugriffe
- Sitzungen, MFA und Auditierbarkeit

### Family

- Familienkonto
- Eltern-/Betreuer-Mitgliedschaften
- Kinderprofile
- Einwilligungen und Benachrichtigungseinstellungen

### Curriculum

- Land und Lehrplan
- Lehrplanversion
- Schulstufe und Klasse
- Fach, Kapitel, Thema, Lernziel und Voraussetzungen
- mehrsprachige Bezeichnungen

### Content

- Videos, Untertitel, Transkripte und PDFs
- Übungen, Hinweise und Lösungserklärungen
- Autoren-/Review-/Publishing-Workflow
- Asset- und Lizenznachweis

### Learning

- Lernsitzung und Lernplayerzustand
- Übungsversuche
- unmittelbares Feedback
- Abschluss und Wiederholung

### Progress

- Fortschritt pro Kind und Inhalt
- Kompetenzstand
- Sterne, Streaks und Auszeichnungen
- Elternberichte und Empfehlungen

### Entitlements

- Produktpläne und Zugriffsrechte
- Abos und Zahlungsereignisse
- getrennte Entscheidung: Zahlung ≠ Zugriff

### Operations

- Audit-Logs
- Inhaltsfehler und Supportfälle
- Feature Flags
- Datenschutzexport und Löschworkflow

## 4. Request- und Sicherheitsmodell

1. Der Client authentifiziert sich beim gewählten Auth-Anbieter.
2. Der Server validiert die Identität und ermittelt Familienmitgliedschaft/Rolle.
3. Jeder Datenzugriff wird serverseitig auf Familie, Kind und Rolle begrenzt.
4. Der Browser erhält nur die Daten, die für die aktuelle Ansicht notwendig sind.
5. Admin-/Redaktionsaktionen erzeugen Audit-Einträge.
6. Medien werden privat gespeichert und über kurzlebige signierte URLs ausgeliefert.

Kinderprofile sind keine eigenständigen vollberechtigten Benutzerkonten im MVP. Das Elternkonto verwaltet den Zugriff; ein Kinderprofil erhält nur eine eingeschränkte Lernsession.

## 5. Datenhaltung

### PostgreSQL

System of Record für:

- Familien, Profile und Einwilligungen
- Curriculum und Content-Metadaten
- Übungen und Lernfortschritt
- Abos, Entitlements und Audit-Logs

### Objekt-/Medienspeicher

- Original- und Streamingvideos
- Untertitel und Transkripte
- Arbeitsblätter
- optionale Profilbilder erst nach separater Freigabe

### Cache/Queue

Erst einführen, wenn reale Last oder asynchrone Jobs es erfordern:

- Videoverarbeitung
- Berichte und Benachrichtigungen
- Content-Publishing
- KI-Auswertungen

## 6. Deployment-Umgebungen

| Umgebung | Zweck | Daten |
|---|---|---|
| local | Entwicklung | synthetisch |
| development | Integration | synthetisch |
| staging | Release-/Pilotprüfung | anonymisiert oder synthetisch |
| production | reale Nutzung | echte Familien-/Lerndaten |

Produktionsdaten dürfen nicht ungeprüft in Entwicklungsumgebungen kopiert werden.

## 7. Integrationsgrenzen

Für jeden externen Anbieter wird eine interne Schnittstelle definiert:

- `AuthProvider`
- `VideoProvider`
- `ObjectStorageProvider`
- `NotificationProvider`
- `PaymentProvider`
- `AIProvider`

Kinderclients rufen externe KI-, Zahlungs- oder Messagingdienste nie direkt auf.

## 8. Frontend-Struktur – Zielbild

```text
app/
  (marketing)/
  (parent)/
  (learner)/
  (admin)/
modules/
  identity/
  family/
  curriculum/
  content/
  learning/
  progress/
  entitlements/
components/
  ui/
  learning/
lib/
  db/
  auth/
  i18n/
  observability/
```

Die bestehende Landingpage wird später in `(marketing)` modularisiert. Die Lernanwendung wird nicht in dieselbe große Seitendatei eingebaut.

## 9. Qualitätsstrategie

- Unit-Tests für Domänenlogik
- Schema-/Datenvalidierung für Curriculum und Übungen
- Integrationstests für Datenbank und Berechtigungen
- End-to-End-Tests für Registrierung, Lernen und Elternfortschritt
- visuelle Tests für Arabisch/Französisch und Mobilansichten
- Security-Tests für Rollen, Familiengrenzen und privilegierte Aktionen

## 10. Architektur-Gates

Vor dem ersten echten Familienkonto müssen erfüllt sein:

- Auth-Anbieter und Datenstandort rechtlich geprüft
- Rollen-/Familienmodell implementiert und getestet
- Datenbankzugriffe mit Row-Level- oder äquivalenter Autorisierung geschützt
- Audit-Logging für privilegierte Aktionen
- Backup und Wiederherstellung getestet
- Datenschutzexport und Kontolöschung konzipiert

