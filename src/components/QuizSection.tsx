import { useState } from "react";
import { Brain, CheckCircle, XCircle, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é o principal objetivo do phishing?",
      options: [
        "Melhorar a segurança do sistema",
        "Roubar informações pessoais e credenciais",
        "Atualizar softwares automaticamente",
        "Proteger dados sensíveis"
      ],
      correctAnswer: 1,
      explanation: "Phishing é uma técnica de engenharia social usada para roubar dados como senhas e informações bancárias."
    },
    {
      id: 2,
      question: "O que caracteriza uma senha forte?",
      options: [
        "Nome + data de nascimento",
        "Palavra do dicionário",
        "Combinação de letras, números e símbolos com 12+ caracteres",
        "Sequência numérica simples"
      ],
      correctAnswer: 2,
      explanation: "Senhas fortes devem ter pelo menos 12 caracteres, combinando letras maiúsculas, minúsculas, números e símbolos."
    },
    {
      id: 3,
      question: "Qual direito a LGPD garante aos cidadãos?",
      options: [
        "Acessar e solicitar exclusão de seus dados pessoais",
        "Vender dados pessoais livremente",
        "Compartilhar dados sem consentimento",
        "Ignorar políticas de privacidade"
      ],
      correctAnswer: 0,
      explanation: "A LGPD garante diversos direitos, incluindo acesso, correção, exclusão e portabilidade de dados pessoais."
    },
    {
      id: 4,
      question: "Como identificar uma fake news?",
      options: [
        "Acreditar em tudo que está na internet",
        "Verificar a fonte, cruzar informações e usar fact-checkers",
        "Compartilhar imediatamente",
        "Confiar apenas no título"
      ],
      correctAnswer: 1,
      explanation: "É essencial verificar a fonte, buscar outras fontes confiáveis e usar ferramentas de fact-checking antes de compartilhar."
    },
    {
      id: 5,
      question: "Qual é o maior risco ao usar Wi-Fi público?",
      options: [
        "Internet mais lenta",
        "Interceptação de dados por hackers",
        "Bateria descarrega mais rápido",
        "Não há riscos"
      ],
      correctAnswer: 1,
      explanation: "Redes Wi-Fi públicas são frequentemente não criptografadas, permitindo que atacantes interceptem dados transmitidos."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfeito! Você é um expert em cybersegurança! 🏆";
    if (percentage >= 80) return "Excelente! Você domina os conceitos! 🌟";
    if (percentage >= 60) return "Muito bem! Continue estudando! 📚";
    return "Bom começo! Revise as missões e tente novamente! 💪";
  };

  if (quizCompleted) {
    return (
      <section id="quiz" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 card-shadow text-center space-y-6">
            <Trophy className="w-20 h-20 text-warning mx-auto animate-float" />
            <h2 className="text-4xl font-bold">Quiz Concluído!</h2>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-gradient">{score}/{questions.length}</div>
              <p className="text-xl text-muted-foreground">{getScoreMessage()}</p>
            </div>
            <Button 
              onClick={handleRestart}
              className="gradient-primary text-primary-foreground"
              size="lg"
            >
              Tentar Novamente
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section id="quiz" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain className="w-8 h-8 text-primary animate-glow-pulse" />
            <h2 className="text-4xl font-bold">
              Teste seus <span className="text-gradient">Conhecimentos</span>
            </h2>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-12 rounded-full transition-colors ${
                  index === currentQuestion
                    ? "bg-primary"
                    : index < currentQuestion
                    ? "bg-success"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 card-shadow">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-sm">
                Questão {currentQuestion + 1} de {questions.length}
              </Badge>
              <Badge className="bg-success text-success-foreground">
                Pontuação: {score}
              </Badge>
            </div>

            <h3 className="text-2xl font-bold leading-relaxed">{question.question}</h3>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      showCorrect
                        ? "border-success bg-success/10"
                        : showIncorrect
                        ? "border-destructive bg-destructive/10"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {showResult && (
                        <>
                          {isCorrect && <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />}
                          {showIncorrect && <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />}
                        </>
                      )}
                      <span className={showCorrect ? "font-semibold" : ""}>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 animate-scale-in">
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="gradient-primary text-primary-foreground flex-1"
                  size="lg"
                >
                  Confirmar Resposta
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="gradient-secondary text-secondary-foreground flex-1"
                  size="lg"
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
