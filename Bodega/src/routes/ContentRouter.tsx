import { Route, Routes } from 'react-router-dom'
import { Verified } from './Verified'
import ListarPersonas from '../pages/personas/listado/ListarPersonas'
import { Login } from '../pages/login/Login'

export const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/chelita/login" element={<Login/>} />
            <Route path='chelita' element={<Verified />} >
                <Route path='listado' element={<ListarPersonas />} />
            </Route>
        </Routes>
    )
}
