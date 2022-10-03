import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  // ADD New BTN

  const [btns, setBtns] = useState([1]);

  const addMoreBtn = (num) => {
    setBtns([...btns, btns[btns.length - 1] * num]);
  };

  return (
    <>
      <div className="content">
        <div className="btnNum">
          {btns.map((btn) => (
            <Link to={`/${btn}`} key={btn}>
              <button>{btn}</button>
            </Link>
          ))}
        </div>
        <div className="btnAdd">
          <button onClick={() => addMoreBtn(4)}>* 4</button>
          <button onClick={() => addMoreBtn(2)}>* 2</button>
        </div>
      </div>
    </>
  );
};

export { Main };
