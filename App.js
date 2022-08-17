import {useState} from "react";

function App() {
  const questions=[
    {
      questionText:"which is the javascript frontend framework that is used to create single page applications",
      answerOption:[
        {answerText:"node js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        {answerText:"react js",isCorrect:true},
        {answerText:"mongo db",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is the framework of node js ?",
      answerOption:[
        {answerText:"angular js",isCorrect:false},
        {answerText:"express js",isCorrect:true},
        {answerText:"react js",isCorrect:false},
        {answerText:"mongo db",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is the document database of MERN ?",
      answerOption:[
        {answerText:"angular js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        {answerText:"react js",isCorrect:false},
        {answerText:"mongo db",isCorrect:true},
      ],
    },
    {
      questionText:"which among these is a client-side javascript framework ?",
      answerOption:[
        {answerText:"angular js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        {answerText:"react js",isCorrect:true},
        {answerText:"mongo db",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is the premier javascript web server ?",
      answerOption:[
        {answerText:"node js",isCorrect:true},
        {answerText:"express js",isCorrect:false},
        {answerText:"react js",isCorrect:false},
        {answerText:"mongo db",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is the frontend language ?",
      answerOption:[
        {answerText:"angular js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        {answerText:"react js",isCorrect:true},
        {answerText:"mongo db",isCorrect:false},
      ],
    },
    {
      questionText:"Node js is _______ Laguage.",
      answerOption:[
        {answerText:"server side",isCorrect:true},
        {answerText:"client side",isCorrect:false},
        {answerText:"both",isCorrect:false},
        {answerText:"none",isCorrect:false},
      ],
    },
    {
      questionText:"which extension is used to save node js files ?",
      answerOption:[
        {answerText:".node",isCorrect:false},
        {answerText:".js",isCorrect:true},
        {answerText:".txt",isCorrect:false},
        {answerText:".java",isCorrect:false},
      ],
    },
    {
      questionText:"which of the following is used in react.js to increase performance ?",
      answerOption:[
        {answerText:"virtual DOM",isCorrect:true},
        {answerText:"original DOM",isCorrect:false},
        {answerText:"Both",isCorrect:false},
        {answerText:"none",isCorrect:false},
      ],
    },
    {
      questionText:"Who created React js ?",
      answerOption:[
        {answerText:"jordan mike",isCorrect:false},
        {answerText:"jordan walke",isCorrect:true},
        {answerText:"tim lee",isCorrect:false},
        {answerText:"jordon lee",isCorrect:false},
      ],
    }
  ]
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[showScore,setshowScore]=useState(false);
  const[score,setScore]=useState(0);
  const handle=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setshowScore(true)
    }
  }
  return(
    <div className="app">
      {showScore ?(
        <div className="score-section">
          you scored {score} out of {questions.length}
          </div>
      ):(
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion+1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}
          </div>
          <div class="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption) =>(
              <button onClick={() => handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
        </>
      )}
    </div>
  )
}
export default App;
