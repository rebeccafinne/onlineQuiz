var questions = ["Who is the man's best friend?", "Böa kdjsakfjf jfka"];
var answers = ["Dog", "Cat", "Gold fish", "Horse", "a", "b", "c", "d"];
var usedQuestions = [];
var usedAnswers = [];
var correctAnswers = ["Dog", "b"];
var amountCorrect = 0;
var nbrOfQuestionsAnswered = 0;

$(document).ready(function() {
  document.getElementById("nextQuestion").style.display = "none";
    setUp();
});


function setUp(){
  if(questions.length === 0){
    gameFinished();
    return;

  }
  document.getElementById("Question").innerHTML = questions[0];
  setAnswer(questions[0]);
  var tmp1 = questions.shift();
  usedQuestions.push(tmp1);
  for(var i = 0; i < 4; i++){
    var tmp = answers.shift();
    usedAnswers.push(tmp);
  }
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("tryAgain").style.display = "none";


}

function setAnswer(q){
  var startIndex;
  for(var i = 0; i < q.length; i++){
    if(questions[i] == q){
      startIndex = i;
    }
  }
  document.getElementById("a1").innerHTML = answers[startIndex];
  startIndex += 1;
  document.getElementById("a2").innerHTML = answers[startIndex];
  startIndex += 1;
  document.getElementById("a3").innerHTML = answers[startIndex];
  startIndex += 1;
  document.getElementById("a4").innerHTML = answers[startIndex];
  startIndex += 1;

}

function guessMade(clicked_id){
  var answer = document.getElementById(clicked_id).innerHTML;

  for(var i = 0; i < correctAnswers.length; i++){
    if(correctAnswers[i] === answer){
      document.getElementById("feedback").style.display = "block";

      document.getElementById("feedback").style.color = "green";
      document.getElementById("feedback").innerHTML = "You got it right!"
      amountCorrect += 1;
      nbrOfQuestionsAnswered += 1;
      break;
    }else if (i == correctAnswers.length - 1) {
      document.getElementById("feedback").style.display = "block";

      document.getElementById("feedback").innerHTML = "Wrong Answer!"
      document.getElementById("feedback").style.color = "red";
      nbrOfQuestionsAnswered += 1;

    }
  }
  document.getElementById("nextQuestion").style.display = "block";
}

function gameFinished(){
  document.getElementById("feedback").style.display = "none";
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";
  document.getElementById("a4").style.display = "none";
  document.getElementById("Question").style.display = "none";
  document.getElementById("nextQuestion").style.display = "none";

  document.getElementById("heading").innerHTML = "You scored " + amountCorrect + "/" + nbrOfQuestionsAnswered;
  document.getElementById("tryAgain").style.display = "block";


}

function resetGame(){
  for(var i = 0; i < usedQuestions.length; i++){
    var element = usedQuestions.shift();
    questions.push(element);

  }

  for(var j = 0; j < usedAnswers.length; j++){
    var element1 = usedAnswers.shift();
    answers.push(element1);
  }
  document.getElementById("heading").innerHTML = "Welcome to the Quiz!";
  document.getElementById("Question").style.display = "block";

  document.getElementById("a1").style.display = "block";
  document.getElementById("a2").style.display = "block";
  document.getElementById("a3").style.display = "block";
  document.getElementById("a4").style.display = "block";

  setUp();



}
