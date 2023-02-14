import Form from "@/components/Form";
import Layout from "@/components/Layout";

export default function CadastroLivros(){

    return(
        <Layout>
            <div className="flex justify-center text-center items-center mt-20 bg-slate-800">
                <div className="pt-7">
                <h1 className="mb-7 text-3xl">Cadastro de Livros</h1>
                <Form/>
                </div>
            </div>             
        </Layout>
    )
}