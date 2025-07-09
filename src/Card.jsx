import { useState } from "react";


export default function Card({ weapon,handleScoreIncrement,handleScoreReset,score,highScore,setHighScore,shuffleFn,weaponsList }) {

    const [status, setStatus] = useState(false); 
    function handleClick() {
        console.log(weapon.name + " is clicked");
        if (status == false) {
            setStatus(true);
            handleScoreIncrement();
            shuffleFn(weaponsList);
        } else {
            setStatus(false);
            setHighScore(Math.max(highScore,score));
            handleScoreReset();
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