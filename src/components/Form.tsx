import Button from "./Button";
import Input from "./Input";

export default function Form(props: any){
    return(
        <div className="px-20">
            <div>
                <Input label="Título:" type="text"/>
                <Input label="Categoria:" type="text"/>
                <Input label="Autor:" type="text"/>
                <Input label="Publicação:" type="date"/>
            </div>

            <div className="flex justify-between">
                {props.children}
            </div>
        </div>
    )
}