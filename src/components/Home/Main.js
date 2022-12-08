import React from "react";
import "./Main.css";
import { Card } from "react-bootstrap";
import { HomeItems } from "./HomeItems";

const Main = () => {
  return (
    <div>
      {HomeItems.map((item, index) => {
        return (
          <div className="container cardi " key={index}>
            <a href={item.url}>
              {" "}
              <Card className="bg-dark text-white car">
                <Card.Img src={item.image} alt="Card image" />
                <Card.ImgOverlay>
                  <h1 className={item.cHame}>{item.title}</h1>
                  <p>{item.text}</p>
                </Card.ImgOverlay>
              </Card>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
