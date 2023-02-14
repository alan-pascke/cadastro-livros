interface InputProps{
    type: 'text' | 'number' |'date';
    styles?: string
    value?: string
    label: string
}

export default function Input(props: InputProps){
    return(
        <div className="text-gray-600 grid">
            <label className="text-start">{props.label}</label>
            <input 
                type={props.type} 
                className={`
                        bg-white
                        rounded-md mb-4 px-3 opacity-90
                        outline-none   
                    `}
                value={props.value}
            />
        </div>       
    )
}