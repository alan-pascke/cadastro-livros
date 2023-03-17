import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "services/useAuth";
import Button from "./Button";
import { iconeLogout, iconeMenu } from "./Icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Logo from "/public/images/book-logo2.png"

export default function Header(){
    const {user, logout} = useAuth();
    
    const [sidebar, setSidebar] = useState(false);

    function openClose(){
        if (sidebar === false) {
            setSidebar(true)
        } else{
            setSidebar(false)
        } 
    }
   
    return(
        <div className="bg-[#04042a] h-20 grid grid-cols-2">
                <div className="flex ml-5 items-center h-20">
                    <button 
                        className="px-1.5 py-1.5 hover:rounded-full rounded-full transition hover:bg-white hover:rotate-90 hover:transition 
                        xm:invisible xs:visible"
                        onClick={openClose}
                        >
                        {iconeMenu}    
                    </button>
                        <Link href={'/'}>
                            <div className="flex items-center ml-4 ">
                                <h1>Biblioteca</h1>
                                <Image src={Logo} alt='logo' width={110}></Image>
                            </div>
                        </Link>

                    </div>
                    {user ? (
                        <div className="flex justify-end items-center ">
                            <div className={`
                                xm:visible cell:invisible 
                                flex text-center items-center
                                h-20 
                                font-bold`}>
                                <Navbar/>    
                            </div>
                            <div className="mx-7"> 
                                <Link href={'/'}>
                                    <button className="flex hover:text-white" onClick={logout} type={"button"}>
                                        <div className="mr-1">
                                            {iconeLogout} 
                                        </div>
                                        sair 
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-end items-center mr-8">
                            <Link href={'/login'}>
                                <Button text="Entrar" color="bg-green-500"></Button>
                            </Link>
                        </div>
                        )
                    }
            <div className="xm:invisible xs:visible">
                <Sidebar sidebar={sidebar} openClose={openClose}></Sidebar>  
            </div>
        </div>
    )
}