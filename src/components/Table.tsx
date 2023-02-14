import { iconeEdicao } from "./Icons"

function renderHeader(){
    return(
        <tr className="grid grid-cols-7 gap-2 items-center m-2">
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Pratileira</th>
            <th>Publicação</th>
            <th></th>
        </tr>
    )
}

function renderBody(){
    return(
        <tr className={`grid grid-cols-7 border-t-[#d7d7d7] border-2 items-center`}>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>
                <div>
                    <button>{iconeEdicao}</button>
                </div>
            </td>
        </tr>
    )
}

export default function Table(props: any){
    return(
        <table className="overflow-hidden rounded-md align-middle ">
            <thead className="
                text-lg 
                bg-[#a0a0c2]
                ">
                {renderHeader()}
            </thead>
            <tbody className="bg-slate-200">
                {renderBody()}
                {renderBody()}
            </tbody>
        </table>
    )
}