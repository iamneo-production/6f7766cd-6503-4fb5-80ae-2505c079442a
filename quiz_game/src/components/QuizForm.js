import React from 'react';
import {useGlobalContext} from "../context";


const QuizForm = () => {
    const {quiz, handleChange, handleSubmit,error} = useGlobalContext();
    return (
        <section className="quiz quiz-small">
        <form>
            <h2 style={{marginBottom: "2rem", textAlign:'center'}}>Quiz Game</h2>
          
          
            <div className="mb-3">
                <label className="form-label"   form="category">Category</label>
               <select 
               className="form-select"
               name="category"
               id="category"
               value={quiz.category}
               onChange={handleChange}
               >  
               <option value="spports">sports</option>
               <option value="history">history</option>
               <option value="politics">politics</option>
               </select>
            </div>



            
            {error &&(
                <p className="error">
                    Can't generate questions , plese try other options
                </p>
            )}
            <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary start-btn"
            >
            Start
            </button>
        </form>
       
        </section>
    );
};


export default QuizForm;