import { useState } from "react";
import { iconeMenu, iconePesquisa } from "./Icons";

export default function Header(props: any){

    return(
        <div className="
            flex justify-center
            h-20 
            bg-gradient-to-t from-gray-300 
            items-center w-full
            font-bold
            absolute

            ">
            <div className="flex bg-white h-7 rounded-xl overflow-hidden px-1 items-center text-center">
                <span>{iconePesquisa}</span>
                <input type="text" placeholder="pesquisar..." className=" pl-1 outline-none"/>
            </div>
        </div>
        
    )
}