import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Main from "./components/Home/Main"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Firstyear from "./components/Firstyear/Firstyear"
import Secondmain from "./components/Secondyear/Secondmain"
import Cseone from "./components/Cseone/Cseone"
import Selfdev from "./components/Selfdev/Selfdev"
import Contribute from "./components/Contribute/Contribute"
import Error from "./components/Home/Error"

function App() {
  return (
   <div>
     <Navbar />
     <Hero />
     <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/first" component={Firstyear}/>
        <Route path="/second" component={Secondmain}/>
        <Route path="/cse" component={Cseone}/>
        <Route path="/self" component={Selfdev}/>
        <Route path="/contribute" component={Contribute}/>
        <Route path="/error" component={Error}/>
      </Router>   
     <Footer />
   </div>
  );
}

export default App;
