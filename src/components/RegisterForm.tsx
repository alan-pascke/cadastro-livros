import { iconeNuvem } from "@/components/Icons";
import { OptionsInterface } from "@/core/OptionsInterface";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { save, update, hendleUploadImage, fechtOptionsData } from "services/bookServices";
import Button from "./Button";
import Input from "./Input";


export default function RegisterForm() {


    const router = useRouter();

    const [id, setid] = useState('');
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [categories, setCategories] = useState('');
    const [image, setImage] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [progress, setProgress] = useState('');
    const [options, setOptions] = useState<OptionsInterface[]>([])

    useEffect(()=>{
        const fetchOptions = async () =>{
            fechtOptionsData(setOptions)
        }
        fetchOptions()
    },[setOptions])

    useEffect(() => {
        const fetchDataFromApi = async () => {
             
            const data = JSON.parse(router.query.data as string)
            setid(data.id)
            setTitle(data.title)
            setAutor(data.autor);
            setCategories(data.categories)
            setUrlImage(data.urlImage)
        };
        router.query.data ? fetchDataFromApi() : false;
    }, [router]);

    console.log("categorias: " + categories);

    function renderForm(){
        return(
            <div>
                <Input 
                    label="Título*"
                    type="text"
                    value={title || '' }
                    onChange={(e: any) => setTitle( e.target.value)}
                    required
                />
                <Input 
                    label="Autor*" 
                    type="text" 
                    value={autor || '' } 
                    onChange={(e: any) => setAutor(e.target.value)}
                    required
                />
                <div className="grid grid-cols-1 text-start">
                    <label className="text-blue-500">Categoria*</label>
                    <select 
                        id="categorias"  
                        name="Categorias" 
                        value={categories || '' }
                        onChange={(e: any) => setCategories(e.target.value)}
                        required
                        className="
                            bg-white text-black
                            rounded-md mb-4 pl-2 h-[1.6rem]
                            outline-none ">
                        
                            <option value="" disabled>Selecione</option>
                            {options.map((option) => (
                                <option key={option.id} value={option.label}>{option.label}</option>
                            ))}
                    </select>
                </div>
                <div className="text-start grid grid-cols-1">
                    <label className="text-blue-500">Imagem</label>
                                
                </div>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    
                        <div className="flex flex-col items-center justify-center">
                            {iconeNuvem}
                            {!image ? (
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload
                                        </span> 
                                    </p>    
                                    <p className="text-xs text-gray-500 dark:text-gray-400">JPEG, PNG, JPG</p>
                                </div>
                            ) : (
                                <div>
                                    {parseInt(progress) + '%'}
                                    <p>{image}</p> 
                                </div>
                                )
                            }
                        </div>
                      
                        <input
                        className="hidden"
                        type="file" 
                        value={image}
                        onChange={(e: any)=> {
                            setImage(e.target.value)
                            const file = e.target.files[0];
                            hendleUploadImage(e, file, setUrlImage, setProgress);
                        }}
                        accept='.png, .jpeg, .jpg'
                        />
                    </label>
                </div> 
            </div>
        )
    }
    
    return(
        <div>
            {id? (
                <form onSubmit={(event) => {
                    update(id, event,  autor.toLocaleUpperCase(), categories.toLocaleUpperCase(), title.toLocaleUpperCase(), urlImage)
                    router.push('/find_books')
                }}>                     
                    {renderForm()}
                    <div className="flex justify-center mt-8">
                        <Button color="bg-green-500" text="Atualizar" type="submit"/>
                    </div>
                </form>
            ) : (
                <form onSubmit={(e)=>{ 
                    save(e, autor.toLocaleUpperCase(), categories.toLocaleUpperCase(), title.toLocaleUpperCase(), urlImage)
                    setAutor('')
                    setCategories('')
                    setTitle('')
                    }}>
                    {renderForm()}
                    <div className="flex justify-center mt-8">
                        <Button color="bg-green-500" text="Salvar" type="submit"/>
                    </div>
                </form>
            )}
            
        </div>
    )
}