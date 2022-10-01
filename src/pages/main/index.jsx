import './style.css'
import {useState} from "react";
import {Link} from "react-router-dom";

const Main = () => {

    // ADD New BTN

    const [btns, setBtns] = useState([1]);

    const addMoreBtn = () => {
        setBtns([...btns, btns[btns.length - 1] * 4]);
    }
    const addMoreBtn2 = () => {
        setBtns([...btns, btns[btns.length - 1] * 2]);
    }

    return (
        <>
            <div className='content'>
                <div className="btnNum">
                    {btns.map((btn) => (
                        <div key={btn}><Link to={`/${btn}`}><button>{btn}</button></Link></div>
                        ))
                    }
                </div>
                <div className="btnAdd">
                    <button onClick={addMoreBtn}>* 4</button>
                    <button onClick={addMoreBtn2}>* 2</button>
                </div>
            </div>
        </>
    )
}

export {Main}