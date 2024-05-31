import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {



    const [show, setShow] = useState(false);
    const [sshow, ssetShow] = useState(false);
    const [ssshow, sssetShow] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [inputVal, setInputVal] = useState('');
    const [faqList, setFaqList] = useState([]);

    const handleClick = () => {
        setFaqList([...faqList, { title: inputVal }]);
        setInputVal('');
    };

    const handleChange = (event) => {
        setInputVal(event.target.value);
    };

    const toggleAccordionn = (index) => {
        setOpenIndex(index === openIndex ? null : index);
        sssetShow(!ssshow);
    };
    const toggleAccordion = () => {
        setShow(!show);
    };
    const togggleAccordion = () => {
        ssetShow(!sshow);
    };
    const handleDelete = (index) => {
        const updatedFaqList = [...faqList];
        updatedFaqList.splice(index, 1);
        setFaqList(updatedFaqList);
     
        if (openIndex === index) {
            setOpenIndex(null);
        }
    }
    return (
        <section id="faqq" className="faqs">
            <h2 id="faqt">Frequently asked questions</h2>
            <div className="container faq-container">
                <article className={`faq ${sshow ? 'open' : ''}`} onClick={togggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${sshow ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${sshow ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>How do i know the right courses for me?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>Why would i choose this E-learning site instead of the others ?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>Which is the best way of study?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>Does the certificate given here will help me get a job ?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>Does the teacher here have a lot of experience?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>How can i get started?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>From where i start studing?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                <article className={`faq ${show ? 'open' : ''}`} onClick={toggleAccordion}>
                    <div className="faq-icon">
                        <img className={`faq-icon ${show ? 'hide' : ''}`} src="icons8-plus-48.png" alt="Expand" />
                        <img className={`faq-icon ${show ? '' : 'hide'}`} src="icons8-minus-48.png" alt="Collapse" />
                    </div>
                    <div className="question-answer">
                        <h4>How do i know the right courses for me?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, cum laboriosam officia, tenetur perspiciatis
                            soluta similique amet quis dolores ut, deserunt quibusdam!
                            Consectetur sunt asperiores qui laborum illo, ullam debitis!
                        </p>
                    </div>
                </article>
                {faqList.map((faq, index) => (
                    <article key={index} className={`faq ${openIndex === index ? 'open' : ''}`} onClick={() => toggleAccordionn(index)}>
                        <div className="faq-icon">
                            <img className={`faq-icon ${ssshow ? '' : 'hide'}`} src="icons8-plus-48.png" />
                            <img className={`faq-icon ${ssshow ? 'hide' : ''}`} src="icons8-minus-48.png" />
                        </div>
                        
                        <div className="question-answer">
                            <h4>{faq.title}</h4>
                            <p>
                                There is no answer yet
                            </p>
                        </div>
                        <button className="supp" onClick={(event) => {
                            event.stopPropagation();
                            handleDelete(index);
                        }}>X</button>
                    </article>
                ))}

            </div>
            <div className="iw">
            <input className="search"
                type="text"
                placeholder="Ask your question"
                value={inputVal}
                onChange={handleChange}
            />
            <button className="button" onClick={handleClick}>Submit</button>
            </div>
        </section>
    );
}
// const [show, setshow] = useState(false);
// const [inputVal, setInputVal] = useState('');
// const [faqList, setFaqList] = useState([{ faq: "" }]) //, { faq: "" }
// function handlclick(event) {
//     setshow(show => !show);
//     setInputVal(event.target.value);
// }

// const handlchange = (event) => {
//     setInputVal(event.target.value);
// };

// const handleAdd = () => {
//     const abc = [...faqList, []]
//     setFaqList(abc)

// }

// const handledelet = () => {
//     const deletVal = [...faqList]
//     deletVal.splice(i, 1)
//     setFaqList(deletVal)
// }



// let change = show ? 'open' : '';
// let plus = show ? 'hide' : ''
// let minus = show ? '' : 'hide';




// return (<section className="faqs">
//     <h2>Frequenty asked question</h2>
//     <div className="container faq-container">

//         {faqList.map((data, index) => {
//             return (<>
//                 <article htmlfor="faq" className={`faq ${change}`} onClick={handlclick}>
//                     {/* <button className="supp" onClick={handledelet}>X</button> */}
//                     <div className="faq-icon">
//                         <img className={`faq-icon ${plus}`} src="icons8-plus-48.png" />
//                         <img className={`faq-icon ${minus}`} src="icons8-minus-48.png" />
//                     </div>
//                     <div className="question-answer">
//                         <h4>{inputVal}</h4>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                             Provident, cum laboriosam officia, tenetur perspiciatis
//                             soluta similique amet quis dolores ut, deserunt quibusdam!
//                             Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                         </p>
//                     </div>
//                 </article></>)
//         })}

//         <article htmlfor="faq" className={`faq ${change}`} onClick={handlclick}>
//             {/* <button className="supp" onClick={handledelet}>X</button> */}
//             <div className="faq-icon">
//                 <img className={`faq-icon ${plus}`} src="icons8-plus-48.png" />
//                 <img className={`faq-icon ${minus}`} src="icons8-minus-48.png" />
//             </div>
//             <div className="question-answer">
//                 <h4>How do i know the right courses for me?</h4>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Provident, cum laboriosam officia, tenetur perspiciatis
//                     soluta similique amet quis dolores ut, deserunt quibusdam!
//                     Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                 </p>
//             </div>
//         </article>

//         <article className="faq">
//             <div className="faq-icon"></div>
//             <div className="question-answer">
//                 <h4>How do i know the right courses for me?</h4>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Provident, cum laboriosam officia, tenetur perspiciatis
//                     soluta similique amet quis dolores ut, deserunt quibusdam!
//                     Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                 </p>
//             </div>
//         </article>
//         <article className="faq">
//             <div className="faq-icon"></div>
//             <div className="question-answer">
//                 <h4>How do i know the right courses for me?</h4>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Provident, cum laboriosam officia, tenetur perspiciatis
//                     soluta similique amet quis dolores ut, deserunt quibusdam!
//                     Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                 </p>
//             </div>
//         </article>
//         <article className="faq">
//             <div className="faq-icon"></div>
//             <div className="question-answer">
//                 <h4>How do i know the right courses for me?</h4>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Provident, cum laboriosam officia, tenetur perspiciatis
//                     soluta similique amet quis dolores ut, deserunt quibusdam!
//                     Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                 </p>
//             </div>
//         </article>
//         <article className="faq">
//             <div className="faq-icon"></div>
//             <div className="question-answer">
//                 <h4>How do i know the right courses for me?</h4>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Provident, cum laboriosam officia, tenetur perspiciatis
//                     soluta similique amet quis dolores ut, deserunt quibusdam!
//                     Consectetur sunt asperiores qui laborum illo, ullam debitis!
//                 </p>
//             </div>
//         </article>

//     </div>

//     <input type="text" placeholder="Ask your question "
//         onChange={handlchange} />
//     <button onClick={handleAdd}>submit </button>


// </section>);

export default FAQ;