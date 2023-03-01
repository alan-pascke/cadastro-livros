import RegistersInterface from '@/core/RegistersInterface';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
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
    const booksCol = collection(db, 'records');
    const bookSnapshot = await getDocs(booksCol);
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
        alert("Error updating document: " + error);
    }
}

export const hendleSearch = async (searchBook: string, setFoundBooks: any) => {
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
    const querySnapshotTitle = await getDocs(query(collection(db, 'records'), where('title', '==', searchBook)));
    querySnapshotTitle?.docs.map((doc) => {
        dataPush(doc)
    });

    //busca pelo autor
    const querySnapshotAutor = await getDocs(query(collection(db, 'records'), where('autor', '==', searchBook)));
    querySnapshotAutor?.docs.map((doc) => {
        dataPush(doc)
    });

    //busca pela categoria
    const querySnapshotCategories = await getDocs(query(collection(db, 'records'), where('categories', '==', searchBook)));
    querySnapshotCategories?.docs.map((doc) => {
        dataPush(doc)
    });

    setFoundBooks(data);
};

export async function hendleUploadImage (event: React.ChangeEvent<HTMLInputElement> , file: any, setUrlImage: any) {
    const files = event.target.files
    if (files && files.length > 0){
        
        const storageRef = ref(storage , `images/${file.name}`)
        const uploadTask =  uploadBytesResumable(storageRef, file )
        
        uploadTask.on('state_changed',(snapshot) =>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
        },(error) => {
            alert(error);
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrlImage(url)
            },);
        })

    }
}