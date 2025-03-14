import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";
import {
  getItems,
  removeItem,
  updateItem,
} from "../services/shoppingCartService";

const ShoppingCart: React.FC = ({}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: string;
      quantity: number;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        alert("Error fetching items: " + error);
      }
    };
    fetchItems();
  }, []);
  const handleRemove = async (id: number) => {
    try {
      await removeItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      alert("Error removing item: " + error);
    }
  };
  // cart ui
  const updateQuantity = async (id: number, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    try {
      await updateItem(id, {
        quantity,
      });
    } catch (error) {
      alert("Error updating item: " + error);
    }
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="shopping-cart">
      <button onClick={() => navigate("/auth/callback")} className="back">
        Go Back
      </button>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <span className="item-name">{item.title}</span>
              <span className="item-description">{item.description}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span className="item-price">
                ${parseFloat(item.price).toFixed(2)}
              </span>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
      </div>
      <button className="checkout" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
