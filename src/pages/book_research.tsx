import { iconePesquisa } from "@/components/Icons";
import Layout from "@/components/Layout";
import Table from "@/components/Table";

export default function BuscarLivros(){

    return(
        <div>
            <Layout>
               <div className="grid justify-center text-center m-[10px_10px]">

                   <Table/>
               </div>
           </Layout>
        </div>
       )
}