import Input from "@/components/Input";
import Link from "next/link";

export default function Login(){
    return(
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="flex flex-col rounded-md p-16 h-96 w-1/2 min-w-[300px] max-w-[500px] bg-blue-900">
                <div className="row-span-1 border-b border-blue-500 py-2">
                    <h1 className="flex justify-center">LOGIN</h1>
                </div>
                <div className="mt-8">
                    <form action="">
                        <Input label="E-mail*" type="text" required></Input>
                        <Input label="Senha*" type="password" required></Input>
                    </form>
                    <div className="flex text-xs">
                        <span className="pr-1"> Não possui uma conta? </span>
                        <Link href={'/user_registration'}>
                            <div className="underline italic hover:text-white">
                                Cadastre-se!
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex mt-9 justify-center">
                    <h2>OU ENTRE COM:</h2>
                    
                </div>
            </div>
        </div>
    )
}