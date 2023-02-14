import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { iconeMenu, iconePesquisa } from "./Icons";
import Sidebar from "./Sidebar";
import Logo from "/public/images/book-logo2.png"

export default function Header(props: any){

    const [sidebar, setSidebar] = useState(false)

    function openClose(){
        if (sidebar === false) {
            setSidebar(true)
        } else{
            setSidebar(false)
        } 
    }
   
    return(
        <div className="relative">
            <div className="
                flex sm:justify-center xs:justify-end
                h-20 z-10 w-full xs:p-9 
                bg-[#04042a]  backdrop-blur-lg
                items-center 
                font-bold
                ">
                <div className="items-center w-28">
                    <Image src={Logo} alt='logo'></Image>
                    {/* <button className="m-1">{iconePesquisa}</button>
                    <input type="text" placeholder="pesquisar..." className="  outline-none focus:bg-white bg-gray-300 rounded-r-xl xs:w-28 sm:w-56"/> */}
                </div>
            </div>

            <div className="flex absolute z-10 top-5 left-4">
                <button 
                    className="px-1.5 py-1.5 hover:rounded-full rounded-full transition hover:bg-white hover:rotate-90 hover:transition "
                    onClick={openClose}
                    >
                    {iconeMenu}    
                </button>
                <Link href={'/'}>
                    <h1 className="ml-7">Biblioteca</h1>
                </Link>
            </div>
    
            <Sidebar sidebar={sidebar} openClose={openClose}></Sidebar>  
        </div>
    )
}