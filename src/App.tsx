import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cardOpen, setCardOpen] = useState(false);
  const [inAnim, setInAnim] = useState(false);
  let messages = [
    "Happy Birthday Mommy",
    "Hope you have the best day and year!",
    "Sending Love From",
    "Nick, Jack, and Charlie.",
  ];

  const delay = (delayInms: number) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  useEffect(() => {
    if (inAnim) return;
    if (cardOpen) {
      setInAnim(true);
      document.querySelector(".heart")?.classList.add("Hidden");
      document.querySelector(".infoText")?.classList.add("Hidden");
      document.querySelector(".lid.one")?.classList.add("open");
      document.querySelector(".lid.two")?.classList.add("open");
      document.querySelector(".letter")?.classList.add("pullout");
      delay(100).then(() => {
        document.querySelector(".letter")?.classList.add("open");
      });
      delay(1000).then(() => {
        document.querySelector(".letter")?.classList.add("recenter");
      });
      delay(5000).then(() => {
        document.querySelector(".footer")?.classList.remove("Hidden");
      });
      delay(5500).then(() => {
        setInAnim(false);
      });
    } else {
      setInAnim(true);
      document.querySelector(".footer")?.classList.add("Hidden");
      document.querySelector(".letter")?.classList.remove("recenter");
      delay(1000).then(() => {
        document.querySelector(".letter")?.classList.remove("pullout");
      });
      delay(1200).then(() => {
        document.querySelector(".letter")?.classList.remove("open");
      });
      delay(3000).then(() => {
        document.querySelector(".lid.one")?.classList.remove("open");
        document.querySelector(".lid.two")?.classList.remove("open");
      });
      delay(5000).then(() => {
        document.querySelector(".heart")?.classList.remove("Hidden");
        document.querySelector(".infoText")?.classList.remove("Hidden");
      });
      delay(5500).then(() => {
        setInAnim(false);
      });
    }
  }, [cardOpen, inAnim]);
  return (
    <div className="App">
      <div className="infoText">
        <p>Click the card</p>
      </div>

      <br></br>

      <div
        className="wrapper"
        onClick={() => {
          setCardOpen(true);
        }}
      >
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="heart">
          <div className="break"></div>
        </div>
        <div className="letter">
          <p>
            Happy Birthday Mommy. We love you tons and hope you have a great day
            and year. XOXO
          </p>
        </div>
      </div>
      <div className="footer Hidden">
        <button
          onClick={() => {
            setCardOpen(false);
          }}
        >
          RESTART
        </button>
      </div>
    </div>
  );
}

export default App;
