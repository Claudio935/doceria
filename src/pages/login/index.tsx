import { useState } from 'react'
import {
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { app } from '../../utils/data/firebase/config';
import { useNavigate } from 'react-router-dom';

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
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                    });
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
            h-80 
            w-96 
            flex 
            items-center 
            justify-evenly 
            rounded-lg 
            flex-col 
            p-11 
            shadow-md 
            shadow-slate-950">
                <label
                    htmlFor="email">email</label>
                <input
                    name="email"
                    className="
                border-2 
                border-black 
                rounded-lg 
                p-1"
                    onChange={(event) =>
                        setSelectUser((user) => ({ ...user, email: event.target.value }))}></input>
                <label htmlFor="senha">Senha</label>
                <input
                    name="senha"
                    className="
                border-2  
                border-black 
                rounded-lg 
                p-1"
                    type='password'
                    onChange={(event) =>
                        setSelectUser((user) => ({ ...user, senha: event.target.value }))}></input>
                <button
                    type="submit"
                    onClick={handleLogin}
                    className='
                bg-red-400 
                hover:bg-red-500 
                rounded-lg 
                text-white 
                font-bold 
                p-2'>Entrar</button>
            </div>
        </div>
    )
}

export default Login;