// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire

// 🚂 ENQUÊTE GARE DE WIMILLE-WIMEREUX
// Survey for Communauté d'Agglomération du Boulonnais
// Understanding train station usage patterns

export const templateSurveyQuestions = [
    // POSTE - Survey position (pre-filled by surveyor)
    {
        id: "POSTE",
        text: "Poste d'enquête :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Quai 1 - Direction Calais", next: "Q1" },
            { id: 2, text: "Quai 2 - Direction Boulogne", next: "Q1" },
            { id: 3, text: "Hall d'entrée", next: "Q1" },
            { id: 4, text: "Parking", next: "Q1" }
        ]
    },

    // Q1 - Origin commune
    {
        id: "Q1",
        text: "De quelle commune venez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Wimille", next: "Q2" },
            { id: 2, text: "Wimereux", next: "Q2" },
            { id: 3, text: "Ambleteuse", next: "Q2" },
            { id: 4, text: "Boulogne-sur-Mer", next: "Q2" },
            { id: 5, text: "Autre", next: "Q1A" }
        ]
    },

    // Q1A - Other commune (free text)
    {
        id: "Q1A",
        text: "Précisez la commune :",
        type: 'commune',
        next: "Q2"
    },

    // Q2 - Origin purpose
    {
        id: "Q2",
        text: "Ce lieu est-il... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q3" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q3" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q3" },
            { id: 4, text: "Votre établissement scolaire", next: "Q3" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q3" },
            { id: 6, text: "Un lieu de loisirs", next: "Q3" }
        ]
    },

    // Q3 - Access mode to station
    {
        id: "Q3",
        text: "Par quel mode de transport êtes-vous venu jusqu'à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied exclusivement", next: "Q4" },
            { id: 2, text: "En bus/car exclusivement", next: "Q3A" },
            { id: 3, text: "En voiture conducteur", next: "Q3B" },
            { id: 4, text: "En voiture passager (covoiturage ou dépose)", next: "Q3D" },
            { id: 5, text: "En vélo", next: "Q4" },
            { id: 6, text: "En deux-roues motorisé", next: "Q4" },
            { id: 7, text: "En train", next: "Q4" },
            { id: 8, text: "Autre", next: "Q3_AUTRE" }
        ]
    },

    // Q3_AUTRE - Other access mode
    {
        id: "Q3_AUTRE",
        text: "Précisez le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Mode de transport",
        next: "Q4"
    },

    // Q3A - Bus line
    {
        id: "Q3A",
        text: "Précisez la ligne de bus utilisée :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Ligne 210", next: "Q4" },
            { id: 2, text: "Ligne A", next: "Q4" },
            { id: 3, text: "Ligne F", next: "Q4" }
        ]
    },

    // Q3B - Parking location (car driver)
    {
        id: "Q3B",
        text: "Où avez-vous stationné votre voiture ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Place Emmanuel Vanhoutte, côté Wimille (place devant la gare)", next: "Q3C" },
            { id: 2, text: "Rue Georges Pompidou, côté Wimereux", next: "Q3C" },
            { id: 3, text: "Autre", next: "Q3B_AUTRE" }
        ]
    },

    // Q3B_AUTRE - Other parking location
    {
        id: "Q3B_AUTRE",
        text: "Précisez le lieu de stationnement :",
        type: 'freeText',
        freeTextPlaceholder: "Lieu de stationnement",
        next: "Q3C"
    },

    // Q3C - Parking duration (car driver)
    {
        id: "Q3C",
        text: "Quelle est votre durée habituelle de stationnement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Courte durée (<2h)", next: "Q4" },
            { id: 2, text: "Moyenne durée (2 à 6h)", next: "Q4" },
            { id: 3, text: "Longue durée (>6h)", next: "Q4" },
            { id: 4, text: "Très longue durée (>12h)", next: "Q4" }
        ]
    },

    // Q3D - Drop-off location (car passenger)
    {
        id: "Q3D",
        text: "Où avez-vous été déposé ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Place Emmanuel Vanhoutte, côté Wimille (place devant la gare)", next: "Q4" },
            { id: 2, text: "Rue Georges Pompidou, côté Wimereux", next: "Q4" },
            { id: 3, text: "Autre", next: "Q3D_AUTRE" }
        ]
    },

    // Q3D_AUTRE - Other drop-off location
    {
        id: "Q3D_AUTRE",
        text: "Précisez le lieu de dépose :",
        type: 'freeText',
        freeTextPlaceholder: "Lieu de dépose",
        next: "Q4"
    },

    // Q4 - Destination station
    {
        id: "Q4",
        text: "Pour ce trajet en train, quelle est votre gare de descente ?",
        type: 'singleChoice',

        options: [
            { id: 1, text: "Calais Ville", next: "Q5" },
            { id: 2, text: "Les Fontinettes", next: "Q5" },
            { id: 3, text: "Calais - Fréthun", next: "Q5" },
            { id: 4, text: "Pihen", next: "Q5" },
            { id: 5, text: "Caffiers", next: "Q5" },
            { id: 6, text: "Le Haut Blanc", next: "Q5" },
            { id: 7, text: "Marquise - Rinxent", next: "Q5" },
            { id: 8, text: "Wimille - Wimereux", next: "Q5" },
            { id: 9, text: "Boulogne l'intelleries", next: "Q5" },
            { id: 10, text: "Boulogne-sur-Mer", next: "Q5" },
            { id: 11, text: "Pont de Briques", next: "Q5" },
            { id: 12, text: "Hesdigneul", next: "Q5" },
            { id: 13, text: "Neufchâtel-Hardelot", next: "Q5" },
            { id: 14, text: "Dannes - Camiers", next: "Q5" },
            { id: 15, text: "Étaples - Le Touquet", next: "Q5" },
            { id: 16, text: "Rang-du-Fliers - Verton - Berck", next: "Q5" },
            { id: 17, text: "Rue", next: "Q5" },
            { id: 18, text: "Noyelles-sur-Mer", next: "Q5" },
            { id: 19, text: "Abbeville", next: "Q5" },
            { id: 20, text: "Saint-Roch", next: "Q5" },
            { id: 21, text: "Amiens", next: "Q5" },
            { id: 22, text: "Autre", next: "Q4A" }
        ]
    },

    // Q4A - Other destination station
    {
        id: "Q4A",
        text: "Précisez la gare de destination :",
        type: 'gare',
        next: "Q5"
    },

    // Q5 - Trip purpose
    {
        id: "Q5",
        text: "Quel est le motif de votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Aller sur votre lieu de travail habituel", next: "Q6" },
            { id: 2, text: "Rentrer à votre domicile", next: "Q6" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q6" },
            { id: 4, text: "Votre établissement scolaire, université ...", next: "Q6" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q6" },
            { id: 6, text: "Un lieu de loisirs", next: "Q6" },
            { id: 7, text: "Autre", next: "Q5A" }
        ]
    },

    // Q5A - Other trip purpose
    {
        id: "Q5A",
        text: "Précisez le motif de déplacement :",
        type: 'freeText',
        freeTextPlaceholder: "Motif",
        next: "Q6"
    },

    // Q6 - Trip frequency
    {
        id: "Q6",
        text: "À quelle fréquence faites-vous le trajet d'aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "En semaine, entre 3 et 5 fois", next: "end" },
            { id: 2, text: "En semaine, moins de 3 fois", next: "end" },
            { id: 3, text: "Le week-end principalement", next: "end" },
            { id: 4, text: "Moins d'une fois par semaine", next: "end" },
            { id: 5, text: "Moins d'une fois par mois", next: "end" }
        ]
    }
];

