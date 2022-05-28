import { Container, Sections } from "./styles";
import postImg1 from '../../assets/post-1.png'
import { Post } from "../Post ";

export function Content(){
    return (
        <Container>
            <Sections>
                <div className="featuredPublication">
                    <div>
                        <img src={postImg1} alt="Post 1" />
                        <span>Janeiro 04, 2022</span>
                    </div>
                    <h2>Começando no ReactJS em 2022</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
                </div>
                <aside>
                    <div>
                        <span>Janeiro 04, 2022</span>
                        <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                        <p className="separation">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nibh nibh eu in aliquet ut adipiscing neque. 
                            Sed volutpat aenean sit vitae, sed tristique.
                        </p>
                    </div>
                    <div>
                        <span>Janeiro 04, 2022</span>
                        <h2>Veja a evolução do Front-end na prática</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nibh nibh eu in aliquet ut adipiscing neque. 
                        </p>
                    </div>
                </aside>
            </Sections>
            <Post />
        </Container>
    )
}