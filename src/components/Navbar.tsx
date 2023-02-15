import Link from "next/link"
import { iconeSetaParaBaixo } from "./Icons"

export default function Navbar(){
    return(
        <div className="flex">
                <div className="mr-6 flex hover:text-white">
                    Categorias{iconeSetaParaBaixo}
                </div>
                <div className="mr-6 whitespace-nowrap hover:text-white">
                    <Link href={'/register_books'}>Adicionar Livros</Link>
                </div>
                <div className="whitespace-nowrap hover:text-white">
                    <Link href={'/book_research'}>Buscar Livros</Link>
                </div>
        </div>
    )
}