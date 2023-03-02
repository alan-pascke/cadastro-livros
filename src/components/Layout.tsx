import Footer from "./Footer"
import Header from "./Header"

interface layoutProps{
    children?: any
}
export default function Layout(props: layoutProps){
    return(
        <div className="flex flex-col">
            <div>
                <Header/>
            </div>

            <div className="grid h-screen justify-center">
                {props.children}
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}