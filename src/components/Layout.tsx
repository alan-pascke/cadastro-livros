interface layoutProps{
    children: any
}
export default function Layout(props: layoutProps){
    return(
        <div>
            <div 
                className={`
                    py-10 p-5
                    rounded-md
                    shadow-[0px_6px_10px_0px_#E6E6FA]
                    text-center  
                `}
                >
                {props.children}
            </div>
        </div>
    )
}