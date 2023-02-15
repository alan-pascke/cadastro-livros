import { useRouter } from 'next/router';
import RegistersInterface from '@/core/RegistersInterface';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


export const save = async (event: any, autor:any, categories: any, title:any) =>{
    event.preventDefault();
    try {
        await addDoc(collection(db, 'records'),
        {
            autor,
            categories,
            title,
        })
        alert('Document was save')
        
    } catch (error) {
        alert("Error writing document: " + error);
    }
};

export const deleteBook = async ({id} : RegistersInterface) => {
    try {
        await deleteDoc(doc(db, 'records', id))
        location.reload()
        console.log('Document was removed');
    } catch (error) {
        console.log('Error');
    }
    
};

export const fetchData = async (setRecords: any) => {
    const data : RegistersInterface[] = [];
    const booksCol = collection(db, 'records');
    const bookSnapshot = await getDocs(booksCol);
    bookSnapshot.forEach((doc)=> {
        const {title, autor, categories} = doc.data()
        data.push({
        id: doc.id,
            title,
            autor,
            categories
        });
    });
    setRecords(data)
};

export const update = async (id: any, event: any, autor:any, categories: any, title:any, router: any) => {
    console.log('teste');
    event.preventDefault();
    try {
        await updateDoc(doc(db, 'records', id), {
            autor: autor,
            categories: categories,
            title: title,
        });
        alert('Document was upadate')
        router.push('/book_research')
    } catch (error) {
        alert("Error updating document: " + error);
    }
}