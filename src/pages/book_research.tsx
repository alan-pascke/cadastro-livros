import Footer from "@/components/Footer";
import { iconePesquisa } from "@/components/Icons";
import Layout from "@/components/Layout";
import Table from "@/components/Table";

export default function BuscarLivros(){
    return(
        <div>
            <Layout>
               <div className="grid justify-center text-center">
                   <div className="flex justify-center m-[30px_0]">
                       <div className="bg-gray-300 p-1 rounded-l-xl">{iconePesquisa}</div>
                       <input type="text" placeholder="pesquisar..." className="text-black outline-none bg-gray-300 rounded-r-xl xs:w-36 sm:w-72"/> 
                   </div>
                   <Table/>
               </div>
           </Layout>
           <Footer/>
        </div>
       )
}