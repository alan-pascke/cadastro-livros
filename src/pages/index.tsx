import Layout from "@/components/Layout"
import Table from "@/components/Table"
import Form from "@/components/Form"
import { useState } from "react"
import Button from "@/components/Button"
import Header from "@/components/Header"
import { iconeAdd, iconeMenu } from "@/components/Icons"
import Cards from "@/components/Cards"
import imageCard from "/public/images/hero1.jpg"


export default function Home(){

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [sidebar, setSidebar] = useState(false)

  function openClose(){
    if (sidebar === false) {
      setSidebar(true)
    } else{
      setSidebar(false)
    } 
  }



  return(
    <div>

      <Header/>

      <div className="flex absolute top-5 left-4">
        <button 
              className=" px-1.5 py-1.5 hover:rounded-full hover:bg-white"
              onClick={openClose}
            >
            {iconeMenu}    
        </button>
        <h1 className="ml-7">Biblioteca</h1>
      </div>

      <>
        {sidebar === false ? (
            <div id="sidebar" className="
                bg-slate-500 h-full w-60 sm:w-42 fixed transition-transform mr-10 
              ">
              <div className="flex items-center">
                <button 
                  className="px-1.5 py-1.5 mt-5 ml-4 hover:rounded-full hover:bg-white"
                  onClick={openClose}
                >
                {iconeMenu} 
                </button>
                <h1 className="mt-5 ml-7">Menu</h1>
              </div>
            </div>
        ): (
          <div id="sidebar" className="
            bg-slate-500 h-full w-60 fixed transition-transform -translate-x-60 mr-10
            ">
            <div className="flex items-center">
              <button 
                className="px-1.5 py-1.5 mt-5 ml-4 hover:rounded-full hover:bg-white"
                onClick={openClose}
              >
              {iconeMenu} 
              </button>
              <h1 className="mt-5 ml-7">Menu</h1>
            </div>
          </div>          
        )
        }

        
      </>
      <div className="grid grid-cols-4 sm:grid-cols-2 ml-20 mr-7 pt-28">
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
        <Cards title="Livro" imgSrc={imageCard}></Cards>
      </div>

      
      {/* <div className="flex justify-center items-center">
        <Layout>
          {visible === 'table' ? (
          <>
            <div className="flex justify-end items-end">
              <Button color="bg-blue-500" text="Adicionar" action={()=> setVisible("form")} icon={iconeAdd}></Button>
            </div>
            <Table></Table>
          </>
          ) : (
            <div>
              <h1 className="mb-7">Cadastro de Livros</h1>
              <Form>
                  <Button color="bg-gray-500" text="Cancelar" action={()=>setVisible("table")}/>
                  <Button color="bg-blue-500" text="Salvar"/>
              </Form>
            </div>
            )} 
        </Layout>
      </div> */}

      
    </div>
  )
}