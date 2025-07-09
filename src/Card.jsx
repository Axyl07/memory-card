export default function Card({ weapon }) {

    return (
        <div onClick={console.log("card is clicked")} className="card">
            <div className="cardImg">
                <img src={weapon.img} alt={weapon.name} />
            </div>
            <div className="cardname">
                { weapon.name }
            </div>
        </div>
    )
}