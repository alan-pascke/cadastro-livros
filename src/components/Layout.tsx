import Header from "./Header"

interface layoutProps{
    children?: any
}
export default function Layout(props: layoutProps){
    return(
        <div>
            <Header/>
            {props.children}
        </div>
    )
}