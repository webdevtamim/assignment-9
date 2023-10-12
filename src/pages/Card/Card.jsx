import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, cover, title, price, desc1 } = card;
    return (
        <div className='card card-compact hover:shadow text-white relative'>
            <img className="w-full" src={cover} alt="Card Image" />
            <div className='card-body bg-[#02010166] absolute bottom-0'>
                <span className='py-1 rounded font-medium'>${price}</span>
                <h2 className="card-title">{title}</h2>
                <p className='pt-1 pb-4'>{desc1}</p>
                <Link to={`${id}`}><button className='py-2.5 pl-12 pr-20 bg-[#E2012D] rounded-tr-full hover:bg-white hover:text-[#091022]'>Explore</button></Link>
            </div>
        </div>
    );
};

export default Card;