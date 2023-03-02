import Link from "next/link"
import { useState } from "react"
import { iconeMenu, iconeSetaParaBaixo } from "./Icons"

interface sidebarProps{
    sidebar: any
    openClose?: () => void
}


export default function Sidebar(props: sidebarProps){

    const [visible, setVisible] = useState(false)

    function openCloseCategoria(){
        if (visible === false) {
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }

    function listCategoria(){
        return(
            <div className={`bg-[#04042a]  p-[10px_0_10px_20px] transition-transform duration-300`}>
                <ul>
                    <li className="pt-3 pb-3 text-white hover:text-blue-500">Aventura</li>
                    <li className="pt-3 pb-3 text-white hover:text-blue-500">Ação</li>
                    <li className="pt-3 pb-3 text-white hover:text-blue-500">Ficção Científica</li>
                </ul>
            </div>
        )
    }

    function sidebarContent(style?: string){
        return(
            <div className="absolute top-0">

                <div id="sidebar" className={`
                        h-full
                        w-64 z-40
                        bg-gradient-to-t from-[#02025f] via-[#04042a] to-[#04042a] 
                        shadow-[1px_1px_0_#B9D7FF]
                        ${style}
                        transition-transform duration-500
                        fixed
                        rounded-r-xl
                        `}>

                <div className="flex fixed top-5 left-4">
                    <button 
                        className=" px-1.5 py-1.5 hover:rounded-full rounded-full transition hover:bg-white hover:-rotate-90 hover:transition"
                        onClick={props.openClose}>
                        {iconeMenu}    
                    </button>
                    <h1 className="ml-7">Menu</h1>

                </div>

                <div className="bg-white rounded-t-lg overflow-hidden m-28 ml-2 w-[92%] cursor-pointer">
                        <div className="
                        pl-4 pt-4 pb-4 
                        text-xl 
                        hover:shadow-[0_2px_10px_#92B6F1]"
                        onClick={openCloseCategoria}
                        >
                            <div className="flex items-center"> Categorias {iconeSetaParaBaixo} </div>
                        </div>
                        <>
                            {visible === true ? (
                                listCategoria()
                            ) : (
                                false
                            )}
                        </>

                        <Link href={'/register_books'}>
                            <div className="pl-4 pt-4 pb-4 text-xl hover:shadow-[0_2px_10px_#92B6F1]"
                                >Adicionar Livros
                            </div>
                        </Link>
                        <Link href={'/find_books'}>
                            <div className="pl-4 pt-4 pb-4 text-xl hover:shadow-[0_2px_10px_#92B6F1]"
                                >Buscar Livros
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
    
    return(
        <div>        
            {props.sidebar === true ? (
                sidebarContent('translate-x-0')
            ) : (
                sidebarContent('-translate-x-64 fixed')         
            )
        }
        </div>   
    )

}