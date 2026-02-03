# Guide complet pour créer un module de simulation de tests de recrutement

Les tests de recrutement constituent aujourd'hui un filtre critique : **54 à 84% des candidats** sont éliminés à cette étape. Ce guide fournit toutes les ressources nécessaires pour construire un module de préparation complet en HTML/CSS/JS vanilla, couvrant les méthodologies de tests, les structures de données pour l'implémentation, les bonnes pratiques UX/UI, et le cadre légal.

---

## Tests de personnalité : méthodologies et implémentation

### Big Five (OCEAN) — Le standard scientifique

Le modèle Big Five représente la référence scientifique en psychologie de la personnalité avec une validité prédictive démontrée pour la performance professionnelle. Le test comprend **60 à 240 items** selon la version, utilisant une échelle Likert à 5 ou 7 points.

**Les 5 dimensions et leurs facettes :**

| Dimension | Facettes clés | Utilisation recruteur |
|-----------|---------------|----------------------|
| **Ouverture** | Curiosité intellectuelle, créativité, flexibilité | Postes innovation, R&D, design |
| **Conscienciosité** | Organisation, fiabilité, persévérance | Tous postes, prédicteur universel |
| **Extraversion** | Sociabilité, assertivité, énergie | Ventes, management, service client |
| **Agréabilité** | Empathie, coopération, confiance | Travail d'équipe, service client |
| **Névrosisme** | Stabilité émotionnelle, gestion du stress | Postes sous pression (inversé) |

**Exemples de questions par dimension :**

```javascript
const bigFiveQuestions = {
  openness: [
    { text: "J'ai souvent des idées originales et créatives", scale: "O", reversed: false },
    { text: "Je préfère les routines établies aux nouvelles expériences", scale: "O", reversed: true },
    { text: "Je suis fasciné(e) par les concepts abstraits", scale: "O", reversed: false }
  ],
  conscientiousness: [
    { text: "Je suis toujours préparé(e) et organisé(e)", scale: "C", reversed: false },
    { text: "J'ai tendance à remettre les tâches à plus tard", scale: "C", reversed: true },
    { text: "Je fais attention aux détails dans mon travail", scale: "C", reversed: false }
  ],
  extraversion: [
    { text: "Je me sens à l'aise au centre de l'attention", scale: "E", reversed: false },
    { text: "Je préfère les conversations en petit comité", scale: "E", reversed: true },
    { text: "J'initie facilement les conversations", scale: "E", reversed: false }
  ],
  agreeableness: [
    { text: "Je m'intéresse sincèrement aux problèmes des autres", scale: "A", reversed: false },
    { text: "Je suis parfois perçu(e) comme froid(e) ou distant(e)", scale: "A", reversed: true },
    { text: "Je fais confiance aux intentions des autres", scale: "A", reversed: false }
  ],
  neuroticism: [
    { text: "Je me sens souvent stressé(e) ou anxieux(se)", scale: "N", reversed: false },
    { text: "Je reste calme face aux difficultés", scale: "N", reversed: true },
    { text: "Mon humeur change fréquemment", scale: "N", reversed: false }
  ]
};
```

**Algorithme de scoring Big Five :**

```javascript
function calculateBigFiveScore(answers, questions) {
  const scales = { O: [], C: [], E: [], A: [], N: [] };
  
  questions.forEach((q, i) => {
    let value = answers[i]; // 1-5 sur échelle Likert
    if (q.reversed) value = 6 - value; // Inversion pour items inversés
    scales[q.scale].push(value);
  });
  
  const results = {};
  Object.keys(scales).forEach(scale => {
    const sum = scales[scale].reduce((a, b) => a + b, 0);
    const avg = sum / scales[scale].length;
    // Conversion en score T (moyenne 50, écart-type 10)
    results[scale] = {
      raw: avg,
      tScore: Math.round(50 + ((avg - 3) / 1) * 10), // Normalisation simplifiée
      percentile: calculatePercentile(avg, scale)
    };
  });
  return results;
}
```

### DISC — Communication et dynamique d'équipe

Le DISC évalue le style comportemental à travers **24-28 groupes de 4 affirmations** en format ipsatif (choix forcé). Chaque groupe demande d'identifier l'affirmation "la plus comme moi" et "la moins comme moi".

**Structure d'un groupe DISC :**

```json
{
  "groupId": 1,
  "instructions": "Choisissez l'affirmation qui vous correspond le PLUS et celle qui vous correspond le MOINS",
  "statements": [
    { "id": "a", "text": "Je prends les décisions rapidement et assume les conséquences", "scale": "D" },
    { "id": "b", "text": "Je motive les autres et maintiens une atmosphère positive", "scale": "I" },
    { "id": "c", "text": "Je soutiens l'équipe et favorise l'harmonie", "scale": "S" },
    { "id": "d", "text": "Je vérifie les détails et suis les procédures établies", "scale": "C" }
  ]
}
```

