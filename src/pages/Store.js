import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

class Store extends React.Component {
  render() {
    return (
      <div>
        <section className="container content-section">
          <h2 className="section-header">CAMERA</h2>
          <div className="shop-items">
            {data.itemCamera.map((item) => (
              <div className="shop-item">
                <Link to={"item/" + item._id}>{item.name} </Link>
                <Link to={"item/" + item._id}>
                  <img className="shop-item-image" src={item.image} alt="#" />
                </Link>
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
            {data.itemDVR.map((item) => (
              <div className="shop-item">
                <span className="shop-item-title">{item.name}</span>
                <img className="shop-item-image" src={item.image} alt="#" />
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
            {/* <div className="cart-row">
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
            </div> */}
            {/* <div className="cart-row">
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
            </div> */}
          </div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">£ 0</span>
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
