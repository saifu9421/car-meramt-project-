

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
     import img1 from "../assets/1.jpg"
     import img2 from "../assets/2.jpg"
     import img3 from "../assets/3.jpg"
     import img4 from "../assets/4.jpg"
     import img5 from "../assets/5.jpg"
     import img6 from "../assets/6.jpg"
const Banner = () => {
    return (
        <div className="lg:mt-5  md:mt-5 mt-5 ">
            <Carousel className="">

                <div>
                    <img  className="lg:rounded-lg  md:rounded-lg rounded-lg" src={img1} />
                </div>
                <div>
                    <img className="lg:rounded-lg md:rounded-lg rounded-lg"  src={img2} />
                </div>
                <div>
                    <img className="lg:rounded-lg md:rounded-lg rounded-lg"  src={img3} />
                </div>
                <div>
                    <img className="lg:rounded-lg md:rounded-lg rounded-lg"  src={img4} />
                </div>
                <div>
                    <img className="lg:rounded-lg md:rounded-lg rounded-lg"  src={img5} />
                </div>

                <div>
                    <img className="lg:rounded-lg md:rounded-lg rounded-lg"  src={img6} />
                    <p className="legend"></p>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;