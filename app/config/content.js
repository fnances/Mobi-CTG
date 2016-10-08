import videos from "./videos.js";


let scenesContent = [
    {
    stage: "ETAP 1 - PRZYGOTOWANIE DO BADANIA",
    description: `Umieść urządzenie blisko swojego miejsca, tak aby był w zasięgu Twojego wzroku`,
      video: true
  },
  {
    stage: "ETAP 2 -­ PRZYGOTOWANIE POMIESZCZENIA",
    description: `Przygotuj żel do głowicy i ręcznik papierowy do wytarcia. Połóż je blisko urządzenia`,
    video: true
  },
  {
    stage: "ETAP 3 ­- PRZYGOTOWANIE SPRZĘTU",
    description: `Po środku miejsca do leżenia ułóż pas niebieski i różowy. Niebieski bliżej bezgłowia. Różowy w odległości około 10 cm od niebieskiego`,
  video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Włącz aparat czarnym przyciskiem z tyłu urządzenia.`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Odsłoń brzuch połóż się wygodnie na boku najlepiej lewym.`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Przyłóż żółtą głowicę po środku brzucha na wysokości pępka lub nieco wyżej.
 Zapnij niebieski pas tak, żeby przytrzymywał głowicę ale nie powodował
 ucisku. Głowica musi przylegać do skóry. Pamiętaj aby kabel nie
 znajdował się pod pasem mocującym.`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: ` Na monitorze w prawym dolnym rogu powinna pojawić się liczba w kolorze żółtym.`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Weź do ręki różową głowicę i nałóż na nią żel, następnie przyłóż ją do brzucha. Zacznij na
wysokości około 10 cm poniżej pępka. Przesuwaj powoli głowice. Znajdź punkt w którym
bicie serca Twojego dziecka słychać najwyraźniej. Możesz szukać po przeciwnej stronie od
miejsca, gdzie ostatnio czułaś ruchy dziecka
Gdy usłyszysz wyraźne bicie serca dziecka i na monitorze pojawi się
 różowe serduszko oraz liczba, przytrzymaj głowice w tym punkcie i
 przymocuj ją różowym pasem.`,
    video: true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: `Chwyć szary mały czujnik podłączony do aparatu.
 Przycisk wciskaj w momencie odczuwania ruchu dziecka - Zaznaczaj każdy ruch kliknięciem.`,
    video:true
  },
  {
    stage: "ETAP 4 - WYKONANIE BADANIA",
    description: ` Wyzeruj urządzenie pierwszym przyciskiem od prawej strony.`,
    video: true,
    timer: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Włącz drugi przycisk od lewej strony - Papier powinien nieznacznie się wysunąć.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Od teraz badanie będzie trwało 30 minut. W trakcie badania nie zmieniaj znacząco
pozycji - nie wykonuj gwałtownych ruchów. Możesz popijać wodę i zjeść przekąskę.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Po upływie 30 minut wciśnij drugi przycisk od lewej strony - Badanie zostało zakończone`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: ` Odepnij niebieski pas i umieść niebieską głowice w bezpiecznym miejscu przy
urządzeniu.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Teraz odepnij różowy pas i wyczyść głowicę z żelu.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Użyj ręcznika papierowego do wytarcia brzucha.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Wstań. Zwiń pasy i umieść je przy aparacie.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `Wyłącz aparat czarnym przyciskiem z tyłu urządzenia.`,
    video: true
  },
  {
    stage: "ETAP 5 ­- ODŁĄCZENIE URZĄDZENIA",
    description: `To wszystko gratulację. Właśnie sama wykonałaś badanie KTG.`,
    video: true
  },
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
