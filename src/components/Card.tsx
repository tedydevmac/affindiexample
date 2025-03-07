import React from "react";
import "./Card.css";
import { FaCartPlus } from "react-icons/fa";
import { addItem } from "../services/shoppingCartService";

interface CardProps {
  itemTitle: string;
  itemDesc: string;
  imgSrc: string;
  daysLater: number;
  price: string;
}

const Card: React.FC<CardProps> = ({
  itemTitle,
  itemDesc,
  imgSrc,
  daysLater,
  price,
}) => {
  const oneWeekLater = new Date();
  oneWeekLater.setDate(oneWeekLater.getDate() + daysLater);
  const formattedDate = oneWeekLater.toLocaleDateString();
  const addToCart = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newItem = {
        id: Math.random(),
        title: itemTitle,
        description: itemDesc,
        price: price,
        quantity: 1,
        image: imgSrc,
      };
      await addItem(newItem);
    } catch (error) {
      alert("There was an error: " + error);
    }
  };
  return (
    <div className="card">
      <img src={imgSrc} className="cardimg" />
      <div className="card-info-row">
        <div className="card-info">
          <div className="card-title">{itemTitle}</div>
          <div className="card-desc">{itemDesc}</div>
        </div>
        <div className="checkout-info">
          <div className="pricecolumn">
            <text className="pricetext">${price}</text>
            <text style={{ userSelect: "none" }}>
              Get it by {formattedDate}
            </text>
          </div>
          <button className="cartbutton" onClick={(e) => addToCart(e)}>
            <FaCartPlus className="carticon" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
