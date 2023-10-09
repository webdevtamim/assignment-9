import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id, cover, title, price, desc} = card;
    return (
        <div className='card card-compact hover:shadow text-white'>
            <img className="w-full" src={cover} alt="Card Image" />
            <div className='card-body bg-[#02010166] -mt-72'>
                <span className='py-1 px-3 rounded font-medium'>${price}</span>
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <Link to={`${id}`}><button className='py-2.5 px-5 bg-[#E2012D] rounded-tr-full'>Explore</button></Link>
            </div>
        </div>
    );
};

export default Card;