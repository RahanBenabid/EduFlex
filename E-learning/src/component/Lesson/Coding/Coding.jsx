import React from "react";
import Header from "../../Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { items } from "./CodingData";
import "./Coding.css";

function Coding() {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    let filters = ["Beginer", "Advanced", "Expert"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((card) => card.level === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items]);
        }
    };

    return (
        <>

            <div className="h"><Header /></div>
            <section className="Coding">

                <div className="Code-wrapper Co">
                    <Link to="/PythonNext"> <a>Python</a></Link>
                    <Link to="/Next"> <a>JavaScript</a></Link>
                    <Link to="/SQL"><a>MySql</a></Link>
                    <Link to="/HTMLnext"><a>Html</a></Link>
                    <Link><a>CSS</a></Link>
                    <Link to="/NodeNext"><a>NodeJs</a></Link>
                    <Link to="/PHPnext"><a>PHP</a></Link>
                    <Link to="ReactNext"><a>ReactJs</a></Link>
                    <Link><a>Djongo</a></Link>
                    <Link><a>Java</a></Link>
                    <Link to="/C"><a>C++</a></Link>
                </div>
                <div className="cherche">
                    <h1>
                        Hello,What Do You Want To Learn?
                    </h1>
                    <input type="text" placeholder="Search here" /><button>Search</button>

                </div>
                <div className="bbbbutton-container">

                    {
                        filters.map((category, idx) => (
                            <button
                                onClick={() => handleFilterButtonClick(category)}
                                className={`bbbutton ${selectedFilters?.includes(category) ? "active" : ""
                                    }`}
                                key={`filters-${idx}`}
                            >
                                {category}
                            </button>
                        ))
                    }

                </div>



                <div className="coding-card">

                    {filteredItems.map((card, idx) => (
                        <div key={idx} className="course-card">
                            <img src={card.image} />

                            <div className="category">
                                <div className="subject">
                                    <div className="code">
                                        <h3>{card.title[0]}</h3>
                                        <h3>{card.title[1]}</h3>

                                    </div>

                                </div>
                                <h2>{card.desc[0]}<br />{card.desc[1]}</h2>
                                <div className="course-desc">
                                    <p>{card.level}</p>

                                </div>
                                <Link to={card.link}><button className="button bou">Explore Now</button></Link>
                            </div>
                        </div>
                    ))}


                </div>

                


                <h1 className="mo">Video</h1>
                <div className="coding-card">

                    <div className="course-card">
                        <img src="react.PNG" />

                        
                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Coding</h3>
                                    <h3>ReactJs</h3>
                                </div>

                            </div>
                            <h2>React Course Beginner's Tutorial -<br />  JavaScript Library</h2>
                            <div className="course-desc">
                                <img src="" alt="" /><p>Beginner</p>
                                <button>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="course-card">
                        <img src="gj.PNG" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Coding</h3>
                                    <h3>JavaScript</h3>
                                </div>

                            </div>
                            <h2> JavaScript Programming Course -<br />complete beginner course</h2>
                            <div className="course-desc">
                                <img src="" alt="" /><p>Beginner</p>
                                <button>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="course-card">
                        <img src="node.PNG" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Coding</h3>
                                    <h3>NodeJS</h3>
                                </div>

                            </div>
                            <h2>Use NodeJS for web App Authun -<br />complete beginner course</h2>
                            <div className="course-desc">
                                <img src="" alt="" /><p>Beginner</p>
                                <button>Explore Now</button>
                            </div>

                        </div>
                    </div>
                </div>


                <Footer></Footer>
            </section>
        </>
    )
}
export default Coding 