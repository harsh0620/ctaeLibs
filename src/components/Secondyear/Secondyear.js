import React from "react";
import { SecondItems } from "./SecondItems";
import "./Secondyear.css";
import { Card } from "react-bootstrap";
const Secondyear = () => {
  return (
    <div>
      {SecondItems.map((item, index) => {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div
                  className={
                    item.subI === "2" ? "show col-lg-6" : "show1 col-lg-6"
                  }
                >
                  <a href={item.subUrl} target="__blank">
                    <Card bg="secondary" className="mb-2">
                      <Card.Body>
                        <Card.Title>{item.subName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </div>
                <div
                  className={
                    item.subI === "1" ? "show col-lg-6" : "show1 col-lg-6"
                  }
                >
                  <a href={item.subUrl} target="__blank">
                    <Card bg="info" className="mb-2">
                      <Card.Body>
                        <Card.Title>{item.subName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Secondyear;
