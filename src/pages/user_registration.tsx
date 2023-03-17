import Button from "@/components/Button";
import Input from "@/components/Input";
import { SignUpWithEmailAdnPassword } from "auth/authEmailPassword";
import { useRouter } from "next/router";
import { useState } from "react";


export default function UserRegistration(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    return(
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="flex flex-col rounded-md p-16 w-1/2 min-w-[300px] max-w-[500px] bg-blue-900">
                <div className="row-span-1 border-b border-blue-500 py-2">
                    <h1 className="flex justify-center">Cadastre-se</h1>
                </div>
                <div className="mt-8">
                    <form onSubmit={(e)=>{
                        SignUpWithEmailAdnPassword(e, name, email, password, router)
                        }}>
                        <Input 
                            label="Nome:*" 
                            placeholder={'José'}
                            type="text" 
                            value={name} 
                            onChange={(e: any)=> {setName(e.target.value)}}  
                            required>
                        </Input>
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
                        <div className="flex justify-center mt-4">
                            <Button color="bg-green-500" text="Cadastrar" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}