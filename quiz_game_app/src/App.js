import React from 'react';
import {useGlobalContext} from "./context"
import QuizForm from './components/QuizForm';
import Loading from './components/Loading';
import Modal from './components/Modal';

const App = () =>{
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer
  } = useGlobalContext ();

  if(waiting){
    return <QuizForm/>;
  }
  if(loading){
    return <h2>Loding</h2>
  }

  const {question, incorrect_answers, correct_answer} = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if(tempIndex === 3){
    answers.push(correct_answer);
  }else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal/>
      <section className="quiz">
        <p>Correct Answer:{correct}/{index}</p>
        <article className="container ">
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
            <div>
               {answers.map((answer, index) => {
                 return (
                   <>
                   <button
                   key={index}
                   style={{width:"100%", textAlign:"center"}}
                   className="btn btn-info answer-btn"
                   onClick={()=> checkAnswer(correct_answer === answer)}
                   dangerouslySetInnerHTML={{__html: answer}}
                   />
                   </>
                 );              
               })}
            </div>
        </article>
        
      </section>
    </main>
  );
};


export default App;