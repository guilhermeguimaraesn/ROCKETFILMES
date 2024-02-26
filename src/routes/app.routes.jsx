import { Routes, Route } from 'react-router-dom';

import { Create } from '../pages/Create';
import { Details } from '../pages/Details';
import { Home} from '../pages/Home';
import { Profile } from '../pages/Profile';


export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path='/Details/:id' element={<Details/>} />
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
    )
}

