import Layout from "@/components/Layout"
import Cards from "@/components/Cards"
import { iconePesquisa } from "@/components/Icons"
import { useEffect, useState } from "react";
import RegistersInterface from "@/core/RegistersInterface";
import { fetchData, hendleSearchBooks } from "services/bookServices";
import SearchBar from "@/components/SearchBar";
import { useAuth } from "services/useAuth";


export default function Home(){
  // const {user} = useAuth();
  
  const [records, setRecords] = useState<RegistersInterface[]>([]);
  const [searchBook, setSearchBook] = useState('')
  const [foundBooks, setFoundBooks] = useState<RegistersInterface[]>([]);
  
  useEffect(() => {
    fetchData(setRecords);
  }, []);
  
  useEffect(()=>{
    hendleSearchBooks(searchBook, setFoundBooks)
  },[searchBook, setFoundBooks])

  return(
    <Layout>
      <div className="grid grid-rows-6 justify-center items-center">
        <div className="row-span-1">
          <SearchBar icon={iconePesquisa} setItem={setSearchBook}/>
        </div>
        <div className="row-span-5 grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 items-center pt-8">
          
          {searchBook == ''? records.map((record) =>(
            <div key={record.id}>
              <Cards title={record.title} imgSrc={record.urlImage}></Cards>
            </div>
          )) : (
            foundBooks.map((e)=>(
              <div key={e.id}>
                <Cards title={e.title} imgSrc={e.urlImage}></Cards>
              </div>
            ))
          )}
        </div>        
      </div>
    </Layout>
      
  
  )
}