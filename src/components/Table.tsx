import { useEffect, useState } from "react";
import { iconeEdicao, iconeLixo } from "./Icons"
import RegistersInterface from "@/core/RegistersInterface";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { deleteBook, fetchData } from "services/bookServices";


export default function Table() {

    const [records, setRecords] = useState<RegistersInterface[]>([]);

    useEffect(() => {
        fetchData(setRecords);
      }, []);
       
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

    function renderHeader(){
        return(
            <div className="grid grid-cols-5 h-[60px]">
                <tr className="col-span-4 grid grid-cols-3 items-center p-2">
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoria</th>
                </tr>
                <tr className="bg-gray-500 col-span-1 grid grid-cols-2 p-2 items-center">
                    <th>Editar</th>
                    <th>Lixo</th>
                </tr>
            </div>
        )
    };

    function renderBody(){
        return(
            <>
                {records.map((record) => 
                <div key={record.id} className="grid grid-cols-5">
                    <tr className={`col-span-4 grid grid-cols-3 border-b items-center p-2`}>
                        <td>{record.title}</td> 
                        <td>{record.autor}</td> 
                        <td>{record.categories}</td> 
                    </tr>
                    <tr className="col-span-1 grid grid-cols-2 items-center border-b">
                        <td>
                            <button onClick={() => {
                                hendleClick(record)
                            }}>
                                {iconeEdicao}
                            </button>
                        </td>
                        <td>
                            <button 
                                onClick={()=> {
                                    confirm('Deseja mesmo exluir?') == true?  deleteBook(record) : false
                                }}
                                >{iconeLixo}
                            </button>
                        </td>
                    </tr>
                </div>
                )}
            </>
        )
    }


    return(
        <table className="overflow-hidden rounded-md">

            <thead className="
                text-lg 
                bg-[#04042a]
                ">
                {renderHeader()}
                
            </thead>
            <tbody className="bg-blue-500">
                {renderBody()}
            </tbody>
        </table>
    )
}