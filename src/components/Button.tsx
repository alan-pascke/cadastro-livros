interface buttonInterface{
    color?: 'bg-blue-500' | 'bg-gray-500'
    text?: string
    action?: ()=> void
    icon?: any
}

export default function Button(props: buttonInterface){

    const color = props.color
    return(
        <div>
            <button className={`
                    flex
                    py-2 px-3 mb-7
                    font-bold
                    text-gray-100 ${props.color}
                    rounded-md
                    transition ease-in-out 
                    hover:-translate-y-1 hover:scale-110
                    hover:text-white 
                    ${color === "bg-blue-500" ? 'hover:shadow-[0px_0px_15px_2px_#ACACFF]' : 'hover:shadow-[0px_0px_15px_2px_#B1B1B3]' }
                    
                `}
                    onClick={props.action}
                >
                {props.icon}
                {props.text}
            </button>
        </div>
    )
}