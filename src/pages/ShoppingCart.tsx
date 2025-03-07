import React, { useState } from "react";
import "./ShoppingCart.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

const ShoppingCart: React.FC<CartItem> = ({ image }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Item 1",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/150",
      description: "This is a description for item 1.",
    },
    {
      id: 2,
      name: "Item 2",
      price: 20,
      quantity: 2,
      image: "https://via.placeholder.com/150",
      description: "This is a description for item 2.",
    },
    {
      id: 3,
      name: "Item 3",
      price: 30,
      quantity: 3,
      image: "https://via.placeholder.com/150",
      description: "This is a description for item 3.",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={image} alt={item.name} />
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-description">{item.description}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span className="item-price">${item.price.toFixed(2)}</span>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
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
