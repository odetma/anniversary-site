import { useState } from 'react';
import Head from 'next/head';

const questions = [
  {
    question: "What's my go-to order when I say 'I don't want anything'?",
    options: [
      "A small salad",
      "A burger with extra fries",
      "Just a drink",
      "Everything on the menu"
    ],
    correctAnswer: 2,
    explanation: "We both know it's always a burger with extra fries! 🍔"
  },
  {
    question: "Which of my moods is scarier?",
    options: [
      "Sleepy",
      "Hungry",
      "Both equally terrifying",
      "Neither, I'm always adorable"
    ],
    correctAnswer: 2,
    explanation: "The correct answer is both, but you handle them like a champ! 😊"
  },
  {
    question: "What's our favorite activity?",
    options: [
      "Watching movies",
      "Drinking cocktails",
      "Just being on the sofa doing nothing",
      "All of the above"
    ],
    correctAnswer: 4,
    explanation: "Any time spent together is a perfect moment!"
  },
  {
    question: "How do I react when you say something I don't like?",
    options: [
      "I immediately agree",
      "I cry",
      "First I disagree, but then I give in and agreed you are right",
      "I sleep"
    ],
    correctAnswer: 3,
    explanation: "You know you are right most of the time but I can't help but be stubborn sometimes😅"
  },
  {
    question: "What's my favorite thing about you?",
    options: [
      "Your 🍆 skills",
      "Your caring nature",
      "You are so funny",
      "All of the above and more"
    ],
    correctAnswer: 4,
    explanation: "It's everything about you that makes you perfect! ❤️"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers, answerIndex];
    setSelectedAnswers(newSelectedAnswers);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>How Well Do You Know Me? - 8 Years of Us</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">How Well Do You Know Me?</h1>
          <p className="text-xl text-gray-600">After 8 years, let's see how much you've learned about me!</p>
        </div>

        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <span className="text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-4">
                Your score: {score} out of {questions.length}
              </p>
              <div className="mb-8">
                {score === questions.length ? (
                  <p className="text-green-600 font-bold text-xl">
                    Perfect score! You know me better than I know myself! 🎉
                  </p>
                ) : score >= questions.length / 2 ? (
                  <p className="text-yellow-600 font-bold text-xl">
                    Not bad! You know me pretty well! 😊
                  </p>
                ) : (
                  <p className="text-red-600 font-bold text-xl">
                    Looks like we need more moments together! 
                  </p>
                )}
              </div>
              <button
                onClick={resetQuiz}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"
              >
                Try Again
              </button>
            </div>

            <div className="mt-8 space-y-6">
              {questions.map((q, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    Question {index + 1}: {q.question}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Your answer: {q.options[selectedAnswers[index]]}
                  </p>
                  <p className="text-gray-600">
                    {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 