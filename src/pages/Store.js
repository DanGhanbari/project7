import React, { Component, useState, useEffect } from "react";
import axios from "axios";

class Store extends React.Component {
  render() {
    const [items, setItem] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get("/");
        setItem(data);
        fetchData();
      };
      return () => {
        //
      };
    }, []);

    return (
      <div>
        <section className="container content-section">
          <h2 className="section-header">CAMERA</h2>
          <div className="shop-items">
            {items.map((item) => (
              <div className="shop-item">
                <span className="shop-item-title">{item.name}</span>
                <img className="shop-item-image" src={item.image} />
                <div className="shop-item-details">
                  <span className="shop-item-price">£{item.price}</span>
                  <button
                    className="btn btn-primary shop-item-button"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container content-section">
          <h2 className="section-header">DVR</h2>
          <div className="shop-items">
            {items.map((item) => (
              <div className="shop-item">
                <span className="shop-item-title">{item.name}</span>
                <img className="shop-item-image" src={item.image} />
                <div className="shop-item-details">
                  <span className="shop-item-price">£{item.price}</span>
                  <button
                    className="btn btn-primary shop-item-button"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container content-section">
          <h2 className="section-header">CART</h2>
          <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>
            <span className="cart-price cart-header cart-column">PRICE</span>
            <span className="cart-quantity cart-header cart-column">
              QUANTITY
            </span>
          </div>
          <div className="cart-items">
            <div className="cart-row">
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src="#"
                  width={100}
                  height={100}
                />
                <span className="cart-item-title">Album 1</span>
              </div>
              <span className="cart-price cart-column">£19.99</span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  defaultValue={1}
                />
                <button className="btn btn-danger" type="button">
                  REMOVE
                </button>
              </div>
            </div>
            <div className="cart-row">
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src="#"
                  width={100}
                  height={100}
                />
                <span className="cart-item-title">Album 3</span>
              </div>
              <span className="cart-price cart-column">£9.99</span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  defaultValue={2}
                />
                <button className="btn btn-danger" type="button">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">£39.97</span>
          </div>
          <button className="btn btn-primary btn-purchase" type="button">
            PURCHASE
          </button>
        </section>
      </div>
    );
  }
}
export default Store;
