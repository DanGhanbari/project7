import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* Sliders */}
          <div className="container mt-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/image/1.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/image/2.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/image/3.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        {/* main content */}
        <div>
          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
        {/* cards */}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="#" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Add to Basket
            </a>
          </div>
        </div>
        {/* sign up form */}
        <div className="row bg-light px-0 mx-0">
          <div className="col-md-6 mt-3">
            <div className="pl-3">
              <h4>GET IN TOUCH</h4>
            </div>
            <form action="#" className="needs-validation" noValidate>
              <div className="form-row pl-3">
                <div className="col">
                  <label htmlFor="validationCustom01" />
                  <input
                    type="text"
                    id="validationCustom01"
                    placeholder="First Name*"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
                <div className="col pl-3">
                  <label htmlFor="surname" />
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Last Name*"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid surname.
                  </div>
                </div>
              </div>
              <div className="pl-3">
                <label htmlFor="email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div className="form-row pl-3">
                <div className="col">
                  <label htmlFor="phone" />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone*"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid phone number.
                  </div>
                </div>
                <div className="col pl-3">
                  <label htmlFor="company" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="pl-3">
                <label htmlFor="message" />
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message*"
                  className="form-control"
                  required
                  defaultValue={""}
                />
                <div className="invalid-feedback">
                  Please provide a valid message.
                </div>
              </div>
              <div className="pl-3 mb-2 mt-3">
                <button type="submit" className="btn btn-secondary btn-sm">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          {/* <form name="ShoppingList">
      <fieldset>
          <legend>Shopping cart</legend>
          <label>Item: <input type="text" name="name"></label>
          <label>Quantity: <input type="text" name="data"></label>
  
          <input type="button" value="Save"   onclick="SaveItem()">
          <input type="button" value="Update" onclick="ModifyItem()">
          <input type="button" value="Delete" onclick="RemoveItem()">
      </fieldset>
      <div id="items_table">
          <h2>Shopping List</h2>
          <table id="list"></table>
          <label><input type="button" value="Clear" onclick="ClearAll()">
          * Delete all items</label>
      </div>
  </form> */}
        </div>
      </div>
    );
  }
}
export default Home;
