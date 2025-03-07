import React from "react";
import "./Card.css";
import { FaCartPlus } from "react-icons/fa";

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
  const addedToCart = () => {
    alert("Item has been added to cart.");
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
          <button className="cartbutton" onClick={() => addedToCart()}>
            <FaCartPlus className="carticon" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
