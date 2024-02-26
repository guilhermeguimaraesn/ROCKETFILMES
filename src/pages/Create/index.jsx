import { FiArrowLeft } from 'react-icons/fi';
import { Container, Title, Content, Form, NotaMovie, NameMovie, Observacao } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { Textarea } from '../../components/Textarea/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { TagItem } from '../../components/Tagitem/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Link } from 'react-router-dom';

export function Create() {
    return (
        <Container>
            <Header />
            <Content>
                <Title>
                    <Link to='/'><FiArrowLeft />Voltar</Link>
                    <h1>Novo Filme</h1>
                </Title>
                <Form>
                    <NameMovie><Input placeholder="Titulo" /></NameMovie>
                    <NotaMovie><Input placeholder="Sua nota (De 0 a 5)" /></NotaMovie>
                    <Observacao><Textarea placeholder="Observação" /></Observacao>
                </Form>
                <Section title="Marcadores">
                    <div className='tags' >
                        <TagItem value=" Drama" />
                        <TagItem isNew placeholder="Nova Tag" />
                    </div>
                </Section>
                <div className="buttons">
                    <Button className='delete' title='Excluir filmes'></Button>
                    <Button title='Salvar alterações'></Button>
                </div>
            </Content>
        </Container>
    )
}