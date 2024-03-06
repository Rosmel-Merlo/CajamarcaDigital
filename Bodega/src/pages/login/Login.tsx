
import { useState } from 'react'
import InputComponent from '../../components/input/InputComponent'

export const Login = () => {

    const [usuario, setusuario] = useState({ email: "", password: "" })

    return (
        <div style={{ width: '300px' }}
        >
            <pre>{JSON.stringify(usuario, null, 2)}</pre>
            <InputComponent text='Usuario' />
        </div>
    )
}
