import HomeBanner from "../HomeBanner/HomeBanner";
import Cards from "../Cards/Cards";
import Video from "../Video/Video";
import Foot from "../Foot/Foot";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Cards></Cards>
            <Video></Video>
            <Foot></Foot>
        </div>
    );
};

export default Home;