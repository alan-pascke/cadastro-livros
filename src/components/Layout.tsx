import Footer from "./Footer"
import Header from "./Header"

interface layoutProps{
    children?: any
}
export default function Layout(props: layoutProps){
    return(
        <div className="grid grid-rows-1">
            <header className="row-span-1">
                <Header/>
            </header>

            <div className="row-span-1 flex flex-col h-screen">
                <article>
                    {props.children}
                </article>
            </div>

            <div className="row-span-1">
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </div>
    )
}