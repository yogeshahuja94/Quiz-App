  interface Question {
    question: string;
    options: string[];
    answer: string;
  }

  const questions: Question[] = [
    { question: "What is the capital of France?",
       options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris" 
    },

    { question: "What is 2 + 2?",
       options: ["3", "4", "5", "6"],
        answer: "4" 
    },

    { question: "What is the largest planet in our solar system?",
       options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter" 
    },

    { question: "Who wrote 'Hamlet'?",
       options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare" 
    },

    { question: "What is the boiling point of water?",
       options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C" 
    },

    { question: "Which element has the chemical symbol 'O'?",
       options: ["Gold", "Oxygen", "Osmium", "Iron"],
        answer: "Oxygen" 
    },

    { question: "How many continents are there?",
       options: ["5", "6", "7", "8"],
      answer: "7" 
    },

    {question: "What is the capital of Japan?",
     options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      answer: "Tokyo" 
    },

    {question: "Who discovered gravity?",
     options: ["Newton", "Einstein", "Galileo", "Hawking"],
      answer: "Newton" 
    },

    {question: "What is the chemical formula for water?",
     options: ["H2O", "CO2", "O2", "NaCl"], 
     answer: "H2O" 
    },

    {question: "Which ocean is the largest?",
     options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific" 
    },

    {question: "What is the square root of 64?",
     options: ["6", "7", "8", "9"],
      answer: "8" 
    },

    {question: "What is the capital of Italy?",
     options: ["Rome", "Venice", "Milan", "Florence"],
      answer: "Rome" 
    },

    {question: "Who painted the Mona Lisa?",
     options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
      answer: "Da Vinci" 
    },

    {question: "How many legs does a spider have?",
     options: ["6", "8", "10", "12"],
      answer: "8" 
    },

    {question: "What is the tallest mountain in the world?",
     options: ["K2", "Everest", "Kilimanjaro", "Denali"],
      answer: "Everest" 
    },

    {question: "What is the chemical symbol for gold?",
     options: ["Ag", "Au", "Pb", "Fe"],
      answer: "Au" 
    },

    {question: "What is the speed of light?",
     options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "500,000 km/s"],
      answer: "300,000 km/s" 
    },

    {question: "What is the main gas found in Earth's atmosphere?",
     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Nitrogen" 
    },

    { question: "How many players are in a soccer team?",
       options: ["9", "10", "11", "12"],
        answer: "11" 
    },

    { question: "Which country is known as the Land of the Rising Sun?",
       options: ["China", "Japan", "Korea", "Thailand"],
        answer: "Japan" 
    },

    { question: "What is the smallest planet in the solar system?",
       options: ["Mars", "Mercury", "Venus", "Pluto"],
        answer: "Mercury" 
    },

    { question: "Which blood type is the universal donor?",
       options: ["A", "B", "O", "AB"],
        answer: "O" 
    },

    { question: "How many bones are in the human body?",
       options: ["200", "206", "212", "218"],
        answer: "206" 
    }, 
  ];

    export default questions;