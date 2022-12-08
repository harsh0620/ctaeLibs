import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Secondyear from "./Secondyear";
import Sem4 from "./Sem4"



export default class Secondmain extends Component {
    render() {
        return (
            <div>
                 <Router>
                 <Route path="/second" exact component={Secondyear}/>
                 <Route path="/second/sem3" exact component={Sem4}/>
                
                   

                 </Router>
                
            </div>
        )
    }
}
 