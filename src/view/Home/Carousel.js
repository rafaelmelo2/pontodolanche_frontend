import { Carousel } from 'react-bootstrap';
import Slide1 from '../../img/hamburguer1.jpg';
import Slide2 from '../../img/hamburguer2.jpg';
import Slide3 from '../../img/hamburguer3.jpg';

function CarouselImgs() {
  const imageStyle = {
    maxHeight: '800px',
    objectFit: 'cover'
  };
  
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImgs;
