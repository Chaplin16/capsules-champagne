import React from "react";
import Slider from "react-slick";
import Images from "./Images";
import "slick-carousel/slick/slick.css";

export default function CarouselProp() {
  const sliderSettings = {
    //parametre du slicks
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide:0,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  let gallery = Images.proprietaire;

  return (
    <div className="content">
      <Slider {...sliderSettings}>
        {gallery.map((item, index) => (
          <div key={index} className="card">
            <a href={item.link}>
              <div className="cardImage">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className="styleH3">{item.title}</h3>
              <p className="styleH4">{item.subTitle}</p>
            </a>
              <span className="price">{item.price}€</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// ca fonctionne en tableau mais sans le slide
// class Slick extends Component {
//   constructor() {
//     super();
//     this.state = Images.allImages;
//   }

//   render() {
//     return (
//       <ul className="slider">
//         {this.state.proprietaire.map(function (proprietaire, index) {
//           return (
//             <li key={index}>
//               <img
//                 className="sliderImage"
//                 src={proprietaire.image}
//                 alt={proprietaire.alt}
//               />
//             </li>
//           );
//         }, this)}
//       </ul>
//     );
//   }
// }

// export default Slick;
