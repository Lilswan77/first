import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => { const id = setInterval(() => { setTime(new Date()) }, 1000);
  return () => clearInterval(id)}, []);
  return time;
};

export const Landing = () => {
  const time = useTime();
  return (
    <landing>
      <div className="contents">
        <nav>
          <h3 className="nav-section">Hello world</h3>
          <h3 className="nav-section one">{time.toLocaleTimeString()}</h3>
        </nav>
        <h1 className="title">
          Hello <br /> World
        </h1>
      </div>
    </landing>
  );
};

export default Landing;
