import React, { useState } from "react";
import { phonesList } from "../Data";
import starImage from "../stars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Cards = () => {
  const [phones, setPhones] = useState(phonesList);

  const search = (e) => {
    let query = e.target.value;

    let filteredPhones = phonesList.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setPhones(filteredPhones);
  };

  return (
    <Container>
      <div className="search--section">
        <h3 style={{ color: "#fff" }}>Discover our exceptional phones</h3>
        <input className="search--input" type="text" onChange={search} />
      </div>
      <div className="cards-container">
        {phones.map((item, index) => {
          return (
            <div className="phone-card" key={index}>
              <img className="phone--image" src={item.image} alt="Phone" />
              <h5 className="phone--name">{item.name}</h5>
              <span className="phone--rating">
                <img src={starImage} width={80} alt="star" />
                {item.rating}
              </span>
              <div className="phone--price-preview">
                <div className="phone--price" style={{fontSize:'14px'}}>{item.price} $</div>
                <div className="phone--preview">
                  <Link to={`/${item.id}`}>
                    <button className="card--previewbtn">Preview</button>
                  </Link>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#ffffff", marginLeft: "5px" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Cards;
