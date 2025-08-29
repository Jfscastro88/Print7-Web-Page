import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgcar1 from '../../assets/images/carousel/veiculos/ve1.jpg';
import imgcar2 from '../../assets/images/carousel/veiculos/ve2.jpg';
import imgcar3 from '../../assets/images/carousel/veiculos/ve3.jpg';
import imgcar4 from '../../assets/images/carousel/veiculos/ve4.jpg';
import imgcar5 from '../../assets/images/carousel/veiculos/ve5.jpg'; 
import imgcar6 from '../../assets/images/carousel/veiculos/ve6.jpg';
import imgcar7 from '../../assets/images/carousel/veiculos/ve7.jpg';
import imgcar8 from '../../assets/images/carousel/veiculos/ve8.jpg';  
import imgcar9 from '../../assets/images/carousel/veiculos/ve9.jpg';
import imgcar10 from '../../assets/images/carousel/veiculos/ve10.jpg';  
import imgcar11 from '../../assets/images/carousel/veiculos/ve11.jpg';
import imgcar12 from '../../assets/images/carousel/veiculos/ve12.jpg';
import imgcar13 from '../../assets/images/carousel/veiculos/ve13.jpg';
import imgcar14 from '../../assets/images/carousel/veiculos/ve14.jpg';
import imgcar15 from '../../assets/images/carousel/veiculos/ve15.jpg';
import imgcar16 from '../../assets/images/carousel/veiculos/ve16.jpg';
import imgcar17 from '../../assets/images/carousel/veiculos/ve17.jpg';
import imgcar18 from '../../assets/images/carousel/veiculos/ve18.jpg';
import imgcar19 from '../../assets/images/carousel/veiculos/ve19.jpg';
import imgcar20 from '../../assets/images/carousel/veiculos/ve20.jpg';
import imgcar21 from '../../assets/images/carousel/veiculos/ve21.jpg';
import imgcar22 from '../../assets/images/carousel/veiculos/ve22.jpg';
import imgcar23 from '../../assets/images/carousel/veiculos/ve23.jpg';  
import imgcar24 from '../../assets/images/carousel/veiculos/ve24.jpg';
import imgcar25 from '../../assets/images/carousel/veiculos/ve25.jpg';  
import imgcar26 from '../../assets/images/carousel/veiculos/ve26.jpg';
import imgcar27 from '../../assets/images/carousel/veiculos/ve27.jpg';  
import imgcar28 from '../../assets/images/carousel/veiculos/ve28.jpg';
import imgcar29 from '../../assets/images/carousel/veiculos/ve29.jpg';  
import imgcar30 from '../../assets/images/carousel/veiculos/ve30.jpg';

const IMAGES = [
{ src: imgcar1, alt: 'CAR #1'}, { src: imgcar2, alt: 'CAR #2'}, { src: imgcar3, alt: 'CAR3 #'}, 
{ src: imgcar4, alt: 'CAR #4'}, { src: imgcar5, alt: 'CAR #5'}, { src: imgcar6, alt: 'CAR #6'},
{ src: imgcar7, alt: 'CAR #7'}, { src: imgcar8, alt: 'CAR #8'}, { src: imgcar9, alt: 'CAR #9'},
{ src: imgcar10, alt: 'CAR #10'}, { src: imgcar11, alt: 'CAR #11'}, { src: imgcar12, alt: 'CAR #12'},
{ src: imgcar13, alt: 'CAR #13'}, { src: imgcar14, alt: 'CAR #14'}, { src: imgcar15, alt: 'CAR #15'},
{ src: imgcar16, alt: 'CAR #16'}, { src: imgcar17, alt: 'CAR #17'}, { src: imgcar18, alt: 'CAR #18'},
{ src: imgcar19, alt: 'CAR #19'}, { src: imgcar20, alt: 'CAR #20'}, { src: imgcar21, alt: 'CAR #21'},
{ src: imgcar22, alt: 'CAR #22'}, { src: imgcar23, alt: 'CAR #23'}, { src: imgcar24, alt: 'CAR #24'},
{ src: imgcar25, alt: 'CAR #25'}, { src: imgcar26, alt: 'CAR #26'}, { src: imgcar27, alt: 'CAR #27'},
{ src: imgcar28, alt: 'CAR #28'}, { src: imgcar29, alt: 'CAR #29'}, { src: imgcar30, alt: 'CAR #30'},
  ];

function CarsPage() {
    return (
      <CategoryPage
        title="Vehicle Customization"
        description="Vehicle customization is a powerful mobile advertising tool: transforming cars, vans, and company fleets into visual communication tools increases brand visibility on every trip."
        images={IMAGES}
        cta={{
          title: 'What we can do for you',
          text: 'We offer full or partial wrapping, adhesive and magnetic applications, and lettering on any type of vehicle, guaranteeing durable materials and professional installation.',
        }}
      />
    );
  }
export default CarsPage;