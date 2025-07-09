import { useState } from "react";
import Card from "./Card";
export default function Grid({ weaponsList }) {
    const [score, setScore] = useState(0);
    // const [highScore, setHighScore] = useState(0);
    function handleScoreIncrement() {
        setScore((s) => s + 1);
    }
    function handleScoreReset() {
        setScore(0);
    }
    return (
        <>
        <div className="scoreboard">
            Score : {score}
        </div>
        <div className="grid" >
            { 
                weaponsList.map((weapon) =>        
                    <Card key={weapon.id} weapon={weapon} handleScoreIncrement={handleScoreIncrement} handleScoreReset={ handleScoreReset } />
                )
            }
        </div>
        </>
        
    )

}