import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="bg-white pt-32">
            <h2 className="text-5xl font-oswald font-semibold text-[#E2012D] text-center">Our Service</h2>
            <div className="pt-10 pb-40 grid grid-cols-2 gap-x-4 gap-y-7 max-w-[1400px] mx-auto">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;