**Profils DISC et correspondances métiers :**

| Profil | Caractéristiques | Postes adaptés |
|--------|------------------|----------------|
| **D élevé** | Assertif, orienté résultats, direct | Direction, ventes complexes |
| **I élevé** | Enthousiaste, persuasif, sociable | Commercial, marketing, RH |
| **S élevé** | Patient, loyal, fiable | Support, administration, soins |
| **C élevé** | Analytique, précis, méthodique | Finance, qualité, IT |

### RIASEC (Holland) — Orientation professionnelle

Le test RIASEC mesure les intérêts professionnels à travers **60-180 items** évaluant l'attrait pour différentes activités.

```javascript
const riasecActivities = {
  realistic: [
    "Réparer une machine ou un moteur",
    "Construire quelque chose avec mes mains",
    "Travailler en extérieur avec des outils"
  ],
  investigative: [
    "Analyser des données complexes",
    "Résoudre des problèmes mathématiques",
    "Faire des expériences scientifiques"
  ],
  artistic: [
    "Créer des œuvres visuelles ou musicales",
    "Écrire des histoires ou des articles",
    "Concevoir des espaces ou des objets"
  ],
  social: [
    "Enseigner ou former des personnes",
    "Aider les gens à résoudre leurs problèmes",
    "Organiser des activités de groupe"
  ],
  enterprising: [
    "Diriger une équipe vers un objectif",
    "Négocier des accords commerciaux",
    "Convaincre et persuader les autres"
  ],
  conventional: [
    "Organiser des fichiers et des données",
    "Suivre des procédures établies",
    "Vérifier l'exactitude des informations"
  ]
};
```

---

## Tests d'aptitudes cognitives : structures et exemples

### Raisonnement logique — Matrices progressives

Les matrices de Raven évaluent l'intelligence fluide par des patterns visuels. **5 règles fondamentales** couvrent 90% des questions : rotation, progression, construction, distribution et mouvement.

**Structure JSON pour matrices :**

```json
{
  "type": "raven_matrix",
  "id": "log_001",
  "difficulty": "medium",
  "timeLimit": 60,
  "matrix": {
    "rows": 3,
    "cols": 3,
    "cells": [
      ["circle_1line", "circle_2lines", "circle_3lines"],
      ["square_1line", "square_2lines", "square_3lines"],
      ["triangle_1line", "triangle_2lines", "?"]
    ],
    "rules": ["horizontal_progression_add_line", "vertical_shape_change"]
  },
  "options": [
    { "id": "a", "value": "triangle_3lines", "correct": true },
    { "id": "b", "value": "triangle_2lines", "correct": false },
    { "id": "c", "value": "square_3lines", "correct": false },
    { "id": "d", "value": "circle_3lines", "correct": false }
  ],
  "explanation": "Règle horizontale : +1 ligne par cellule. Règle verticale : la forme change. Réponse : triangle avec 3 lignes."
}
```

### Suites numériques — Patterns courants

**Types de séquences avec exemples :**

| Type | Exemple | Règle | Niveau |
|------|---------|-------|--------|
| Arithmétique | 2, 5, 8, 11, ? | +3 | Facile |
| Géométrique | 3, 6, 12, 24, ? | ×2 | Facile |
| Fibonacci | 1, 1, 2, 3, 5, 8, ? | n₋₁ + n₋₂ | Moyen |
| Différences croissantes | 2, 6, 12, 20, 30, ? | +4, +6, +8, +10, +12 | Moyen |
| Double opération | 1, 3, 7, 15, 31, ? | ×2 + 1 | Difficile |
| Carrés | 1, 4, 9, 16, 25, ? | n² | Moyen |

```javascript
const numberSequences = [
  {
    id: "seq_001",
    sequence: [2, 6, 12, 20, 30],
    answer: 42,
    rule: "differences_increase_by_2",
    explanation: "Différences : 4, 6, 8, 10 → prochaine différence : 12. 30 + 12 = 42",
    difficulty: "medium",
    timeLimit: 45
  }
];
```

### Raisonnement verbal — Analogies et compréhension

**Types de relations pour analogies :**

```javascript
const verbalAnalogies = [
  {
    type: "creator_creation",
    pair1: ["Écrivain", "Livre"],
    pair2: ["Peintre", "?"],
    options: ["Couleur", "Tableau", "Pinceau", "Galerie"],
    correct: 1,
    explanation: "L'écrivain crée un livre, le peintre crée un tableau"
  },
  {
    type: "tool_user",
    pair1: ["Scalpel", "Chirurgien"],
    pair2: ["Marteau", "?"],
    options: ["Médecin", "Menuisier", "Clou", "Construction"],
    correct: 1
  },
  {
    type: "degree_intensity",
    pair1: ["Irrité", "Furieux"],
    pair2: ["Content", "?"],
    options: ["Triste", "Joyeux", "Extatique", "Satisfait"],
    correct: 2
  }
];
```

