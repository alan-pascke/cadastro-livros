import { useEffect, useState } from "react";
import { iconeEdicao, iconeLixo, iconePesquisa } from "./Icons"
import RegistersInterface from "@/core/RegistersInterface";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { deleteBook, fetchData } from "services/bookServices";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "services/firebase";


export default function Table() {

    const [records, setRecords] = useState<RegistersInterface[]>([]);
    const [searchBook, setSearchBook] = useState('');
    const [foundBooks, setFoundBooks] = useState<RegistersInterface[]>([]);

    useEffect(() => {
        fetchData(setRecords);
    }, []);

    
       
    const router = useRouter();

    useEffect(()=>{
        const hendleSearch = async () => {
            const data : RegistersInterface[] = [];

            function dataPush(doc: any){
                const {title, autor, categories} = doc.data();
                data.push({
                id: doc.id,
                    title,
                    autor,
                    categories,
                })
            }

            //busca pelo titulo
            const querySnapshotTitle = await getDocs(query(collection(db, 'records'), where('title', '==', searchBook)));
            querySnapshotTitle?.docs.map((doc) => {
                dataPush(doc)
            });

            //busca pelo autor
            const querySnapshotAutor = await getDocs(query(collection(db, 'records'), where('autor', '==', searchBook)));
            querySnapshotAutor?.docs.map((doc) => {
                dataPush(doc)
            });

            //busca pela categoria
            const querySnapshotCategories = await getDocs(query(collection(db, 'records'), where('categories', '==', searchBook)));
            querySnapshotCategories?.docs.map((doc) => {
                dataPush(doc)
            });

            setFoundBooks(data);
        };
        hendleSearch();
    });


    
    const hendleClick = (record: RegistersInterface) =>{
        const query = stringify({
            id: record.id,
            title: record.title,
            autor: record.autor,
            categories: record.categories
        })
        router.push(`/register_books/?${query}`);
    }; 

    function renderHeader(){
        return(
            <tr className=" grid grid-cols-5 items-center p-2 border-b">
                <th className="col-span-1">Título</th>
                <th className="col-span-1">Autor</th>
                <th className="col-span-1">Categoria</th>
                <th className="col-span-2">Ações</th>
            </tr>

        );
    };

    function renderBody(record: any){
        return(
            <tr key={record.id} className={`grid grid-cols-5 items-center p-2 border-b`}>
                <td className="col-span-1">{record.title}</td>
                <td className="col-span-1">{record.autor}</td> 
                <td className="col-span-1">{record.categories}</td> 
                <td className="col-span-2 items-center flex justify-evenly ">
                    <button 
                        onClick={() => {
                        hendleClick(record)
                        }}
                        className="hover:rounded-full hover:bg-green-500 p-1"
                        name="editar"
                        >
                        {iconeEdicao || 'Editar'}
                    </button>
                    <button 
                        onClick={()=> {
                            confirm('Deseja mesmo exluir?') == true?  deleteBook(record) : false 
                        }}
                        className="hover:rounded-full hover:bg-red-500 p-1"
                        >{iconeLixo || 'Excluir'}
                    </button>
                </td>
            </tr>
        )
    }

    return(
            
        <div className="grid grid-cols-1">
            <div className="flex justify-center m-[50px]">
                <form className="flex justify-center rounded-l-xl overflow-hidden">
                    <input 
                        type="text" 
                        placeholder="pesquisar..." className="text-black outline-none bg-gray-300 pl-5 xs:w-36 sm:w-72"
                        value={searchBook}
                        onChange={(e)=> setSearchBook(e.target.value)}
                        /> 
                </form>
                <div className="bg-gray-400 p-1 rounded-r-xl">{iconePesquisa}</div>
            </div>            
            <table className="overflow-hidden rounded-md mb-16">

                <thead className="
                    text-lg 
                    bg-[#04042a]
                    ">
                    {renderHeader()}
                    
                </thead>
                <tbody className="bg-blue-600">
                    {searchBook == ''? records.map((record) => renderBody(record)) 
                        : (foundBooks.map((record) => renderBody(record)))}

                </tbody>
            </table>
        </div>
    )
}