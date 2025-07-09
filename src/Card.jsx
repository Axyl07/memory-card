import { useState } from "react";


export default function Card({ weapon,handleScoreIncrement,handleScoreReset }) {

    const [status, setStatus] = useState(false); 
    function handleClick() {
        console.log(weapon.name + " is clicked");
        if (status == false) {
            setStatus(true);
            handleScoreIncrement();
        } else {
            handleScoreReset();
            setStatus(false);
        }
    }
    return (
        <div onClick={handleClick} className="card">
            <div className="cardImg">
                <img src={weapon.img} alt={weapon.name} />
            </div>
            <div className="cardname">
                {weapon.name}
            </div>
        </div>
    )
}