**Test de compréhension format Vrai/Faux/Ne peut pas dire :**

```json
{
  "type": "reading_comprehension",
  "passage": "L'entreprise TechCorp a enregistré une croissance de 15% de son chiffre d'affaires au T3 2025, principalement grâce à sa division cloud computing. Le PDG a annoncé un plan d'investissement de 50 millions d'euros pour 2026.",
  "statements": [
    {
      "text": "TechCorp a augmenté ses revenus de 15% grâce uniquement au cloud.",
      "answer": "false",
      "explanation": "Le texte dit 'principalement', pas 'uniquement'"
    },
    {
      "text": "L'investissement prévu dépasse 40 millions d'euros.",
      "answer": "true",
      "explanation": "50 millions > 40 millions"
    },
    {
      "text": "TechCorp prévoit d'embaucher de nouveaux employés en 2026.",
      "answer": "cannot_say",
      "explanation": "Le texte ne mentionne pas les embauches"
    }
  ]
}
```

### Raisonnement numérique — Calculs et graphiques

```javascript
const numericalQuestions = [
  {
    type: "percentage",
    context: "Budget marketing : 120 000€. Répartition : Digital 45%, Événements 30%, Print 25%.",
    question: "Quel est le montant alloué au digital ?",
    calculation: "120000 × 0.45 = 54000",
    answer: 54000,
    options: [48000, 54000, 60000, 36000],
    timeLimit: 60
  },
  {
    type: "data_interpretation",
    chartData: {
      labels: ["Jan", "Fév", "Mar", "Avr"],
      productA: [100, 120, 115, 140],
      productB: [80, 95, 110, 100]
    },
    question: "Quelle est l'augmentation en % du produit A entre janvier et avril ?",
    answer: 40,
    calculation: "(140-100)/100 × 100 = 40%"
  }
];
```

### Barèmes et percentiles standards

| Percentile | Score brut CCAT (/50) | Interprétation | Postes typiques |
|------------|----------------------|----------------|-----------------|
| 50e | 24 | Moyenne | Opérationnel |
| 70e | 28 | Bon | Technicien |
| 80e | 31 | Très bon | Manager, cadre |
| 90e | 36 | Excellent | Consultant, finance |
| 98e | 40+ | Exceptionnel | Direction |

---

## Tests de mise en situation (SJT) et assessment centers

### Structure des Situational Judgment Tests

Les SJT présentent des scénarios professionnels réalistes avec **4-5 options de réponse**. Deux formats principaux existent : "Que feriez-vous ?" (comportement probable) et "Que devriez-vous faire ?" (comportement idéal).

**Exemple complet de scénario SJT :**

```json
{
  "id": "sjt_001",
  "category": "leadership",
  "scenario": "Vous êtes chef de projet. Un membre de votre équipe, habituellement performant, accumule les retards depuis deux semaines. Ses collègues commencent à se plaindre car ils doivent compenser. Que faites-vous en premier ?",
  "options": [
    {
      "id": "a",
      "text": "Envoyer un email de rappel à toute l'équipe sur l'importance des délais",
      "score": 1,
      "feedback": "Trop indirect, ne traite pas le problème individuellement"
    },
    {
      "id": "b",
      "text": "Organiser un entretien privé pour comprendre la situation et proposer un soutien",
      "score": 5,
      "feedback": "Meilleure approche : empathie + résolution proactive"
    },
    {
      "id": "c",
      "text": "Redistribuer ses tâches aux autres membres sans discussion",
      "score": 2,
      "feedback": "Évite la confrontation, peut démotiver et ne résout pas la cause"
    },
    {
      "id": "d",
      "text": "Signaler immédiatement le problème à votre supérieur",
      "score": 2,
      "feedback": "Escalade prématurée, ne tente pas de résoudre d'abord"
    }
  ],
  "competencies": ["leadership", "communication", "problem_solving"],
  "scoring": "rating"
}
```

**Compétences typiquement évaluées dans les SJT :**

- **Leadership et prise de décision** : Initiative, responsabilité, vision
- **Travail d'équipe** : Collaboration, soutien, communication
- **Gestion du stress** : Résilience, priorisation, calme
- **Éthique et intégrité** : Honnêteté, confidentialité, respect des règles
- **Orientation client** : Empathie, résolution, satisfaction

### Exercices In-Basket / E-Tray

L'exercice simule la gestion d'une boîte mail avec **12-30 items** (emails, mémos, rapports) à traiter en **30-90 minutes**.

**Template d'exercice In-Basket :**

