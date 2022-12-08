import React, { Component } from 'react'
import {SelfdevItems} from "./SelfdevItems"
import "./Selfdev.css"
import {Card} from "react-bootstrap"
export default class Selfdev extends Component {
    render() {
        return (
            <div>
            {SelfdevItems.map((item,index)=>{
                
                return(
                    <div>
                        <div className="container">
                        <div className="row">
                        <div className={item.bookI==='2' ? "show col-lg-6" : "show4 col-lg-6"}>
                        <a href={item.bookUrl} target="__blank">
                            <Card bg="secondary" className="mb-2">
                                <Card.Body>
                                    <Card.Title>
                                    {item.bookName}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            
                            </a>
                        </div>
                        <div className={item.bookI==='1' ? "show col-lg-6" : "show4 col-lg-6"}>
                        <a href={item.bookUrl} exact target="__blank">
                        <Card bg="info" className="mb-2">
                                <Card.Body>
                                    <Card.Title>
                                    {item.bookName}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </div>
        
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}
