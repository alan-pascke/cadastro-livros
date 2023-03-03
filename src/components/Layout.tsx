import Footer from "./Footer"
import Header from "./Header"

interface layoutProps{
    children?: any
}
export default function Layout(props: layoutProps){
    return(
        <div className="grid grid-rows-1">
            <div className="row-span-1 h-20">
                <Header/>
            </div>

            <div className="row-span-1 flex flex-col h-screen">
                {props.children}
            </div>

            <div className="row-span-1">
                <Footer></Footer>
            </div>
        </div>
    )
}