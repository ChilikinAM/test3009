import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const colors = ["red", "green", "yellow", "orange", "blue", "grey"];

const Circle = () => {
  const { id } = useParams();

  const maxXPosition = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const maxYPosition = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const [circls, setCircls] = useState([]);

  const getCircle = () => {
    let result = Object.assign([]);
    for (let i = 0; i < id; i++) {
      const dCircle = Math.floor(Math.random() * 150) + 50;
      result.push({
        d: dCircle,
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.round(Math.random() * (maxXPosition - dCircle)),
        y: Math.round(Math.random() * (maxYPosition - dCircle)),
      });
    }
    setCircls(result);
  };

  useEffect(() => {
    getCircle();
  }, []);

  return (
    <div className="content">
      {circls?.map((circle) => (
        <Link
          to="/"
          className="circle"
          style={{
            width: circle.d,
            height: circle.d,
            background: circle.color,
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
    </div>
  );
};

export { Circle };
