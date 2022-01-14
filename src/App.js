import React from "react";

const api = {
  key: "380126cf6164f0263a553d44aa7507b0",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "Marhc",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="location-box">
          <div className="location">Kremenchuk</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
