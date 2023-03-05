import { OptionsInterface } from './../src/core/OptionsInterface';
import RegistersInterface from '@/core/RegistersInterface';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db , storage } from "./firebase";


export const save = async (event: any, autor:string, categories: string, title:string, urlImage:string) =>{
    event.preventDefault();
    try {
        await addDoc(collection(db, 'records'),
        {
            autor,
            categories,
            title,
            urlImage,
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
    const bookSnapshot = await getDocs(collection(db, 'records'));
    bookSnapshot.forEach((doc)=> {
        const {title, autor, categories, urlImage} = doc.data()
        data.push({
        id: doc.id,
            title,
            autor,
            categories,
            urlImage
        });
    });
    setRecords(data);
};

export const fechtOptionsData = async (setOptions: any)=>{
    const data : OptionsInterface [] = []
    const optionSnapshot = await getDocs(collection(db, 'options'));
    optionSnapshot.forEach((doc) => {
        const {value, label} = doc.data()
        data.push({
            id: doc.id,
            value,
            label
        })
    })
    setOptions(data)

}


export const update = async (id: any, event: any, autor:string, categories: string, title:string, urlImage: string) => {
    event.preventDefault();
    try {
        await updateDoc(doc(db, 'records', id), {
            autor,
            categories,
            title,
            urlImage,
        });
        alert('Document was upadate')

    } catch (error) {
        alert("Error updating document: " + error + ' ' + ' Or url not loader');
    }
}

export const hendleSearchBooks = async (searchBook: string, setFoundBooks: any) => {
    const data : RegistersInterface[] = [];

    function dataPush(doc: any){
        const {title, autor, categories, urlImage} = doc.data();
        data.push({
        id: doc.id,
            title,
            autor,
            categories,
            urlImage,
        })
    }
    
    //busca pelo titulo
    const querySnapshotTitle = await getDocs(query(collection(db, 'records'), where('title', '==', searchBook.toUpperCase())));
    querySnapshotTitle?.docs.map((doc) => {
        dataPush(doc)
    });


    //busca pelo autor
    const querySnapshotAutor = await getDocs(query(collection(db, 'records'), where('autor', '==', searchBook.toUpperCase())));
    querySnapshotAutor?.docs.map((doc) => {
        dataPush(doc)
    });

    //busca pela categoria
    const querySnapshotCategories = await getDocs(query(collection(db, 'records'), where('categories', '==', searchBook.toUpperCase())));
    querySnapshotCategories?.docs.map((doc) => {
        dataPush(doc)
    });

    setFoundBooks(data);
};

export async function hendleUploadImage (event: React.ChangeEvent<HTMLInputElement> , file: any, setUrlImage: any, setProgress: any) {
    const files = event.target.files
    if (files && files.length > 0){
        
        const storageRef = ref(storage , `images/${file.name}`)
        const uploadTask =  uploadBytesResumable(storageRef, file )
        
        uploadTask.on('state_changed',(snapshot) =>{
            const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        },(error) => {
            alert(error);
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrlImage(url)
            },);
        })

    }
}