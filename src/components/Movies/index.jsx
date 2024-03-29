/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Tag  } from "../Tag";

export function Movies({ data, ...rest }) {
    return (
        <Container to='/details/1 ' {...rest}>
            <h1>{data.title}</h1>

            <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>

            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}