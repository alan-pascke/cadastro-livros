import Layout from "@/components/Layout"
import Cards from "@/components/Cards"
import { iconePesquisa } from "@/components/Icons"
import { useEffect, useState } from "react";
import RegistersInterface from "@/core/RegistersInterface";
import { fetchData } from "services/bookServices";
import SearchBar from "@/components/SearchBar";


export default function Home(){

  const [records, setRecords] = useState<RegistersInterface[]>([]);

  useEffect(() => {
    fetchData(setRecords);
}, []);


  return(
    <div>
      <Layout>
        <div className="grid grid-rows-6 justify-center items-center">
          <div className="row-span-1">
            <SearchBar icon={iconePesquisa} />
          </div>
          <div className="row-span-5 grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 items-center pt-8">
            {records.map((record) =>(
              <div key={record.id}>
                <Cards title={record.title} imgSrc={record.urlImage}></Cards>
              </div>
            ))}
          </div>        
        </div>
      </Layout>
    </div>
  )
}