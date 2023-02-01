import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./carousel.scss";

export default function Carousel() {
  const [imgNo, setImgNo] = React.useState(0);
  const [interval, updatedInterval] = React.useState<any>(null);
  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNextImg();
    }, 10000);
  }, []);

  const handleNextImg = () => {
    if (images.length <= imgNo + 1) {
      setImgNo(0);
    } else {
      setImgNo(imgNo + 1);
    }
    console.log(imgNo);
  };

  const handlePrevImg = () => {
    if (imgNo === 0) {
      setImgNo(images.length - 1);
    } else {
      setImgNo(imgNo - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="img-container">
        <img src={images[imgNo]} />
      </div>
      <div className="action-container">
        <IoIosArrowBack onClick={handlePrevImg} />
        <div className="carousel-text-container">
          <h1>More than a resume builder</h1>
          <h6>
            <i>
              Enhance Career Counseling You don’t have to deal with the job
              search alone
            </i>
          </h6>
          <button>Get Started</button>
        </div>
        <IoIosArrowForward onClick={handleNextImg} />
      </div>
    </div>
  );
}

const images = [
  "https://cdn-images.zety.com/images/zety/landings/home/jumbotron-1140@3x.jpg",
  "https://cdn-bfimj.nitrocdn.com/AYZiVYYULnpCOzBEapjCcUYTWKoTHvaR/assets/static/optimized/rev-dd03ada/wp-content/uploads/2022/04/how-long-should-a-resume-be.jpg",
];
