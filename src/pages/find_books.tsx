import Layout from "@/components/Layout";
import BooksList from "@/components/BooksList";
import RegistersInterface from "@/core/RegistersInterface";
import axios from 'axios'
import { useRouter } from "next/router";

export default function BuscarLivros(){

    const router = useRouter();
    
    const hendleClick = async (record: RegistersInterface) => {

        const data = {
            id: record.id,
            title: record.title,
            autor: record.autor,
            categories: record.categories
        }
        try {
            const response = await axios.post('/api/hendlerData/?', data)
            router.push({pathname: `/register_books`, query: {data: JSON.stringify(response.data)}});
        } catch (error) {
            
        }
        
    }; 

    return(
        <div>
            <Layout>
               <div className="grid justify-center text-center m-[10px_10px]">
                   <BooksList hendleClick={hendleClick}/>
               </div>
           </Layout>
        </div>
       )
}