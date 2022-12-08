import React, { Component } from "react";
import { m3 } from "./m3";
import { Card } from "react-bootstrap";

export default class Sem4 extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            href="https://drive.google.com/drive/folders/1IMClIhFJTsUtyFxbMgsY4SrnodoGqAFw?usp=sharing"
            target="__blank"
          >
            <Card
              bg="danger"
              className="mb-2"
              style={{ color: "white", textAlign: "center" }}
            >
              <Card.Body>
                <Card.Title>SEM-4 WHOLE MATERIAL AT ONE PLACE</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </div>
        {m3.map((item, index) => {
          return (
            <div key={index}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Card
                      className="mb-2"
                      style={{
                        textAlign: "center",
                        background: "white",
                        color: "#6c63ff",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>{item.subName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a href={item.vidUrl} target="__blank">
                      <Card
                        bg="dark"
                        className="mb-2"
                        style={{ color: "white", textAlign: "center" }}
                      >
                        <Card.Body>
                          <Card.Title>Lectures</Card.Title>
                        </Card.Body>
                      </Card>
                    </a>
                  </div>
                  <div className="col">
                    <a href={item.not1Url} target="__blank">
                      <Card
                        bg="dark"
                        className="mb-2"
                        style={{ color: "white", textAlign: "center" }}
                      >
                        <Card.Body>
                          <Card.Title>Notes1</Card.Title>
                        </Card.Body>
                      </Card>
                    </a>
                  </div>
                  <div className="col">
                    <a href={item.not2Url} target="__blank">
                      <Card
                        bg="dark"
                        className="mb-5"
                        style={{ color: "white", textAlign: "center" }}
                      >
                        <Card.Body>
                          <Card.Title>Notes2</Card.Title>
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
  }
}
