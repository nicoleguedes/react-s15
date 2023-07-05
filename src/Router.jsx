import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';


const Router = () => {
    return ( 
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path="/" element={<h1>HOME</h1>} />
                <Route path="/sobre" element={<h1>SOBRE</h1>} />
                <Route path="/portifolio" element={<h1>PORTIFOLIO</h1>} />
                <Route path="/contato" element={<h1>CONTATO</h1>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Router;