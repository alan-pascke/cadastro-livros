import { iconePesquisa } from "@/components/Icons";
import Layout from "@/components/Layout";
import Table from "@/components/Table";

export default function BuscarLivros(){
    return(
         <Layout>
            <div className="grid justify-center text-center">
                <div className="flex justify-center m-[30px_0]">
                    <div className="bg-gray-300 p-1 rounded-l-xl">{iconePesquisa}</div>
                    <input type="text" placeholder="pesquisar..." className="text-black outline-none bg-gray-300 rounded-r-xl w-64"/> 
                </div>
                <Table/>
            </div>
        </Layout> 
    )
}