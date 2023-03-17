import RegisterForm from "@/components/RegisterForm";
import Layout from "@/components/Layout";
import { useAuth } from "services/useAuth";
import AuthRoute from "@/components/AuthRouteProps";

export default function CadastroLivros(){

    const {user} = useAuth();

    return(
        <div>
            {!user ? (
                <div className="flex justify-center">
                    Faça o login....
                </div>
            ) : (
                <AuthRoute>
                    <Layout>
                        <div className="flex justify-center mt-12">
                            <div className="p-[80px_120px] text-center bg-gradient-to-t from-[#02025f] via-[#04042a] to-[#04042a]  rounded-xl">
                                <h1 className="text-3xl">Cadastro de Livros</h1>
                                <RegisterForm/>
                            </div>
                        </div>             
                    </Layout>
                </AuthRoute>
                )
            }
        </div>
    )
}