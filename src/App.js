import React, { useState } from "react";
import { Table } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  // const getDate = () => {
  //   return new Date();
  // };

  function getDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  //console.log(getDate(new Date(2012, 0, 1), new Date()));

  const getTime = () => {
    return new Date();
  };

  const getCount = () => {
    return 10;
  };

  const [arr, setArr] = useState([
    {
      id: 1,
      sub: "Python",
      date: getDate(),
      time: getTime(),
      class_count: getCount(),
    },
    {},
    {},
    {},
    {},
  ]);

  console.log("wolf", arr);

  return (
    <div className="App">
      <div className="outerContainer">
        <div className="header">
          <h4>Time Left:</h4>
          <h4> Claim your Free Trial Class</h4>

          <div className="image">{/* <img src=""></img> */}</div>
        </div>
        <div>
          <h3>Class Schedule</h3>

          <table>
            <tr>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Availability</th>
              <th> </th>
            </tr>
            <tr>
              <td>Python</td>
              <td>{getDate()}</td>
              <td>04:00 pm - 05:00 pm</td>
              <td></td>
              <td>
                <button type="button">Book Now</button>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td> {`${new Date().toLocaleString()}`}</td>
              <td>04:00 pm - 05:00 pm</td>
              <td></td>
              <td>
                <button type="button">Book Now</button>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td> {`${new Date().toLocaleString()}`}</td>
              <td>04:00 pm - 05:00 pm</td>
              <td></td>
              <td>
                <button type="button">Book Now</button>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td>{`${new Date().toLocaleString()}`}</td>
              <td>04:00 pm - 05:00 pm</td>
              <td></td>
              <td>
                <button type="button">Book Now</button>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td>{`${new Date().toLocaleString()}`}</td>
              <td>04:00 pm - 05:00 pm</td>
              <td></td>
              <td>
                <button type="button">Book Now</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
