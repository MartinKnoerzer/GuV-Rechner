# GuV Rechner

Diese Projektbasis folgt den Anforderungen aus dem Wiki-Dokument `GuV_Rechner_WIKI.pdf` und erweitert sie um einen realistischen GuV-Kontenplan.

## Ziel

Ein browser-basierter GuV-Rechner mit:

- echten Kontonummern und Bezeichnungen
- realistischen Beispiel-Konten aus einem Standard-GuV-Kontenplan
- automatischer Berechnung mit Vorzeichenlogik
- Excel-Vorlage für eigenen Kontenplan
- Import einer vorhandenen Excel- oder CSV-Vorlage
- Vorjahresvergleich mit Rückrechnung der Kostenfaktoren aus Umsatz- und Kostenänderungen
- lokaler Ausführung auf Windows und macOS

## Starten

### Option 1: Dateien direkt im Browser öffnen

- `index.html` direkt im Browser öffnen

### Option 2: Lokaler Webserver

```bash
python server.py
```

Danach im Browser auf `http://localhost:8000` gehen.

## Funktionsweise

- Kontonummern werden als echte Konten-IDs behandelt und können bis 10 Stellen lang sein.
- Erlöse werden als negative Werte erfasst, Kosten als positive Werte.
- Die Gesamtsumme ergibt sich aus der reinen Vorzeichen-Addition aller Konten.
- Bei Kostenzeilen wird die Kostenbasis zuerst mit der Umsatzentwicklung angepasst. Der Prozentwert skaliert diesen angepassten Betrag: 100 % entspricht den Kosten bei gleicher prozentualer Veränderung wie der Umsatz; 107,84 % bedeutet 7,84 % mehr als dieser angepasste Betrag.
- Im Reiter „Vorjahresvergleich“ zeigt die Anwendung aktuelle Beträge und die importierte Spalte „Vorjahreswert“ nebeneinander. „Faktoren rückrechnen“ ermittelt daraus die Kostenfaktoren und übernimmt berechenbare Werte in den Rechner. Dazu verwendet der Rechner die Vorjahreskosten und den Vorjahresumsatz als Basis, damit sich der rückgerechnete Faktor nicht nochmals auf die aktuellen Ist-Beträge aufschlägt.
- Der rückgerechnete Faktor im Vorjahresvergleich setzt die tatsächlichen Kosten ins Verhältnis zu den Kosten, die bei 100 % Umsatzentwicklung zu erwarten wären: `Ist-Kosten / (Vorjahreskosten × Umsatzverhältnis) × 100`. Beispiel: Bei 2 % Umsatzwachstum steigen Kosten von 5.000 € bei 100 % Faktor auf 5.100 €. Tatsächliche Kosten von 5.500 € ergeben `5.500 / 5.100 × 100 = 107,84 %`. Im Rechner ergibt derselbe Faktor mit der umsatzangepassten Basis `5.100 × 107,84 % ≈ 5.500 €`.
- Die Umsatzbasis ist sichtbar und kann angepasst werden. „Neu“ übernimmt die aktuellen DB-Werte als neue Beträge und setzt den aktuellen Umsatz als Umsatzbasis; Faktoren bleiben erhalten.
- Beispiel-Konten wie 1000, 1010, 1040, 2000, 2010, 2100, 2200, 2300, 2400, 2600, 2900 und 3000 sind als Standardvorlage eingebaut.
- Zeilen mit `Euro` werden als direkte Eingaben behandelt.
- Die Ergebniszeile wird aus der Summe aller Vorzeichen errechnet.
- Für die Rückrechnung muss jede Umsatzerlös-Zeile einen Vorjahreswert enthalten. Ein Faktor ist nicht eindeutig bestimmbar, wenn sich der Umsatz nicht verändert oder eine Kostenzeile keine von 0 verschiedenen Vorjahreskosten hat.

## Dateistruktur

- `index.html` – Oberfläche
- `styles.css` – Styling
- `app.js` – Berechnungslogik und Excel-Import/Export
- `server.py` – lokaler Webserver

## Hinweis

Die aktuelle Version ist ein realistischerer MVP mit echter GuV-Kontenstruktur als Ausgangspunkt für eine weiterentwickelte Anwendung.
