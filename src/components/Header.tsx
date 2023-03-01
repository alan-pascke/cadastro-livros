import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { iconeMenu, iconePesquisa } from "../icons/Icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Logo from "/public/images/book-logo2.png"

export default function Header(){

    const [sidebar, setSidebar] = useState(false)

    function openClose(){
        if (sidebar === false) {
            setSidebar(true)
        } else{
            setSidebar(false)
        } 
    }
   
    return(
        <div className="bg-[#04042a]">
            <div className="items-center grid grid-cols-12">
                <div className="flex col-span-5 ml-5 items-center">
                    <button 
                        className="col-span-1 px-1.5 py-1.5 hover:rounded-full rounded-full transition hover:bg-white hover:rotate-90 hover:transition 
                        xm:invisible xs:visible"
                        onClick={openClose}
                        >
                        {iconeMenu}    
                    </button>
                        <Link href={'/'}>
                            <h1 className="ml-7">Biblioteca</h1>
                        </Link>
                        <Image src={Logo} alt='logo' width={110}></Image>

                    </div>
                <div className="
                    col-span-6 
                    flex justify-end text-center items-center
                    h-20 xs:p-9
                    font-bold
                    ">
                    <div className={`xm:visible xs:invisible justify-self-center inline`}>
                            <Navbar/>
                    </div>
                </div>
            </div>
            
            <div className="xm:invisible xs:visible">
                <Sidebar sidebar={sidebar} openClose={openClose}></Sidebar>  
            </div>
        </div>
    )
}