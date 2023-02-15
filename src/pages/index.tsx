import Layout from "@/components/Layout"
import Cards from "@/components/Cards"
import imageCard from "/public/images/hero1.jpg"
import Footer from "@/components/Footer"
import { iconePesquisa } from "@/components/Icons"


export default function Home(){
  return(
    <div>
      <div>
        <Layout>
          <div className="flex justify-center mt-12">
            <div className="bg-gray-300 border border-gray-300 rounded-xl flex">
              <button className="m-1">{iconePesquisa}</button>
              <input type="text" placeholder="pesquisar..." className="  outline-none focus:bg-white bg-gray-300 rounded-r-xl xs:w-36 sm:w-72"/>

            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 p-[50px_36px_0_36px]">
            <Cards title="Livro" imgSrc={imageCard}></Cards>
            <Cards title="Livro" imgSrc={imageCard}></Cards>
            <Cards title="Livro" imgSrc={imageCard}></Cards>
            <Cards title="Livro" imgSrc={imageCard}></Cards>
            <Cards title="Livro" imgSrc={imageCard}></Cards>
            <Cards title="Livro" imgSrc={imageCard}></Cards>
          </div>        

        </Layout>
      </div>
      
      <Footer/>
      
      
    </div>
  )
}