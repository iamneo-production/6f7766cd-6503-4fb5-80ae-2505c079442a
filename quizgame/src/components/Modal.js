import React from "react";
import { useGlobalContext } from "../context";


const Modal = () => {
    const {isModalOpen, closeModal, correct, questions} = useGlobalContext();
    return(
        <div
           className={`${
            isModalOpen ? "modal-container isOpen" : "modal-container"
           }`}
        >
             <div className="modal-content">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {((correct / questions.length) * 100).toFixed(0)}%</span>
          </p>
          <p>
            Correct Answers:<span> {correct}</span>
          </p>
          <p>
            Wrong Answers:<span> {questions.length- correct}</span>
          </p>
          <button
            className="btn btn-success close-btn"
            style={{width: "50%"}}
            onClick={closeModal}>Play Again</button>    
        </div>
        </div>
    );
};

export default Modal;