import videos from "./videos.js";


let scenesContent = [
    {
    stage: "ETAP 1 - PRZYGOTOWANIE DO BADANIA",
    description: `W celu wykonania badania zastosuj się do poniższych instrukcji
      Na pół godziny przed badaniem nie podejmuj wysiłku fizycznego,
      zrelaksuj się, ale nie urządzaj sobie drzemki.
      Nie pij napojów działających pobudzająco, np. kawa, napoje
      energetyczne.
      Możesz w tym czasie coś zjeść i wypić przynajmniej szklankę wody
      mineralnej niegazowanej.
      Możesz też przygotować na czas badania wodę mineralną niegazowaną
      do picia (najlepiej w małym, wygodnym naczyniu) i coś na przekąskę, np.
      suszone owoce, orzechy.
      Na czas badania wyłącz telefon komórkowy lub odłóż go na kilka metrów
      od urządzenia.
      `,
  },
  {
    stage: "ETAP 2 -­ PRZYGOTOWANIE POMIESZCZENIA",
    description: `Do wykonania badania wybierz ciche, ciepłe, dobrze wentylowane
    pomieszczenie, z wygodnym miejscem do leżenia. Zadbaj o swój komfort.
    W tym celu mogą się okazać przydatne poduszki lub unoszone wezgłowie.
    `,
  },
  {
    stage: "ETAP 3 ­- PRZYGOTOWANIE SPRZĘTU",
    description: `Umieść urządzenie blisko miejsca, w którym będziesz wykonywała zapis,
    najlepiej na wysokości wezgłowia.
    Połóż po środku miejsca do leżenia 2 pasy: niebieski i różowy: niebieski bliżej
    wezgłowia, różowy w odległości ok. 10 cm od niebieskiego.
    Przygotuj żel do głowicy i ręcznik papierowy lub ligninę do wytarcia. Połóż je
    blisko urządzenia`,
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Włącz aparat czarnym przyciskiem zlokalizowanym z tylu urządzenia, a następnie Połóż się wygodnie na boku, najlepiej lewym`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Użycie głowicy aparatu`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Sprawdzanie odgłosów bicia serca Twojego dziecka`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Użycie czujniku ruchów dziecka`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Wyzerowanie urządzenia`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Kontrolowanie czasu badania`,
    video:true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `ZAKOŃCZENIE BADANIA∙ \n Po upływie 30 minut wciśnij ten sam przycisk, co poprzednio – drugi od lewej strony. W tym momencie badanie zostało zakończone.`,
    buttonImage: "",
    timer: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Odpięcie pasów`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Zwinięcie pasów`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Odciącie papieru z wynikami badań`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Wyłącz aparat czarnym przyciskiem z tyłu urządzenia`,
    video: true,
    buttonImage: ""
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Podpisz zapis KTG imieniem i nazwiskiem. Umieść też na nim swój termin porodu.`,
    video: true
  }
]


const surveyOptions = {
  pregnancy: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  KTG: ["Pierwsze", "Druge", "Trzecie", "Czwarte", "Piąte", "Szoste", "osme", "dziewiąte", "dziesiąte"],
  stressLevel: ["Mały stres", "Umiarkowany stres", "Średni stres", "Duzy stres"],
  satisfactionLevel: ["Mały", "Średni", "Duzy"]
};


export default {
  scenesContent,
  surveyOptions
};