```json
{
  "exerciseId": "inbasket_001",
  "context": "Vous êtes responsable marketing chez TechCorp. Votre directeur est en déplacement jusqu'à lundi. Il est vendredi 8h et vous devez traiter les éléments suivants avant votre réunion de 10h.",
  "timeLimit": 45,
  "items": [
    {
      "id": 1,
      "type": "email",
      "from": "client_vip@important.com",
      "subject": "URGENT - Problème livraison commande #4521",
      "received": "07:45",
      "priority": "high",
      "content": "Notre commande aurait dû arriver hier. Nos équipes sont bloquées. Besoin d'une solution immédiate.",
      "expectedActions": ["respond", "escalate", "investigate"],
      "evaluationCriteria": ["prioritization", "customer_focus", "communication"]
    },
    {
      "id": 2,
      "type": "memo",
      "from": "RH",
      "subject": "Demande de congé - Marie Dupont",
      "received": "hier 17:00",
      "priority": "medium",
      "content": "Demande de congé du 15 au 22 février. Avis requis.",
      "expectedActions": ["approve", "delegate", "schedule"],
      "evaluationCriteria": ["delegation", "decision_making"]
    }
  ],
  "evaluationMatrix": {
    "prioritization": { "weight": 25, "indicators": ["urgent_first", "logical_order"] },
    "delegation": { "weight": 20, "indicators": ["appropriate_tasks", "clear_instructions"] },
    "decision_making": { "weight": 25, "indicators": ["firm_decisions", "justified_choices"] },
    "communication": { "weight": 20, "indicators": ["clear_emails", "appropriate_tone"] },
    "planning": { "weight": 10, "indicators": ["time_management", "follow_up"] }
  }
}
```

### Études de cas — Frameworks d'analyse

**Frameworks essentiels à maîtriser :**

| Framework | Usage | Structure |
|-----------|-------|-----------|
| **SWOT** | Analyse stratégique | Forces, Faiblesses, Opportunités, Menaces |
| **Porter 5 Forces** | Analyse concurrentielle | Rivalité, Nouveaux entrants, Substituts, Pouvoir clients/fournisseurs |
| **4P Marketing** | Stratégie marketing | Product, Price, Place, Promotion |
| **Profitabilité** | Analyse financière | Revenue (Prix × Volume) - Coûts (Fixes + Variables) |

---

## Tests techniques par secteur

### IT / Développement

**Patterns algorithmiques couvrant 87% des questions FAANG :**

1. Two Pointers
2. Sliding Window
3. DFS/BFS (arbres, graphes)
4. Binary Search
5. Dynamic Programming
6. Backtracking
7. Topological Sort

**Structure de test technique IT :**

```json
{
  "type": "coding_challenge",
  "difficulty": "medium",
  "timeLimit": 45,
  "language": ["python", "javascript", "java"],
  "problem": {
    "title": "Two Sum",
    "description": "Étant donné un tableau d'entiers et une cible, retourner les indices des deux nombres dont la somme égale la cible.",
    "examples": [
      { "input": { "nums": [2, 7, 11, 15], "target": 9 }, "output": [0, 1] }
    ],
    "constraints": ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"]
  },
  "testCases": [
    { "input": { "nums": [2, 7, 11, 15], "target": 9 }, "expected": [0, 1] },
    { "input": { "nums": [3, 2, 4], "target": 6 }, "expected": [1, 2] }
  ],
  "evaluation": {
    "correctness": 60,
    "efficiency": 25,
    "codeQuality": 15
  }
}
```

### Commercial / Vente

**Test de gestion des objections :**

```javascript
const salesObjections = [
  {
    objection: "C'est trop cher pour notre budget actuel",
    type: "prix",
    responses: [
      {
        text: "Je comprends. Parlons du retour sur investissement : combien vous coûte actuellement le problème que nous résolvons ?",
        score: 5,
        technique: "reframe_value"
      },
      {
        text: "On peut vous faire une remise de 10%",
        score: 2,
        technique: "discount_trap"
      },
      {
        text: "Comparé à nos concurrents, nous sommes dans la moyenne du marché",
        score: 3,
        technique: "market_comparison"
      }
    ]
  }
];
```

### Bureautique / Administratif

**Niveaux Excel et compétences testées :**

| Niveau | Compétences | Durée test |
|--------|-------------|------------|
| **Débutant** | SOMME, MOYENNE, mise en forme, tri | 15 min |
| **Intermédiaire** | SI, références absolues, graphiques, filtres | 25 min |
| **Avancé** | RECHERCHEV/X, SOMME.SI.ENS, mise en forme conditionnelle | 35 min |
| **Expert** | TCD, macros VBA, formules imbriquées | 45 min |

---

## Architecture technique : implémentation vanilla JS

