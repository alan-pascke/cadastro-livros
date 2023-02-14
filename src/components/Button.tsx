interface buttonInterface{
    color?: 'bg-blue-500' | 'bg-gray-500' | 'bg-green-500'
    text?: string
    action?: ()=> void
    icon?: any
    type?: 'button' | 'submit'
}

export default function Button(props: buttonInterface){

    const color = props.color
    return(
        <div>
            <button className={`
                    flex
                    mt-5
                    py-3 px-7 mb-7
                    text
                    font-bold
                    text-white ${props.color}
                    rounded-md
                    transition ease-in-out 
                    hover:scale-110
                `}
                    type={props.type}
                >
                {props.icon}
                {props.text}
            </button>
        </div>
    )
}