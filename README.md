<h1 align="center">Testprojekt für Learnboost von Olga Dikan</h1>

<p align="center">
 Vielen Dank für diese Gelegenheit! Es war ein faszinierendes und anspruchsvolles Projekt, bei dem ich eine ziemlich steile Lernkurve hinter mir hatte. Verschiedene Lebensumstände haben leider den Abschluss des Projekts verzögert. Außerdem erlerne ich Frameworks normalerweise durch Ausprobieren. Daher hat es länger gedauert, als ich (und wahrscheinlich auch Sie) erwartet hatten. Das tut mir leid, aber ich wollte Ihnen am Ende unbedingt ein anständiges Ergebnis präsentieren. Ich hoffe, es gefällt Ihnen, und nochmals vielen Dank, es hat mir viel Spaß gemacht!
</p>


## Hinweise

1. Richten Sie zunächst im Hauptprojektordner eine `.env.local`-Datei mit den folgenden Supabase-Umgebungsvariablen ein:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://uxhkzgczblunnvzzfclf.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4aGt6Z2N6Ymx1bm52enpmY2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDMyODMsImV4cCI6MjA2NzExOTI4M30.-x_R7atFRv5A17VCtJEJcf_3yNo-k_U08ibyq8PU_A8
   ```

2. Wenn Sie das Projekt auf einem lokalen Entwicklungsserver ausführen möchten, führen Sie den folgenden Befehl aus dem Hauptprojektordner aus:

   ```bash
   npm run dev
   ```

   Das Projekt sollte nun unter [localhost:3000](http://localhost:3000/) laufen.

    Ansonsten können Sie 
   ```bash
   npm run build
   ```
    zum Erstellen der Anwendung und
   ```bash
   npm run start
   ```
    zum Starten des Node.js-Servers verwenden.

3. Beim ersten Start der Anwendung müssen Sie sich für die Supabase-Authentifizierung registrieren, um sich anmelden und auf die `chat-tutor`-Seite zugreifen zu können. Nach dem Klicken auf den Button „Login“ wird ein Anmeldeformular angezeigt. Klicken Sie dort auf den Link „Sign up“. Geben Sie eine E-Mail-Adresse ein, auf die Sie Zugriff haben, und prüfen Sie anschließend Ihre eingehenden E-Mails auf die von Supabase gesendete. Klicken Sie auf den Link in dieser E-Mail. Nun sollten Sie bei Supabase als authentifizierter Benutzer registriert sein und das Anmeldeformular nutzen können.

4. Ich bin nicht sicher, ob Sie mit den von mir bereitgestellten Anmeldeinformationen Zugriff auf die `chatbot`-Tabelle in Supabase haben, aber ich habe die Speicherung des Chatbot-Verlaufs in dieser Tabelle implementiert. Lassen Sie mich wissen, ob ich Ihnen zeigen soll, wie der Chat-Verlauf gespeichert wird. Alternativ habe ich die RLS-Richtlinien für Insert und Select für authentifizierte Benutzer eingerichtet. Sie können meinen Code in der `chat-bot`-Komponente gerne ändern, um beispielsweise alle Daten in der Tabelle auszuwählen und in der Konsole auszugeben.