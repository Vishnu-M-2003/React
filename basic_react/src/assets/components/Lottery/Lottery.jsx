import { useState } from "react";

export default function Lottery() {
  let [number, setNumber] = useState("");
  let [d, setD] = useState(0);

  let generateTicket = () => {
    d = 0;
    let ticketNumber = Math.floor(Math.random() * 1000);
    ticketNumber < 100 ? generateTicket() : null;
    setNumber(ticketNumber);

    // ticketNumber Sum
    let adddNUmber = () => {
      while (ticketNumber != 0) {
        let ans = ticketNumber % 10;
        d = d + ans;
        ticketNumber = Math.floor(ticketNumber / 10);
      }
      setD(d);
    };
    adddNUmber();
  };

  return (
    <div>
      <>
        {d === 15 ? <h1>Wow you are the winner</h1> : <h1>Lottery</h1>}
        <h3>Your ticket - {number < 100 ? number + 100 : number}</h3>
        <button onClick={generateTicket}>Ticket</button>
      </>
    </div>
  );
}
