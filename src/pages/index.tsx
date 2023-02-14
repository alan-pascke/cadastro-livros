import Layout from "@/components/Layout"
import Cards from "@/components/Cards"
import imageCard from "/public/images/hero1.jpg"
import Footer from "@/components/Footer"


export default function Home(){
  return(
    <div>
      <div>
        <Layout>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 p-[89px_36px_0_36px]">
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