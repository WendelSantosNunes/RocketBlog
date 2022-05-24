import { Container } from "./styles"
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"

export function Header(){
    return(
        <Container>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li className="selected"><a href="@">Home</a></li>
                    <li><a href="@">Sobre</a></li>
                    <li><a href="@">Categorias</a></li>
                    <li><a href="@">Contato</a></li>
                </ul>
            </nav>
            <form>
                <label>
                    <input type="text" name="name" placeholder="Buscar" />
                </label>
                <button>Enviar <img src={search} alt="Search" /></button>
            </form>
        </Container>
    )
}