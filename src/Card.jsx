// import { useState } from "react";
import './Card.css';

export default function Card({ weapon,handleScoreIncrement,handleScoreReset,score,highScore,setHighScore,shuffleFn,weaponsList,resetStatus }) {

    const status = weapon.status;
    function handleClick() {
        console.log(weapon.name + " is clicked");
        if (status == false) {
            weapon.status = true;
            handleScoreIncrement();
            shuffleFn(weaponsList);
        } else {
            weapon.status = false;
            setHighScore(Math.max(highScore,score));
            handleScoreReset();
            resetStatus(weaponsList);
        }
    }
    return (
        <div onClick={handleClick} className="card">
            <div className="cardImg">
                <img width={'360px'} src={weapon.img} alt={weapon.name} />
            </div>
            <div className="cardname">
                {weapon.name}
            </div>
        </div>
    )
}