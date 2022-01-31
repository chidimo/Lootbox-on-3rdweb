export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "How many coins are there in this picture?",
    image: "https://images.unsplash.com/photo-1642483160501-a15ef5069431?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=quantitatives-io-yoaDWBZJRcM-unsplash.jpg",
    answers: [
      "Trick question: Just 2!",
      "David Brown",
      "Drive Better",
      "Diane Blue",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which car brand is this logo for?",
    image: "https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=quantitatives-io-kuDDku4EzC4-unsplash.jpg",
    answers: ["Lamborghini", "Lada", "Lotus", "Lexus"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Where in the UK is the MINI plant?",
    image: "https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=quantitatives-io-kuDDku4EzC4-unsplash.jpg",
    answers: ["Oxford", "Cambridge", "London", "Edinburgh"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Which was the first James Bond film to include an Aston Martin?",
    answers: ["Dr No", "From Russia with Love", "Goldfinger", "Thunderball"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What color were all Ferraris originally?",
    answers: ["Yellow", "White", "Blue", "Red"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
