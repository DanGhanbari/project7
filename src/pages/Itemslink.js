import React, { Component } from "react";
import data from "../data";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

function Itemslink(props) {
  console.log(props.match.params.id);
  const item = data.itemCamera.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}

// class Itemslink extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>CCTVVVVVVVVVVVVVVVVV</h1>
//       </div>
//     );
//   }
// }

export default Itemslink;
