interface InputProps{
    type: 'text' | 'number' | 'file' | 'password' | 'email';
    styles?: string
    value?: any
    label: string
    onChange?: (e:any)=> void
    required?: true
    children?: any
    accept?: any
    placeholder?: any
    id?: string
}

export default function Input(props: InputProps){
    return(
        <div className="text-black grid grid-cols-1">
            <label className="text-start text-blue-500">{props.label}</label>
            <input
                placeholder={props.placeholder}
                id={props.id}
                type={props.type} 
                className={`
                        rounded-md mb-4 px-3
                        outline-none
                        {${props.styles? props.styles : 'bg-white'}}  
                    `}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                accept={props.accept}
            />
        </div>       
    )
}