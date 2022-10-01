import './style.css'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Circle = () => {

    const {id} = useParams();

    const colors = ["red", "green", "yellow", "orange", "blue", "grey"]

    const maxXPosition = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    const maxYPosition = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const [circls, getCircls] = useState([]);

    const getCircle = () => {
        let result = Object.assign([]);
        for (let i = 0; i < id; i++) {
            const dCircle = Math.floor(Math.random() * (200 - 50) + 50);

            const colorCircle = colors[Math.floor(Math.random() * colors.length)];

            const xCircle = Math.round(Math.random() * ((maxXPosition - (dCircle / 2)) - (dCircle / 2)) + (dCircle / 2));

            const yCircle = Math.round(Math.random() * ((maxYPosition - (dCircle / 2)) - (dCircle / 2)) + (dCircle / 2));

            result.push({d: dCircle, color: colorCircle, x: xCircle, y: yCircle});
        }
        getCircls(result);
    }

    useEffect(() => {
        getCircle();
    },[])

    return (
            <div className='content'>
                {circls?.map((circle) => (
                    <Link to='/'><div className="circle"
                         style={
                             {width: circle.d,
                                 height: circle.d,
                                 background: circle.color,
                                 left: circle.x,
                                 top: circle.y }
                         } > </div></Link>
                ))}
            </div>
        )
}

export {Circle}