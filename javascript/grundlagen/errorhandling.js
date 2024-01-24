function divideNumbers(a, b) {
    try {
      if (b === 0) {
        // Wir werfen einen eigenen Fehler, wenn der Divisor (b) 0 ist
        throw new Error("Division durch Null ist nicht erlaubt.");
      }
  
      // Versuch die Division durchzuführen
      const result = a / b;
  
      // Falls erfolgreich, gib das Ergebnis zurück
      return result;
    } catch (error) {
      // Der catch-Block wird ausgeführt, wenn ein Fehler auftritt
      console.error("Fehler beim Teilen:", error.message);
    } finally {
      // Der finally-Block wird immer ausgeführt, unabhängig davon, ob ein Fehler aufgetreten ist oder nicht
      console.log("Dieser Block wird immer ausgeführt.");
    }
  }
  
  // Beispielaufrufe der Funktion
  console.log(divideNumbers(10, 2));  // Erfolgreiche Division: 5
  console.log(divideNumbers(8, 0));   // Fehlerhafte Division: Fehlermeldung wird ausgegeben
  