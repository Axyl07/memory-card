import Card from "./Card";
export default function Grid({ weaponsList }) {
    return (
        <div className="grid" >
            { 
                weaponsList.map((weapon) =>        
                        <Card key={weapon.id + Math.random()} weapon={weapon} />
                )
            }
        </div>
        
    )

}