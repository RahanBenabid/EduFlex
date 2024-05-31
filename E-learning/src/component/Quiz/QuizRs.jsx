import { useRef, useState } from "react";
import React from "react";
import "./Quiz.css";
import { data } from "./rs.js";
const QuizRs = () => {


    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [score, setScore] = useState(0);
    let [lock, setLock] = useState(false);
    let [result, setResult] = useState(false);
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans -1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock === true) {
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((options) => {
                options.current.classList.remove("wrong");
                options.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = ()=>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }
    return (

      <section className="body">
        <div className="Qcontainer">
            <h1>Quiz of javascript</h1>
            <hr />
            {result ? <></> : <>
                <h2>{index + 1}.{question.title}</h2>
                <ul>

                    <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.options[0]}</li>
                    <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.options[1]}</li>
                    <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.options[2]}</li>
                    <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.options[3]}</li>
                </ul>
                <button onClick={next}>Next</button>
                <div className="index">{index + 1} of 10 questions</div>
            </>}
            {result?<>
            <h2>you Scored {score} out of 10</h2>
            <button onClick={reset}>Reset</button>
            </>:<></>}
           
        </div>
        </section>
    )
}
export default QuizRs