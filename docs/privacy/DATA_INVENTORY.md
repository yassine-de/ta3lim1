# Datenschutz-Dateninventar

**Status:** Arbeitsentwurf, rechtliche Prüfung erforderlich  
**Zweck:** Datenminimierung und Vorbereitung der CNDP-/Anbieterprüfung

## Grundregeln

- Das Elternkonto ist Vertragspartner und verwaltet Kinderprofile.
- Kinderprofile erhalten im MVP keine frei verwendbare E-Mail-Adresse oder Telefonnummer.
- Nur Daten erheben, die für Lernen, Sicherheit, Abrechnung oder Support notwendig sind.
- Marketing- und Produktanalyse werden von Kernlerndaten getrennt.
- Profilfotos sind nicht Teil des ersten MVP.
- Keine verhaltensbasierte Werbung für Kinder.
- Aufbewahrungszeiten werden vor Pilotbeginn rechtlich und betrieblich festgelegt.

## Datenkategorien

| Kategorie | Beispiele | Betroffene Person | Zweck | Sensibilität | MVP |
|---|---|---|---|---|---:|
| Konto | E-Mail/Telefon, Auth-ID, Sprache | Eltern | Anmeldung und Kontakt | hoch | ja |
| Familie | Familien-ID, Mitgliedschaft | Eltern | Profile gemeinsam verwalten | hoch | ja |
| Kinderprofil | Anzeigename/Pseudonym, Klasse, Avatar | Kind | personalisiertes Lernen | sehr hoch | ja |
| Einwilligung | Version, Zweck, Zeitpunkt | Eltern/Kind | Nachweis und Kontrolle | sehr hoch | ja |
| Lernaktivität | gestartete/abgeschlossene Inhalte, Zeit | Kind | Fortschritt und Empfehlung | sehr hoch | ja |
| Übungsversuch | Antwort, Ergebnis, Hinweise | Kind | Feedback und Lernanalyse | sehr hoch | ja |
| Medien | optionale Fotos, Uploads | Kind/Eltern | Profil/Hilfe | besonders prüfen | nein |
| Support | Nachricht, technische Metadaten | Eltern | Problemlösung | hoch | ja |
| Abrechnung | Plan, Betrag, Zahlungsreferenz | Eltern | Vertrag und Zahlung | hoch | später |
| Produktanalyse | Events, Gerätetyp, Performance | Eltern/Kind | Produktverbesserung | hoch | begrenzt |
| KI-Interaktion | Frage, Kontext, Antwort, Safety-Event | Kind | Lernhilfe | sehr hoch | später |

## Minimierungsentscheidungen MVP

- Kindername darf als Spitzname/Pseudonym geführt werden.
- Geburtsdatum wird nicht benötigt; Klassenstufe genügt.
- Geschlecht wird nicht erhoben.
- Adresse wird nur erhoben, wenn rechtlich für Abrechnung zwingend.
- Telefonnummer gehört zum Elternkonto, nie zum Kinderprofil.
- Avatare stammen aus einer eigenen Galerie.
- Freitext durch Kinder wird im ersten Pilot vermieden.
- Lernereignisse enthalten interne IDs, keine E-Mail/Telefonnummer.

## Externe Datenflüsse – vor Anbieterentscheidung auszufüllen

| Dienst | Daten | Land/Region | Zweck | Vertrag | Transferfreigabe |
|---|---|---|---|---|---|
| Hosting | Konto-/Lerndaten | offen | Anwendung | offen | offen |
| Auth | Elternkontakt, Auth-Metadaten | offen | Anmeldung | offen | offen |
| Video | Abruf-/Gerätedaten | offen | Streaming | offen | offen |
| E-Mail/SMS | Elternkontakt, Nachricht | offen | Verifikation/Info | offen | offen |
| Analytics | pseudonyme Events | offen | Produktanalyse | offen | offen |
| Payment | Eltern-/Zahlungsdaten | offen | Zahlung | offen | offen |
| KI | redigierter Lernkontext | offen | Lernhilfe | offen | offen |

## Aufbewahrungsentwurf

Die exakten Fristen sind noch nicht freigegeben. Technisch vorzusehen:

- aktive Kontodaten: während der Vertrags-/Pilotbeziehung
- gelöschtes Konto: Sperr-/Löschworkflow mit gesetzlichen Ausnahmen
- detaillierte Lernereignisse: kürzer als aggregierter Fortschritt
- Supportfälle: definierte, begrenzte Frist
- Audit- und Zahlungsdaten: nach rechtlicher Pflicht
- KI-Rohtexte: standardmäßig nicht dauerhaft speichern; Safety-Fälle separat regeln

## Betroffenenrechte und operative Funktionen

- Eltern können gespeicherte Familien-/Kinderdaten einsehen.
- Datenexport in verständlichem Format.
- Korrektur von Profildaten.
- Einwilligungen widerrufen.
- Konto und Kinderprofile löschen.
- Marketingkommunikation getrennt abwählen.
- Supportprozess für Auskunfts- und Löschanfragen.

## Vor Pilotbeginn offen

- Verantwortlicher und Datenschutzkontakt benennen
- Rechtsgrundlagen je Verarbeitung bestätigen
- CNDP-Meldung/Autorisierung und Auslandstransfer prüfen
- Anbieter- und Auftragsverarbeitungsverträge prüfen
- Löschfristen freigeben
- Incident-/Datenschutzverletzungsprozess testen
- verständliche Hinweise in Arabisch und Französisch erstellen

