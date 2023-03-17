import { NextRouter } from 'next/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from 'services/firebase';


export const SignUpWithEmailAdnPassword = async (e: React.FormEvent<HTMLFormElement>, name: string, email: string, password:string, router: NextRouter) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (e) => {
            await updateProfile(e.user, {displayName: name})
            router.push('/login');
        })
        .catch((error)=>{
            const errorCode = error.code;
            let errorMessage = '';
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Este endereço de e-mail já está em uso.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'O endereço de e-mail é inválido.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'A senha é muito fraca.';
                    break;
                default:
                    errorMessage = 'Ocorreu um erro ao criar o usuário.';
            }
            alert(errorMessage);
        });
}

export const SignInEmailAndPassword  = async (e: React.FormEvent<HTMLFormElement>, email: string, password:string, router: NextRouter) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            router.push('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = '';
            switch (errorCode) {
                case 'auth/user-not-found':
                    errorMessage = 'E-mail não cadastrado';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Senha Errada!';
                    break;
                default:
                    errorMessage = 'Erro ao tentar entrar, verifique se o email ou a senha está correta.'
                    break;
            }
            alert(errorMessage);
        })
}

