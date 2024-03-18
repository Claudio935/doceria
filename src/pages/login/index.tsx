import { useEffect, useState } from 'react'
import {
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { app } from '../../utils/data/firebase/config';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import { ModalError } from '../../components/modalError';
import { Loading } from '../../components/loading';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/alert';
import { useLogin } from '../../utils/functions/dataFunctions';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectUser, setSelectUser] = useState({
        email: '',
        senha: '',
    })

    const [loading, setLoading] = useState(false)


    const navigation = useNavigate()
    const { login } = useLogin()
    useEffect(() => {

        if (login) {
            navigation('/admin')
        }
    }, [login])
    const auth = getAuth(app);


    const handleLogin = () => {

        const { email, senha } = selectUser
        setLoading(true)
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, senha)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user)
                        setLoading(false)
                        navigate('/admin')
                    }).catch((error) => {
                        setLoading(false)
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('ocorreu um erro na autenticação', errorCode, errorMessage)
                        if (errorCode === 'auth/user-not-found') {
                            dispatch(openModal('usuário não existe'))
                        }
                        if (errorCode === 'auth/invalid-password'
                            || errorCode === 'auth/invalid-email-verified') {
                            dispatch(openModal('email ou senha inválido'))
                        }
                        dispatch(openModal('algum erro aconteceu na autenticação'))
                    });

            }
            )


    }
    return (
        <div className="
        bg-red-400 
        min-h-screen 
        min-w-full 
        flex 
        items-center 
        justify-center 
        relative">
            {loading ? <Loading /> : <div
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
            </div>}
            <ModalError />
        </div>
    )
}

export default Login;