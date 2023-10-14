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
            <div data-aos="fade-up" className="space-x-5 text-center">
                <span className="uppercase text-[#E2012D] md:text-6xl text-5xl font-semibold font-oswald">Our</span>
                <span className="uppercase text-[#091022] md:text-6xl text-5xl font-semibold font-oswald">Service</span>
            </div>
            <div className="px-5 md:px-0 pt-10 pb-40 grid md:grid-cols-2 gap-7 max-w-[1200px] mx-auto">
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