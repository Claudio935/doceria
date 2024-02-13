import { useState } from 'react'
import {
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { app } from '../../utils/data/firebase/config';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';

const Login = () => {
    const navigate = useNavigate()
    const [selectUser, setSelectUser] = useState({
        email: '',
        senha: '',
    })
    const auth = getAuth(app);


    const handleLogin = () => {

        const { email, senha } = selectUser

        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, senha)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user)
                        navigate('/admin/addProduto')
                    })

            }
            ).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('ocorreu um erro na autenticação', errorCode, errorMessage)
            });


    }
    return (
        <div className="bg-red-400 min-h-screen min-w-full flex items-center justify-center">
            <div
                className="
            bg-white 
            md:w-1/3
            w-3/4
            flex 
            items-center 
            justify-evenly 
            rounded-lg 
            flex-col 
            p-11 
            shadow-md 
            shadow-slate-950">
                <Input
                    label='E-mail'
                    color='red'
                    onChange={(event) =>
                        setSelectUser((user) => ({ ...user, email: event.target.value }))}></Input>

                <Input
                    label='Senha'
                    color='red'
                    name="senha"
                    type='password'
                    onChange={(event) =>
                        setSelectUser((user) => ({ ...user, senha: event.target.value }))}></Input>
                <button
                    type="submit"
                    onClick={handleLogin}
                    className='
                bg-blue-400 
                hover:bg-blue-500 
                rounded-lg 
                text-white 
                font-bold 
                p-2'>Entrar</button>
            </div>
        </div>
    )
}

export default Login;