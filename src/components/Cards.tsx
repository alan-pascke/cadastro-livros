import Image from "next/image"

interface cardsProps{
    title: string
    imgSrc: any
}

export default function Cards(props: cardsProps){
    return(
        <div className="flex justify-center text-center">
            <div className="mb-12 rounded-lg overflow-hidden w-11/12 hover:bg-[#04042a] hover:text-white hover:scale-110 transition">
                <Image src={props.imgSrc} alt='capa do livro'/>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}