import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link"
import { db } from "services/firebase";
import { iconeEdicao, iconeLixo } from "./Icons"
import RegistersInterface from "@/core/RegistersInterface";
import { useRouter } from "next/router";
import { stringify } from "querystring";


export default function Table() {

    const [records, setRecords] = useState<RegistersInterface[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const data : RegistersInterface[] = [];
            const booksCol = collection(db, 'records');
            const bookSnapshot = await getDocs(booksCol);
            bookSnapshot.forEach((doc)=> {
                const {title, autor, categories} = doc.data()
                data.push({
                id: doc.id,
                    title,
                    autor,
                    categories
                });
            });
            setRecords(data)
        };
    
        fetchData();
      }, []);

      const deleteBook = async ({id} : RegistersInterface) => {
        try {
            await deleteDoc(doc(db, 'records', id))
            location.reload()
            console.log('Document was removed');
        } catch (error) {
            console.log('Error');
        }
        
    }
       

    function renderHeader(){
        return(
            <tr className="grid grid-cols-5 items-center m-2">
                <th>Id</th>
                <th>Título</th>
                <th>Autor</th>
                <th className="mr-2">Categoria</th>
            </tr>
        )
    };

    const router = useRouter();
    const hendleClick = (record: RegistersInterface) =>{
        const query = stringify({
            id: record.id,
            title: record.title,
            autor: record.autor,
            categories: record.categories
        })
        router.push(`/register_books/?${query}`)
    }; 
    
    function renderBody(){
        
        return(
            <>
                {records.map((record) => 
                <tr key={record.id} className={`grid grid-cols-5 border-t-[#d7d7d7] border-2 items-center`}>

                    <td>{record.id}</td>
                    <td>{record.title}</td> 
                    <td>{record.autor}</td> 
                    <td>{record.categories}</td> 
                    <td>
                        <div className="flex justify-center">
                     
                            <Link href={'/register_books'}>
                                <button onClick={() => {
                                    hendleClick(record)
                                    }}>
                                    {iconeEdicao}
                                </button>
                            </Link>
                            <button 
                                className="ml-3"
                                onClick={()=> {
                                    confirm('Deseja mesmo exluir?') == true?  deleteBook(record) : false
                                }}
                                >{iconeLixo}
                            </button>
                        </div>
                    </td>
                   
                </tr>)}
            </>
        )
    }


    return(
        <table className="overflow-hidden rounded-md">

            <thead className="
                text-lg 
                bg-slate-800
                ">
                {renderHeader()}
                
            </thead>
            <tbody className="bg-blue-100">
                {renderBody()}
            </tbody>
        </table>
    )
}