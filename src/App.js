import React, { useState, useEffect } from "react";

function App() {
  var [date, setDate] = useState(new Date());
  const btn = document.getElementById("button");
  const [count, setCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  var getCount = () => {
    var maxNumber = 10;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  };

  const data = [
    {
      id: 1,
      sub: "Python",
      class_count: getCount(),
    },
    {
      id: 2,
      sub: "Python",
      class_count: getCount(),
    },
    {
      id: 3,
      sub: "Python",
      class_count: getCount(),
    },
    {
      id: 4,
      sub: "Python",
      class_count: getCount(),
    },
    {
      id: 5,
      sub: "Python",
      class_count: getCount(),
    },
  ];

  const [details, setDetails] = useState(data);

  function ButtonClicked() {
    const initialText = "Book Now";

    localStorage.setItem("Data", data);

    if (btn.textContent.includes(initialText)) {
      btn.textContent = "Booked";
    } else {
      btn.textContent = initialText;
    }
    setCount(count + 1);
    // setDetails(...data, (details.class_count = details.class_count - 1));
    if (count === 3) {
      alert("You have done maximum bookings for the week");
      setDisabled(true);
      setCount(0);
    }
  }
  return (
    <div className="App">
      <h4 id="time_left">Time Left:</h4>
      <h4 id="txt"> Claim your Free Trial Class</h4>
      <div id="img">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
          id="image"
        />
        <span id="cnt"> Count is : {count}</span>
      </div>
      <h3 id="class_schedule">Class Schedule</h3>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Availability</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, key) => (
            <tr key={key}>
              <td>{detail.sub}</td>
              <td> {date.toLocaleDateString()}</td>
              <td>{date.toLocaleTimeString()}</td>
              <td>{detail.class_count}</td>
              <td>
                <button
                  type="button"
                  id="button"
                  onClick={ButtonClicked}
                  disabled={isDisabled}
                >
                  Book Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
