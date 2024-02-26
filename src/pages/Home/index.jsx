import { Container, Content, NewMovie, Title, Cards } from './styles.js';
import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Title>
                    <h1>Meus Filmes</h1>
                    <Link to='/create'>
                        <NewMovie>
                            <FiPlus />
                            Adicionar Filmes
                        </NewMovie>
                    </Link>

                </Title>
                <Cards>
                    <Movies data={{
                        title: 'Interestelar',
                        tags: [
                            { id: '1', name: 'Drama' },
                            { id: '2', name: 'Ficção Cientifica' }
                        ]
                    }} />
                    <Movies data={{
                        title: 'Interestelar',
                        tags: [
                            { id: '1', name: 'Drama' },
                            { id: '2', name: 'Ficção Cientifica' }
                        ]
                    }} />
                    <Movies data={{
                        title: 'Interestelar',
                        tags: [
                            { id: '1', name: 'Drama' },
                            { id: '2', name: 'Ficção Cientifica' }
                        ]
                    }} />
                </Cards>
            </Content>
        </Container>
    )
}