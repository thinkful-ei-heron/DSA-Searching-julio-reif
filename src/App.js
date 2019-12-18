import React, { Component } from "react";
import "./App.css";
import { binarySearch, linearSearch } from "./dsa";

export default class App extends Component {
  data = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ];
  handleSubmit(e) {
    e.preventDefault();
    let searchInput = parseInt(document.getElementById("input-linear").value);
    let linearOutput = linearSearch(this.data, searchInput);
    let outputContainer = document.getElementById("linear-output-container");
    outputContainer.innerHTML = `finding ${searchInput} took ${linearOutput} tries`;
  }
  handleSubmitTwo(e) {
    e.preventDefault();
    let searchInput = parseInt(document.getElementById("input-binary").value);
    let inputData = this.data.sort((a, b) => a - b);
    let binaryOutput = binarySearch(inputData, searchInput);
    let outputContainer = document.getElementById("binary-output-container");
    if (binaryOutput[1] === "yes") {
      outputContainer.innerHTML = `it took ${binaryOutput[0]} tries to find ${searchInput}`;
    } else {
      outputContainer.innerHTML = `tried ${binaryOutput[0]} times and didn't find it`;
    }
  }

  render() {
    return (
      <div className="App">
        <section>
          <h3 className="linearSearch">linearSearch</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" placeholder="search" id="input-linear"></input>
            <button type="submit">Search</button>
          </form>
          <section style={{ height: "2rem" }}>
            <p id="linear-output-container"></p>
          </section>
        </section>
        <section>
          <h3 className="binarySearch">binarySearch</h3>
          <form onSubmit={e => this.handleSubmitTwo(e)}>
            <input type="text" placeholder="search" id="input-binary"></input>
            <button type="submit">Search</button>
          </form>
          <section>
            <p id="binary-output-container"></p>
          </section>
        </section>
      </div>
    );
  }
}
