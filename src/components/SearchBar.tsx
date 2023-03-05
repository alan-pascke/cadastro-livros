export interface SearchBarProps{
    icon: any
    setItem: (e: any) => void
    item?: any
}

export default function SearchBar(props: SearchBarProps){
    return(
        <div className="flex justify-center items-center">
            <form className="flex justify-center rounded-l-xl overflow-hidden">
                <input 
                    type="text" 
                    placeholder="pesquisar..." 
                    className="text-black outline-none bg-gray-300 pl-5 py-1 xs:w-36 sm:w-72"
                    value={props.item}
                    onChange={(e)=> props.setItem(e.target.value)}
                    /> 
            </form>
            <div className="bg-gray-400 p-1 rounded-r-xl">{props.icon}</div>
        </div>  
    )
}