/*
🎯 WIMILLE-WIMEREUX TRAIN STATION SURVEY STRUCTURE:

⚡ SURVEY FLOW:
POSTE → Q1 → Q2 → Q3 → [Q3A/Q3B/Q3C/Q3D] → Q4 → Q5 → Q6 → END

📋 QUESTION STRUCTURE:

**POSTE** - Survey position (4 locations, pre-filled by surveyor)

**Q1** - Origin commune
   - Q1A: Other commune (if "Autre" selected)

**Q2** - Origin purpose (home, work, school, shopping, leisure)

**Q3** - Access mode to station
   - Q3A: Bus line (if bus selected)
   - Q3B: Parking location (if car driver)
   - Q3B_AUTRE: Other parking location
   - Q3C: Parking duration (if car driver)
   - Q3D: Drop-off location (if car passenger)
   - Q3D_AUTRE: Other drop-off location
   - Q3_AUTRE: Other mode specification

**Q4** - Destination train station
   - Q4A: Other destination (if "Autre" selected)

**Q5** - Trip purpose
   - Q5A: Other trip purpose (if "Autre" selected)

**Q6** - Trip frequency

🔀 CONDITIONAL LOGIC:
- **Q1** (Origin) → "Autre" leads to Q1A (free text), others go to Q2
- **Q3** (Access mode) branches to:
  - Walking/bike/2-wheels/train → Q4
  - Bus → Q3A (bus line) → Q4
  - Car driver → Q3B (parking) → Q3C (duration) → Q4
  - Car passenger → Q3D (drop-off) → Q4
  - Other → Q3_AUTRE (free text) → Q4
- **Q4** (Destination) → "Autre" leads to Q4A (free text), others go to Q5
- **Q5** (Trip purpose) → "Autre" leads to Q5A (free text), others go to Q6
- **Q6** (Frequency) → END

✅ KEY FEATURES:
- Streamlined Q1-Q6 numbering (with sub-questions Q1A, Q3A-D, Q4A, Q5A)
- Detailed multimodal transport analysis
- Park & Ride behavior tracking (parking duration)
- Kiss & Ride behavior tracking (drop-off locations)
- Complete origin-destination matrix
- Frequency patterns for planning

📊 DATA COLLECTION POINTS:
1. Survey position (POSTE)
2. Origin location + purpose (Q1-Q2)
3. Access mode details (Q3 + sub-questions)
4. Destination station (Q4)
5. Trip purpose (Q5)
6. Trip frequency (Q6)

🎯 SURVEY PURPOSE:
Understanding multimodal travel patterns at Wimille-Wimereux train station to:
- Optimize parking facilities
- Improve bus connections
- Plan future infrastructure
- Understand commuter vs. leisure travel patterns
*/
/*
🎯 FLASH SURVEY STRUCTURE:

⚡ FLOW:
POSTE → Q1 → Q2 → Q2A/Q3 → end

📋 POSTE - POSITIONS D'ENQUÊTE:
- Passerelle côté Est (en haut, montants uniquement)
- Passerelle côté Ouest (en haut, montants uniquement)
- PASO côté Est (personnes qui descendent les escaliers)
- PASO côté Ouest (en bas des escaliers, entrants uniquement)

🔀 ROUTING LOGIC:
- POSTE: Surveyor position (pre-filled, fixed per surveyor)
- Q1: RER user? → Yes = END / No = Q2
- Q2: Bus user? → Yes = Q2A (origin+destination) / No = Q3 (origin+destination)
- Q2A: Origin type → Quartier or Gare routière (with bus number)
- Q2B: Destination type → Quartier or Gare routière (with bus number)
- Q3: Simple origin + destination for non-bus/non-RER users

✅ FEATURES:
- Ultra-short survey (maximum 4-5 questions)
- Filters out RER users immediately
- Separate flow for bus vs non-bus users
- Allows back navigation if user makes mistake
- Position tracking for data analysis (1 surveyor per position, no rotation)
*/