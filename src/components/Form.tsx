import { useRouter } from "next/router";
import { useState } from "react";
import { save, update } from "services/bookServices";
import Button from "./Button";
import Input from "./Input";

export default function Form(){

    const router = useRouter();

    const [title, setTitle] = useState(router.query.title || '');
    const [autor, setAutor] = useState(router.query.autor || '');
    const [categories, setCategories] = useState(router.query.categories || '')

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
                <div className="grid grid-cols-1">
                    <label className="text-blue-500">Categoria*</label>
                    <select 
                        id="categorias"  
                        name="Categorias" 
                        value={categories}
                        onChange={(e: any) => {setCategories(e.target.value)}}
                        required
                        className="
                            bg-white text-black
                            rounded-md mb-4 h-[1.6rem]
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
                <form onSubmit={(event) =>update(router.query.id, event, autor, categories, title, router)}>
                        <Input 
                            label="ID"
                            type='text'
                            value={router.query.id}
                            disable
                            styles="bg-gray-300"
                            >                            
                        </Input>                       
                    {renderTable()}
                    <div className="flex justify-center mt-8">
                        <Button color="bg-green-500" text="Atualizar" type="submit"/>
                    </div>
                </form>
            ) : (
                <form onSubmit={(e)=>{ 
                    save(e, autor, categories, title)
                    setAutor('')
                    setCategories('')
                    setTitle('')
                    }}>
                    {renderTable()}
                    <div className="flex justify-center mt-8">
                        <Button color="bg-green-500" text="Salvar" type="submit"/>
                    </div>
                </form>
            )}
            
        </div>
    )
}