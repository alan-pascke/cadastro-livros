import RegisterForm from "@/components/RegisterForm";
import Layout from "@/components/Layout";

export default function CadastroLivros(){

    return(
        <div>
            <Layout>
                <div className="flex justify-center m-16">
                    <div className="p-[80px_120px] bg-gradient-to-t from-[#02025f] via-[#04042a] to-[#04042a]  rounded-xl">
                        <h1 className="text-3xl pb-12">Cadastro de Livros</h1>
                        <RegisterForm/>
                    </div>
                </div>             
            </Layout>
        </div>
    )
}