### Structure de fichiers recommandée

```
/quiz-module/
├── index.html
├── /css/
│   ├── main.css
│   ├── components/
│   │   ├── quiz.css
│   │   ├── timer.css
│   │   └── results.css
│   └── animations.css
├── /js/
│   ├── app.js
│   ├── /core/
│   │   ├── Quiz.js
│   │   ├── QuizView.js
│   │   └── QuizController.js
│   ├── /services/
│   │   ├── StorageService.js
│   │   ├── ScoringService.js
│   │   └── TimerService.js
│   └── /utils/
│       └── helpers.js
├── /data/
│   └── questions.json
└── /assets/
```

### Classe Quiz principale

```javascript
class Quiz {
  constructor(questions, options = {}) {
    this.questions = questions;
    this.currentIndex = 0;
    this.answers = [];
    this.score = 0;
    this.startTime = null;
    this.options = {
      shuffle: options.shuffle ?? false,
      shuffleAnswers: options.shuffleAnswers ?? false,
      timeLimit: options.timeLimit ?? null,
      showFeedback: options.showFeedback ?? true
    };
    
    if (this.options.shuffle) this.shuffleQuestions();
  }
  
  start() {
    this.startTime = Date.now();
    return this.getCurrentQuestion();
  }
  
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }
  
  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }
  
  submitAnswer(answer) {
    const question = this.getCurrentQuestion();
    const isCorrect = this.checkAnswer(answer, question);
    const timeSpent = this.answers.length > 0 
      ? Date.now() - this.answers[this.answers.length - 1].timestamp 
      : Date.now() - this.startTime;
    
    this.answers.push({
      questionId: question.id,
      answer,
      isCorrect,
      timeSpent,
      timestamp: Date.now()
    });
    
    if (isCorrect) this.score += question.weight || 1;
    
    return {
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      feedback: isCorrect ? question.feedback?.correct : question.feedback?.incorrect
    };
  }
  
  checkAnswer(answer, question) {
    switch (question.type) {
      case 'single-choice':
        return answer === question.correctAnswer;
      case 'multiple-choice':
        return JSON.stringify(answer.sort()) === JSON.stringify(question.correctAnswers.sort());
      case 'text-input':
        return question.acceptedAnswers.map(a => a.toLowerCase()).includes(answer.toLowerCase());
      default:
        return answer === question.correctAnswer;
    }
  }
  
  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      return this.getCurrentQuestion();
    }
    return null;
  }
  
  getResults() {
    const totalWeight = this.questions.reduce((sum, q) => sum + (q.weight || 1), 0);
    const totalTime = Date.now() - this.startTime;
    
    const categoryScores = {};
    this.questions.forEach((q, i) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { correct: 0, total: 0 };
      }
      categoryScores[q.category].total++;
      if (this.answers[i]?.isCorrect) categoryScores[q.category].correct++;
    });
    
    return {
      score: this.score,
      maxScore: totalWeight,
      percentage: Math.round((this.score / totalWeight) * 100),
      totalQuestions: this.questions.length,
      correctAnswers: this.answers.filter(a => a.isCorrect).length,
      totalTime,
      averageTimePerQuestion: Math.round(totalTime / this.questions.length),
      categoryScores,
      answers: this.answers
    };
  }
}
```

### Stockage local avec localStorage

```javascript
const QuizStorage = {
  KEYS: {
    PROGRESS: 'quiz_progress',
    HISTORY: 'quiz_history',
    SETTINGS: 'quiz_settings',
    ACHIEVEMENTS: 'quiz_achievements'
  },
  
  saveProgress(quizId, data) {
    const progress = this.getProgress() || {};
    progress[quizId] = {
      ...data,
      lastUpdated: Date.now()
    };
    localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
  },
  
  getProgress(quizId = null) {
    const data = localStorage.getItem(this.KEYS.PROGRESS);
    const progress = data ? JSON.parse(data) : null;
    return quizId ? progress?.[quizId] : progress;
  },
  
  saveResult(result) {
    const history = this.getHistory();
    history.push({
      ...result,
      completedAt: Date.now(),
      id: `result_${Date.now()}`
    });
    // Garder les 50 derniers résultats
    if (history.length > 50) history.shift();
    localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
  },
  
  getHistory() {
    const data = localStorage.getItem(this.KEYS.HISTORY);
    return data ? JSON.parse(data) : [];
  },
  
  calculateStats() {
    const history = this.getHistory();
    if (history.length === 0) return null;
    
    const stats = {
      totalAttempts: history.length,
      averageScore: 0,
      bestScore: 0,
      totalTime: 0,
      byCategory: {},
      progression: []
    };
    
    history.forEach(result => {
      stats.averageScore += result.percentage;
      stats.bestScore = Math.max(stats.bestScore, result.percentage);
      stats.totalTime += result.totalTime;
      stats.progression.push({
        date: result.completedAt,
        score: result.percentage
      });
    });
    
    stats.averageScore = Math.round(stats.averageScore / history.length);
    return stats;
  }
};
```

