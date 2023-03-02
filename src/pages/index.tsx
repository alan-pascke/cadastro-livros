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
        <SearchBar icon={iconePesquisa} />
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