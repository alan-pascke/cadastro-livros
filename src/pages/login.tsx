import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignInEmailAndPassword } from "auth/authEmailPassword";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login(){

    const router = useRouter()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="flex flex-col rounded-md p-16 w-1/2 min-w-[300px] max-w-[500px] bg-blue-900">
                <div className="row-span-1 border-b border-blue-500 py-2">
                    <h1 className="flex justify-center">LOGIN</h1>
                </div>
                <div className="mt-8">
                    <form onSubmit={(e)=>{SignInEmailAndPassword(e, email, password, router)}}>
                        <Input 
                            label="E-mail*" 
                            placeholder={'josé@email.com'}
                            type="email" 
                            value={email} 
                            onChange={(e: any)=> {setEmail(e.target.value)}}  
                            required>
                        </Input>
                        <Input 
                            label="Senha*" 
                            placeholder={'min 6 caracteres'}
                            type="password" 
                            value={password} 
                            onChange={(e: any)=> {setPassword(e.target.value)}} 
                            required>
                        </Input>
                    <div className="flex text-xs">
                        <span className="pr-1"> Não possui uma conta? </span>
                        <Link href={'/user_registration'}>
                            <div className="underline italic hover:text-white">
                                Cadastre-se!
                            </div>
                        </Link>
                    </div>
                        <div className="flex justify-center mt-8">
                            <Button color="bg-green-500" text="Entrar" type="submit"/>
                        </div>
                    </form>
                </div>
                <div className="flex mt-9 justify-center">
                    <h2>OU ENTRE COM:</h2>
                    
                </div>
            </div>
        </div>
    )
}