import React from 'react';
import MainHome from './component/MainHome/MainHome'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import SignIn from './component/Sign-in_Sign-up/SignIn'
import SignUp from './component/Sign-in_Sign-up/SignUp'
import Coding from './component/Lesson/Coding/Coding';
import Next from './component/Next/Next';
import PHPnext from './component/Next/PHPnext';
import Compnext from './component/Next/Compnext';
import HTMLnext from './component/Next/HTMLnext';
import PythonNext from './component/Next/PythonNext';
import C from './component/Next/C';
import S from './component/Next/SQL';
import ReactNext from './component/Next/ReactNext';
import NodeNext from './component/Next/NodeNext';
import Quiz from './component/Quiz/Quiz';
import Dashboard from './component/Dashboard/Dashboard';
import QuizPython from './component/Quiz/QuizPython'
import Suite from './component/Suite/Suite'
import Ai1 from './component/Next/Ai1';
import Ai2 from './component/Next/Ai2';
import Ai3 from './component/Next/Ai3';
import Cs1 from './component/Next/Cs1';
import Cs2 from './component/Next/Cs2';
import Cs3 from './component/Next/Cs3';
import Reseau1 from './component/Next/Reseau1';
import Reseau2 from './component/Next/Reseau2';
import Reseau3 from './component/Next/Reseau3';
import Ui from './component/Next/Ui';
import Data from './component/Next/Data';
import QuizRs from './component/Quiz/QuizRs';
import CourseTemplate from './component/Next/CourseTemplate';
import Upload from './component/Upload/Upload';
import Disp from './component/Disp/Disp';

function App (){

  return (
    <div className="App">



      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Coding" element={<Coding />} />
          <Route path='/Next' element={<Next></Next>}></Route>
          <Route path='/PHPnext' element={<PHPnext />}></Route>
          <Route path='/Compnext' element={<Compnext />}></Route>
          <Route path='/HTMLnext' element={<HTMLnext />}></Route>
          <Route path='/PythonNext' element={<PythonNext />}></Route>
          <Route path='/C' element={<C />}></Route>
          <Route path='/NodeNext' element={<NodeNext />}></Route>
          <Route path='/ReactNext' element={<ReactNext />}></Route>
          <Route path='/S' element={<S />}></Route>
          <Route path='/Quiz' element={<Quiz />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Suite' element={<Suite/>}></Route>
          <Route path='/Ai1' element={<Ai1/>}></Route>
          <Route path='/Ai2' element={<Ai2/>}></Route>
          <Route path='/Ai3' element={<Ai3/>}></Route>
          <Route path='/Cs1' element={<Cs1/>}></Route>
          <Route path='/Cs2' element={<Cs2/>}></Route>
          <Route path='/Cs3' element={<Cs3/>}></Route>
          <Route path='/Reseau1' element={<Reseau1/>}></Route>
          <Route path='/Reseau2' element={<Reseau2/>}></Route>
          <Route path='/Reseau3' element={<Reseau3/>}></Route>
          <Route path='/Ui' element={<Ui/>}></Route>
          <Route path='/Data' element={<Data/>}></Route>
          <Route path='/QuizPython' element={<QuizPython/>}></Route>
          <Route path='/QuizRs' element={<QuizRs/>}></Route>
          <Route path="/CourseTemplate" element={<CourseTemplate />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Disp" element={<Disp />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App
