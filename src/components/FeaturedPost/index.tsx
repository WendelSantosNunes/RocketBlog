import { Container } from "./styles";
import arrowRightImg from "../../assets/arrow-right.svg"
import featuredImg from "../../assets/featured-image.png";

export function FeaturedPost(){
    return (
       <Container>
           <div>           
                <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </p>
                <a href="@">Veja mais<img src={arrowRightImg} alt="Arrow Right" /></a>
           </div>
           <img src={featuredImg} alt="Featured" />
       </Container>
    )
}