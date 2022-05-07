import "./styles.css";
import Data from "./Data";
import { useState } from "react";
import Accordion from "./Accordion";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <h1>React Accordion</h1>
      <div className="container">
        <div className="accordianBlock">
          {Data.map((val) => {
            return (
              <>
                <Accordion {...val} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
