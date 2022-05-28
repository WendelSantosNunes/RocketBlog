import { Header } from "../Header";
import { FeaturedPost } from "../FeaturedPost"
import {Container} from "./styles"


export function Home(){
    return(
        <Container>
            <Header/>
            <FeaturedPost/>
        </Container>
    )
}