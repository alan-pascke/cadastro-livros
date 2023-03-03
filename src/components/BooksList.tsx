import { useEffect, useState } from "react";
import RegistersInterface from "@/core/RegistersInterface";
import { deleteBook, fetchData, hendleSearchBooks } from "services/bookServices";
import { iconeEdicao, iconeLixo, iconePesquisa } from "@/components/Icons";
import SearchBar from "./SearchBar";



interface BookListInterface{
    hendleClick: any
}

export default function BooksList(props: BookListInterface) {

    const [records, setRecords] = useState<RegistersInterface[]>([]);
    const [searchBook, setSearchBook] = useState('');
    const [foundBooks, setFoundBooks] = useState<RegistersInterface[]>([]);


    useEffect(() => {
        fetchData(setRecords);
    }, []);

    useEffect(()=>{  
        hendleSearchBooks(searchBook,setFoundBooks);
    },[searchBook, setFoundBooks]);
 

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
            <tr key={record.id} className={`grid grid-cols-5 items-center py-1 border-b`}>
                <td className="col-span-1">{record.title}</td>
                <td className="col-span-1">{record.autor}</td> 
                <td className="col-span-1">{record.categories}</td> 
                <td className="col-span-2 items-center flex justify-evenly ">
                    <button 
                        onClick={() => {
                        props.hendleClick(record)
                        }}
                        className="hover:rounded-md hover:bg-green-500 w-[60px]"
                        name="editar"
                        >
                        <div className="grid grid-cols-1">
                            <div className="flex justify-center">
                                {iconeEdicao || 'Editar'}
                            </div>
                            <h3 className="text-white">Editar</h3>
                        </div>
                    </button>
                    <button 
                        onClick={()=> {
                            confirm('Deseja mesmo excluir?') == true?  deleteBook(record) : false 
                        }}
                        className="hover:rounded-md hover:bg-red-500 w-[60px]"
                        >
                        <div className="grid grid-cols-1">
                            <div className="flex justify-center">
                                {iconeLixo || 'Remover'}
                            </div>
                            <h3 className="text-white">Remover</h3>
                        </div>
                    </button>
                </td>
            </tr>
        )
    }

    return(
        <div className="grid grid-rows-6 justify-center items-center mt-[0.65rem]">
            <div className="row-span-1">
                <SearchBar icon={iconePesquisa}/>
            </div>
            {/* <div className="flex justify-center m-[50px]">
                <form className="flex justify-center rounded-l-xl overflow-hidden">
                    <input 
                        type="text" 
                        placeholder="pesquisar..." className="text-black outline-none bg-gray-300 pl-5 xs:w-36 sm:w-72"
                        value={searchBook}
                        onChange={(e)=> setSearchBook(e.target.value)}
                        /> 
                </form>
                <div className="bg-gray-400 p-1 rounded-r-xl">{iconePesquisa}</div>
            </div>             */}
            <table className="row-span-5 overflow-hidden rounded-md mx-4 min-w-[470px] mt-8 text-center">
                <thead className="
                    text-lg
                    bg-[#04042a]
                    ">
                    {renderHeader()}
                    
                </thead>
                <tbody className="bg-blue-600 text-sm text-white">
                    {searchBook == '' ? records.map((record) => 
                    renderBody(record)
                    ) : (
                    foundBooks.map((record) => renderBody(record)))}
                </tbody>
            </table>
        </div>
    )
}