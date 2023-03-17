import Layout from "@/components/Layout";
import BooksList from "@/components/BooksList";
import RegistersInterface from "@/core/RegistersInterface";
import axios from 'axios'
import AuthRoute from "@/components/AuthRouteProps";
import { useAuth } from "services/useAuth";


const hendleClick = async (record: RegistersInterface, router: any) => {
    
    const data = {
        id: record.id,
        title: record.title,
        autor: record.autor,
        categories: record.categories
    }
    try {
        const response = await axios.post('/api/hendlerData/?', data)
        router.push({pathname: `/register_books`, query: {data: JSON.stringify(response.data)}});
    } catch (error) {
        alert(error)
    }
}; 
export default function FindBooks(){
    const {user} = useAuth();

    return(
        <>
            {!user ? (
                <div className="flex justify-center">
                    Faça o login....
                </div>
            ) : (
                <AuthRoute>
                    <Layout>
                        <BooksList hendleClick={hendleClick}/>
                    </Layout>
                </AuthRoute>
                )
            }
        </>
    )
}

