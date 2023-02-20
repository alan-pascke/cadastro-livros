import Footer from "./Footer"
import Header from "./Header"

interface layoutProps{
    children?: any
}
export default function Layout(props: layoutProps){
    return(
        <div className="flex flex-col h-screen justify-between ">
            <div>
                <Header/>
            </div>

            <div className="flex-col justify-center">
                {props.children}
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}