import Layout from "@/components/Layout"
import Cards from "@/components/Cards"
import { iconePesquisa } from "@/icons/Icons"
import { useEffect, useState } from "react";
import RegistersInterface from "@/core/RegistersInterface";
import { fetchData } from "services/bookServices";


export default function Home(){

  const [records, setRecords] = useState<RegistersInterface[]>([]);

  useEffect(() => {
    fetchData(setRecords);
}, []);


  return(
    <div>
      <Layout>
        <div className="flex justify-center mt-12">
          <div className="bg-gray-300 border border-gray-300 rounded-xl flex">
            <button className="m-1">{iconePesquisa}</button>
            <input 
              type="text" 
              placeholder="pesquisar..." 
              className="outline-none focus:bg-white bg-gray-300 rounded-r-xl xs:w-36 sm:w-72"/>
              
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 pt-8">
          {records.map((record) =>(
            <div key={record.id}>
              <Cards title={record.title} imgSrc={record.urlImage}></Cards>
            </div>
          ))}
        </div>        
      </Layout>
    </div>
  )
}