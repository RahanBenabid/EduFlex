import React, { useState, useEffect } from "react";
import "./FAQ.css";
import axios from "axios";

function FAQ() {
    const [show, setShow] = useState(false);
    const [sshow, ssetShow] = useState(false);
    const [ssshow, sssetShow] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [inputVal, setInputVal] = useState('');
    const [faqList, setFaqList] = useState([]);
    const [userId, setUserId] = useState(null);

    // Fetch QnAs from the backend on component mount
    useEffect(() => {
        const fetchQnAs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/QnA/show');
                setFaqList(response.data);
            } catch (error) {
                console.error('Error fetching QnAs:', error);
            }
        };
        fetchQnAs();

        const userObject = JSON.parse(localStorage.getItem('user'));
        const userId = userObject?._id;
        setUserId(userId);
    }, []);

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3000/QnA/post', {
                question: inputVal,
                userId: userId,
            });
            setFaqList((prevFaqList) => [...prevFaqList, response.data]); // Update faqList state with the new question
            setInputVal('');
        } catch (error) {
            console.error('Error posting QnA:', error);
        }
    };

    const handleChange = (event) => {
        setInputVal(event.target.value);
    };

    const toggleAccordionn = (index) => {
        setOpenIndex(index === openIndex ? null : index);
        sssetShow(!ssshow);
    };

    const handleDelete = async (index, event) => {
        event.stopPropagation();
        try {
            const faqToDelete = faqList[index];
            await axios.delete(`http://localhost:3000/QnA/delete/${faqToDelete._id}`);
            const updatedFaqList = [...faqList];
            updatedFaqList.splice(index, 1);
            setFaqList(updatedFaqList);

            if (openIndex === index) {
                setOpenIndex(null);
            }
        } catch (error) {
            console.error('Error deleting QnA:', error);
        }
    };

    return (
        <section id="faqq" className="faqs">
            <h2 id="faqt">Frequently asked questions</h2>
            <div className="faq-container">
                {faqList.map((faq, index) => (
                    <article key={faq._id} className={`faq ${openIndex === index ? 'open' : ''}`} onClick={() => toggleAccordionn(index)}>
                        <div className="faq-icon">
                            <img className={`faq-icon ${ssshow ? '' : 'hide'}`} src="icons8-plus-48.png" alt="expand" />
                            <img className={`faq-icon ${ssshow ? 'hide' : ''}`} src="icons8-minus-48.png" alt="collapse" />
                        </div>
                        <div className="question-answer">
                            <h4>{faq.question}</h4>
                            <p>{faq.answer || 'There is no answer yet'}</p>
                        </div>
                        <button className="supp" onClick={(event) => handleDelete(index, event)}>X</button>
                    </article>
                ))}
            </div>
            <div className="iw">
                <input
                    className="search"
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

export default FAQ;
