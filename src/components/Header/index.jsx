import { FiSearch } from 'react-icons/fi'
import { Container, Profile, Search, Brand} from './styles.js'
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <Brand>
                <h1>RocketFilmes</h1>
            </Brand>
             <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>
            <Profile to='/profile'>
                <div>
                    <strong>Guilherme Guimarães</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/guilhermeguimaraesn.png" alt="Foto de perfil do usuário" />
            </Profile>
        </Container>
    )
}