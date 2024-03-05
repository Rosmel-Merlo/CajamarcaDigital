import { Route, Routes } from 'react-router-dom'
import { Verified } from './Verified'

export const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/Chelita/Login" element={<>Login</>}/>
            <Route path='chelita' element={<Verified/>}/>


        </Routes>
    )
}
