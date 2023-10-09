import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const cardsDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const cardDetails = cardsDetails.find(details => details.id == idInt);
    const { cover, price, title, desc } = cardDetails;
    console.log(cover, price, title, desc);

    return (
        <div className="bg-white">
            <div className="card card-compact max-w-[1400px] mx-auto px-5 md:pt-20 pt-14 md:pb-28 pb-20">
                <figure className="flex-col">
                    <img className="w-full h-auto max-h-[900px] brightness-90 z-10 rounded-3xl" src={cover} alt="card details" />
                </figure>
                <div className="px-0">
                    <h2 className="md:text-4xl text-2xl font-bold text-[#0B0B0B] md:pt-14 pt-10 pb-6">{title}</h2>
                    <p className="text-[#0b0b0bcc] leading-7 font-medium md:text-lg">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;