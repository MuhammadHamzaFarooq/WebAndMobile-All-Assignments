function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
  }
  
  Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
  }
  
  Quiz.prototype.nextQuestion = function() {
    this.currentQuestionIndex++;
  
  }
  
  Quiz.prototype.hasEnded = function() {
    if (this.currentQuestionIndex === this.questions.length)
      return true;
  }
  
  Quiz.prototype.guess = function(guess) {
    var currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.isCorrect(guess)) {
      this.score++;
    }
    this.nextQuestion();
  }
  
  // Define question object
  function Question(question, choices, correct) {
    this.question = question;
    this.choices = choices;
    this.correct = correct;
  };
  
  Question.prototype.isCorrect = function(guess) {
    if (guess === this.correct)
      return true;
  };
  
  var QuizUI = {
  
  
      displayNext : function(){
          if (quiz.hasEnded())
              this.displayScore();
          else{
              this.displayQuestion();
              this.displayChoices();
              this.displayProgress();
          }
  
      },
      displayQuestion: function(){
          var question = quiz.getCurrentQuestion().question;
          this.setText("question",question);
      },
      displayChoices: function(){
          var choices = quiz.getCurrentQuestion().choices;
          for (var i = 0 ; i < choices.length; i++){
              this.setText("choice"+i , choices[i]);
              this.guessHandler("guess"+i,i);
          }
      },
      displayScore : function(){
          var gameOverHTML = "<h1>Game Over</h1>";
          gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
          this.setText("quiz", gameOverHTML);
      },
      setText: function(id,text){
          var element= document.getElementById(id);
          // innerHTML is a property, not function
          element.innerHTML = text;
      },
      displayProgress: function (){
          var questionNo = quiz.currentQuestionIndex;
          this.setText("progress","Question "+(questionNo+1) + " of " + quiz.questions.length);
      },
      guessHandler : function(id,guess){
  
          var choiceButton = document.getElementById(id);
          choiceButton.onclick = function(){
  
              quiz.guess(guess);
              QuizUI.displayNext();
          }
      }
  }
  var question1 = new Question("Who is the current Prime Minister of Pakistan?", ["Irfan Khan", "Arif Alvi", "Imran Khan", "Amir Bhai"], 0);
  var question2 = new Question("Which is the largest city of Pakistan?", ["Islamabad", "Lahore", "Quetta", "Karachi"], 0);
  var question3 = new Question("What is the other name of K2?", ["Tirich Mir", "Godwin Austin", "Nanga Parbat", "Distaghil Sar"], 0);
  var question4 = new Question("Biggest port of Pakistan is?", ["Karachi Port", "Gawadar Port", "Port Grand", "Bin Qasim Port"], 0);
  var question5 = new Question("What is the national animal of Pakistan?", ["Chakor", "Peacock", "Markhor", "Panthar"], 1);
  
  var quiz = new Quiz(
    [question1, question2, question3, question4, question5]
  );
  QuizUI.displayNext();