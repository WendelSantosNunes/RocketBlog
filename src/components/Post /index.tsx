import postImg2 from '../../assets/post-2.png'
import postImg3 from '../../assets/post-3.png'
import postImg4 from '../../assets/post-4.png'
import { Container } from './styles'



export function Post(){
    const descriptions = [
        {id:1, description:'10 dicas para conseguir a vaga desejada', img: postImg2},
        {id:2,description:'Deixe seu código mais semântico com essas dicas', img: postImg3},
        {id:3,description:'Use essas dicas nas suas aplicações mobile', img: postImg4}
    ]

    return (
        <Container>
            {
                descriptions.map((item) => {
                    return (
                        <div key={item.id} className="content-size">
                            <div>
                                <img src={item.img} alt="Post 1" />
                                <span>Janeiro 04, 2022</span>
                            </div>
                            <h2>{item.description}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
                        </div>
                    )
                })
            }
        </Container>
    )
}