### Timer avec autosave

```javascript
class QuizTimer {
  constructor(options = {}) {
    this.duration = options.duration || 300;
    this.remaining = this.duration;
    this.interval = null;
    this.callbacks = {
      onTick: options.onTick || (() => {}),
      onWarning: options.onWarning || (() => {}),
      onComplete: options.onComplete || (() => {})
    };
    this.warningThreshold = options.warningThreshold || 60;
    this.autoSaveInterval = options.autoSaveInterval || 30;
  }
  
  start() {
    this.interval = setInterval(() => {
      this.remaining--;
      
      this.callbacks.onTick({
        remaining: this.remaining,
        formatted: this.formatTime(this.remaining),
        percentage: (this.remaining / this.duration) * 100
      });
      
      if (this.remaining === this.warningThreshold) {
        this.callbacks.onWarning(this.remaining);
      }
      
      if (this.remaining % this.autoSaveInterval === 0) {
        this.autoSave();
      }
      
      if (this.remaining <= 0) {
        this.stop();
        this.callbacks.onComplete();
      }
    }, 1000);
  }
  
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  autoSave() {
    localStorage.setItem('quiz_timer_state', JSON.stringify({
      remaining: this.remaining,
      timestamp: Date.now()
    }));
  }
  
  pause() { clearInterval(this.interval); }
  resume() { this.start(); }
  stop() { clearInterval(this.interval); this.interval = null; }
}
```

### Animations CSS pour feedback

```css
/* Variables de design system */
:root {
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-primary: #3b82f6;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
}

/* États des options de réponse */
.answer-option {
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all var(--transition-normal) ease;
  background: white;
}

.answer-option:hover:not(.disabled) {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.answer-option.selected {
  border-color: var(--color-primary);
  background: rgba(59, 130, 246, 0.05);
}

/* Feedback correct */
.answer-option.correct {
  border-color: var(--color-success);
  background: rgba(16, 185, 129, 0.1);
  animation: correctPulse 0.5s ease;
}

.answer-option.correct::after {
  content: '✓';
  position: absolute;
  right: 16px;
  color: var(--color-success);
  font-weight: bold;
  animation: checkmarkAppear 0.3s ease;
}

@keyframes correctPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes checkmarkAppear {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}

/* Feedback incorrect */
.answer-option.incorrect {
  border-color: var(--color-error);
  background: rgba(239, 68, 68, 0.1);
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
}

/* Barre de progression */
.progress-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), #8b5cf6);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Timer critique */
.timer.warning {
  color: var(--color-warning);
  animation: timerPulse 1s infinite;
}

.timer.critical {
  color: var(--color-error);
  animation: timerPulse 0.5s infinite;
}

@keyframes timerPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

/* Transition entre questions */
.question-container {
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}

.question-exit {
  opacity: 0;
  transform: translateX(-20px);
}

.question-enter {
  opacity: 0;
  transform: translateX(20px);
}

/* Célébration score */
@keyframes confetti {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
}

.confetti-piece {
  position: fixed;
  width: 10px;
  height: 10px;
  animation: confetti 3s ease-out forwards;
}
```

---

## UX/UI : gamification et engagement

### Système de points et badges

```javascript
const GamificationSystem = {
  XP_VALUES: {
    correctAnswer: 10,
    perfectQuiz: 50,
    speedBonus: 5,
    dailyLogin: 15,
    streak: (days) => days * 5
  },
  
  BADGES: [
    { id: 'first_quiz', name: 'Premier pas', condition: (stats) => stats.totalAttempts >= 1, icon: '🎯' },
    { id: 'perfect_score', name: 'Sans faute', condition: (stats) => stats.perfectScores >= 1, icon: '⭐' },
    { id: 'streak_7', name: 'Semaine parfaite', condition: (stats) => stats.currentStreak >= 7, icon: '🔥' },
    { id: 'speed_demon', name: 'Éclair', condition: (stats) => stats.fastCompletions >= 5, icon: '⚡' },
    { id: 'centurion', name: 'Centurion', condition: (stats) => stats.totalQuestions >= 100, icon: '💯' },
    { id: 'all_categories', name: 'Polyvalent', condition: (stats) => stats.categoriesCompleted >= 5, icon: '🏆' }
  ],
  
  calculateXP(result) {
    let xp = result.correctAnswers * this.XP_VALUES.correctAnswer;
    if (result.percentage === 100) xp += this.XP_VALUES.perfectQuiz;
    if (result.averageTimePerQuestion < 30000) xp += this.XP_VALUES.speedBonus;
    return xp;
  },
  
  checkNewBadges(stats, existingBadges) {
    return this.BADGES.filter(badge => 
      !existingBadges.includes(badge.id) && badge.condition(stats)
    );
  }
};
```

