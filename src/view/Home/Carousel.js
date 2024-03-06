import { Carousel } from 'react-bootstrap';
import Slide1 from '../../img/hamburguer1.jpg';
import Slide2 from '../../img/hamburguer2.jpg';
import Slide3 from '../../img/hamburguer3.jpg';

function CarouselImgs() {
  const imageStyle = {
    maxHeight: '700px',
    objectFit: 'cover'
  };
  
  return (
    <Carousel fade className='fade-in'>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="Third slide" style={imageStyle} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImgs;
