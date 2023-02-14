import Image, { StaticImageData } from "next/image"
import { title } from "process"

interface cardsProps{
    title: string
    imgSrc: any
}

export default function Cards(props: cardsProps){
    return(
        <div className="flex flex-col justify-center text-center hover:-translate-y-2 transition hover:ease-in-out">
            <div className="m-1 mb-4 border-2 rounded-lg overflow-hidden">
                <Image src={props.imgSrc} alt='capa do livro' width={700} height={700}/>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}