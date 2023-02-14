import { addDoc, collection, doc, updateDoc} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "services/firebase";
import Button from "./Button";
import Input from "./Input";

export default function Form(){

    const router = useRouter();
    const [title, setTitle] = useState(router.query.title || '');
    const [autor, setAutor] = useState(router.query.autor || '');
    const [categories, setCategories] = useState(router.query.categories || '')

    const update = (id: any) => {
        try {
            updateDoc(doc(db, 'records', id), {
                autor: autor,
                categories: categories,
                title: title,
            });
            alert('Document was upadate')
        } catch (error) {
            alert("Error updating document: " + error);
        }
    }
 
    const save = async (event: any) =>{
        event.preventDefault();
        try {
            await addDoc(collection(db, 'records'),
            {
                autor: autor, 
                categories: categories,
                title: title, 
            })
            setTitle('')
            setAutor('')
            setCategories('')
            alert('Document was save')
        } catch (error) {
            alert("Error writing document: " + error);
        }

    }

    function renderTable(){
        return(
            <div>
                <Input 
                    label="Título*"
                    type="text"
                    value={title}
                    onChange={(e: any) => {setTitle( e.target.value)}}
                    required
                />
                <Input 
                    label="Autor*" 
                    type="text" 
                    value={autor} 
                    onChange={(e: any) => {setAutor(e.target.value)}}
                    required
                />
                <div className="grid grid-cols-1 text-start">
                    <label className="text-blue-500">Categoria*</label>
                    <select 
                        id="categorias"  
                        name="Categorias" 
                        value={categories}
                        onChange={(e: any) => {setCategories(e.target.value)}}
                        required
                        className="
                            bg-white text-black
                            rounded-md mb-4 px-2 w-[15.7rem] h-[1.6rem]
                            outline-none ">
                        <option value="" disabled>Selecione</option>
                        <option value="adm-negocios">Adm. & Negócios</option>
                        <option value="computacao">Computação</option>
                        <option value="saude">Saúde</option>
                    </select>
                </div>                
            </div>
        )

    }


    return(

        <div>
            {router.query.id? (
                <form onSubmit={() =>update(router.query.id)}>
                        <Input 
                            label="ID"
                            type='text'
                            value={router.query.id}
                            disable
                            styles="bg-gray-300"
                            >                            
                        </Input>                       
                    {renderTable()}
                    <div className="flex justify-center">
                        <Button color="bg-green-500" text="Atualizar" type="submit"/>
                    </div>
                </form>
            ) : (
                <form onSubmit={save}>
                    {renderTable()}
                    <div className="flex justify-center">
                        <Button color="bg-green-500" text="Salvar" type="submit"/>
                    </div>
                </form>
            )}
            
        </div>
    )
}