### Structure HTML de l'interface quiz

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Module de Préparation aux Tests</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="quiz-app">
    <!-- Header avec progression -->
    <header class="quiz-header">
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width: 0%"></div>
        </div>
        <span class="progress-text" id="progressText">Question 1/20</span>
      </div>
      <div class="timer-container">
        <span class="timer" id="timer">15:00</span>
      </div>
    </header>
    
    <!-- Zone de question -->
    <main class="quiz-main">
      <div class="question-container" id="questionContainer">
        <div class="question-category" id="questionCategory">Raisonnement Logique</div>
        <h2 class="question-text" id="questionText"></h2>
        <div class="question-media" id="questionMedia"></div>
        
        <div class="answers-container" id="answersContainer">
          <!-- Options générées dynamiquement -->
        </div>
      </div>
      
      <!-- Zone de feedback -->
      <div class="feedback-container hidden" id="feedbackContainer">
        <div class="feedback-icon" id="feedbackIcon"></div>
        <p class="feedback-text" id="feedbackText"></p>
        <div class="explanation" id="explanationText"></div>
      </div>
    </main>
    
    <!-- Footer avec actions -->
    <footer class="quiz-footer">
      <button class="btn btn-secondary" id="prevBtn" disabled>Précédent</button>
      <button class="btn btn-primary" id="submitBtn">Valider</button>
      <button class="btn btn-primary hidden" id="nextBtn">Suivant</button>
    </footer>
  </div>
  
  <!-- Modal résultats -->
  <div class="modal hidden" id="resultsModal">
    <div class="modal-content">
      <h2>🎉 Quiz terminé !</h2>
      <div class="score-display">
        <div class="score-circle" id="scoreCircle">
          <span class="score-percentage" id="scorePercentage">0%</span>
        </div>
        <p class="score-label" id="scoreLabel">0/20 correct</p>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-value" id="timeSpent">--:--</span>
          <span class="stat-label">Temps total</span>
        </div>
        <div class="stat-item">
          <span class="stat-value" id="avgTime">--s</span>
          <span class="stat-label">Temps moyen/question</span>
        </div>
      </div>
      <canvas id="categoryChart"></canvas>
      <div class="modal-actions">
        <button class="btn btn-secondary" id="reviewBtn">Revoir les erreurs</button>
        <button class="btn btn-primary" id="retryBtn">Recommencer</button>
      </div>
    </div>
  </div>
  
  <script src="js/app.js" type="module"></script>
</body>
</html>
```

### Principes d'accessibilité (WCAG 2.1 AA)

**Contraste minimum :** Ratio 4.5:1 pour texte normal, 3:1 pour grand texte

**Navigation clavier obligatoire :**
```javascript
// Gestion du focus et navigation
document.addEventListener('keydown', (e) => {
  const options = document.querySelectorAll('.answer-option:not(.disabled)');
  const currentFocus = document.activeElement;
  const currentIndex = Array.from(options).indexOf(currentFocus);
  
  switch(e.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % options.length;
      options[nextIndex].focus();
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      const prevIndex = currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
      options[prevIndex].focus();
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      if (currentFocus.classList.contains('answer-option')) {
        currentFocus.click();
      }
      break;
  }
});
```

**Annonces pour lecteurs d'écran :**
```html
<div role="status" aria-live="polite" class="sr-only" id="announcer"></div>
```

```javascript
function announce(message) {
  const announcer = document.getElementById('announcer');
  announcer.textContent = message;
}

// Utilisation
announce('Question 3 sur 10. Catégorie : Raisonnement verbal.');
announce('Correct ! Vous avez gagné 10 points.');
```

---

## Cadre légal et éthique

### Obligations RGPD pour le stockage de données

**Si stockage local uniquement (recommandé) :**
- Pas de transmission de données personnelles au serveur
- Pas d'obligation de déclaration CNIL
- L'utilisateur garde le contrôle total de ses données

**Si stockage serveur :**
- Information préalable complète de l'utilisateur
- Consentement explicite requis
- Durée de conservation : 2 ans maximum après dernier contact
- Droits d'accès, rectification et suppression à garantir

### Mentions légales obligatoires

```html
<div class="legal-disclaimer">
  <h3>Avertissement Important</h3>
  <p>Ce module est un <strong>outil de préparation et d'entraînement</strong>. 
  Il ne constitue pas un test psychométrique validé scientifiquement.</p>
  
  <ul>
    <li>Les résultats sont <strong>indicatifs</strong> et à but pédagogique uniquement</li>
    <li>Ce module ne prétend pas mesurer des aptitudes réelles avec précision</li>
    <li>Il ne peut se substituer à une évaluation professionnelle</li>
    <li>Les questions sont des exercices d'entraînement originaux, non affiliés à des tests officiels</li>
  </ul>
  
  <p>Ce module n'est pas développé, approuvé ou affilié à SHL, Cubiks, Aon, Korn Ferry ou tout autre éditeur de tests psychométriques.</p>
