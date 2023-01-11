import SimpleImageSlider from "react-simple-image-slider";

const images = [
{ url: "http://localhost/hpsedc/assets/front/images/slider/slide_3.jpg" },

];

const Slider = () => {
    return (
        <div>
          <SimpleImageSlider
            width={'100%'}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
    );
}
export default Slider;