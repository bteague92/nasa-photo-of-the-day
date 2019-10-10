import React, { useState, useEffect } from "react";
import "./App.css";
import { ImgOne } from "./Atoms/img.js";
import Navbar from "./Molecules/nav.js";
import { DateBar } from "./Atoms/inputs.js";
import axios from "axios";

function App(props) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-10-09`
      )
      .then(response => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <DateBar />
      <ImgOne
        key={photo.hdurl}
        path={photo.url}
        date={photo.date}
        detail={photo.detail}
        para={photo.explanation}
        title={photo.title}
      />
    </div>
  );
}

export default App;
