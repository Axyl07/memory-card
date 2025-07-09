import { useState } from "react";
import Card from "./Card";
import { shuffle } from "./data";
import './Grid.css';

export default function Grid({ weaponsList }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    function resetStatus(weaponsList) {
        weaponsList.forEach((weapon)=>weapon.status = false)
    }
    function handleScoreIncrement() {
        setScore((s) => s + 1);
    }

    function handleScoreReset() {
        setScore(0);
    }

    return (
        <>
        <div className="scoreboard">
                Score : {score} <br />
                High Score : { highScore }
        </div>
        <div className="grid" >
                {
                    weaponsList.map((weapon) =>
                        <Card key={weapon.id} weapon={weapon} handleScoreIncrement={handleScoreIncrement} handleScoreReset={handleScoreReset} score={score} highScore={highScore} setHighScore={setHighScore} shuffleFn={shuffle} weaponsList={weaponsList} resetStatus={ resetStatus } />
                )
            }
        </div>
        </>
        
    )

}