</div>
```

### Différenciation préparation vs test officiel

| Aspect | Module de préparation | Test officiel |
|--------|----------------------|---------------|
| Objectif | Entraînement, familiarisation | Évaluation, décision |
| Terminologie | "Exercices", "Entraînement" | "Test", "Évaluation" |
| Résultats | "Score indicatif", "Performance" | "Quotient", "Percentile" |
| Normes | Relatives/indicatives | Statistiquement établies |

### Présentation éthique des résultats

**À faire :**
- Présenter les résultats comme indicateurs de **progression**
- Comparer l'utilisateur **à lui-même** dans le temps
- Fournir des **pistes d'amélioration** concrètes
- Utiliser un langage **constructif et encourageant**

**À éviter :**
- Donner des "diagnostics" de personnalité définitifs
- Utiliser des termes cliniques (QI, trouble)
- Comparer à des normes officielles sans contexte
- Créer de l'anxiété avec des scores absolus

---

## Plateformes de référence pour benchmarking

### Leaders du marché professionnel

| Plateforme | Spécialité | Points forts |
|------------|------------|--------------|
| **SHL** | Tests cognitifs et personnalité | 35M assessments/an, validité scientifique |
| **Talogy (ex-Cubiks)** | Tests Logiks, PAPI | Format onglets multiples innovant |
| **Aon (ex-cut-e)** | Tests gamifiés smartPredict | Expérience candidat engageante |
| **AssessFirst** | Intelligence prédictive | 2.8× plus prédictif, 5 min seulement |
| **TestGorilla** | Bibliothèque étendue | 350+ tests, pricing transparent |
| **Korn Ferry** | Leadership assessment | 7 Signposts of Leadership |

### Ressources de préparation gratuites

- **JobTestPrep** : PrepPacks pour tous les providers majeurs
- **Assessment-training.com** : Tests SHL, Cubiks, Kenexa
- **WikiJob** : 19 tests gratuits avec explications
- **GraduatesFirst** : Créé par ex-développeurs SHL
- **SHL Direct** : Tests de pratique officiels

### Tendances 2025

- **Gamification** : +40% d'engagement candidat, marché à $48B d'ici 2029
- **IA dans l'assessment** : 75% des entreprises intégreront l'IA recrutement
- **Tests adaptatifs** : Difficulté s'ajuste en temps réel
- **Video interviews** : Analyse des expressions, ton, langage

---

## Structure JSON complète pour banque de questions

```json
{
  "quiz": {
    "id": "preparation-complete-001",
    "title": "Module Complet de Préparation aux Tests",
    "version": "1.0.0",
    "settings": {
      "timeLimit": 3600,
      "shuffleQuestions": true,
      "shuffleAnswers": true,
      "showFeedback": "after_each",
      "allowReview": true,
      "passingScore": 60
    },
    "categories": [
      { "id": "personality", "name": "Tests de Personnalité", "weight": 0.15 },
      { "id": "logical", "name": "Raisonnement Logique", "weight": 0.20 },
      { "id": "verbal", "name": "Raisonnement Verbal", "weight": 0.20 },
      { "id": "numerical", "name": "Raisonnement Numérique", "weight": 0.20 },
      { "id": "sjt", "name": "Mises en Situation", "weight": 0.15 },
      { "id": "technical", "name": "Tests Techniques", "weight": 0.10 }
    ],
    "questions": []
  },
  "metadata": {
    "createdAt": "2025-01-24",
    "language": "fr",
    "disclaimer": "Module de préparation - Non validé scientifiquement"
  }
}
```

---

## Conclusion et recommandations

La création d'un module de préparation aux tests de recrutement efficace repose sur trois piliers fondamentaux. Premièrement, la **fidélité aux formats réels** : reproduire les types de questions (matrices, SJT, in-basket) avec des structures JSON standardisées permet une préparation pertinente. Deuxièmement, une **UX engageante** intégrant gamification, feedback immédiat et progression visible maintient la motivation des utilisateurs. Troisièmement, le **respect du cadre légal** implique un positionnement clair comme outil de préparation avec stockage local privilégié.

Les recherches montrent que la pratique augmente les scores de **40 à 80%**. Un module bien conçu, couvrant les tests cognitifs, de personnalité et de mise en situation, avec une progression adaptative et des explications pédagogiques, offre une valeur réelle aux candidats tout en respectant les exigences éthiques et réglementaires.
