import Image from "next/image"

interface cardsProps{
    title: string
    imgSrc: any
}

export default function Cards(props: cardsProps){
    return(
        <div className="grid grid-cols-1 rounded-lg hover:bg-[#14147c] hover:text-white hover:scale-110 transition w-52 m-2">
            <div className="p-[2px_4px_0px_4px] flex justify-center">
                <Image src={props.imgSrc}
                    width={500} 
                    height={500} 
                    alt='capa do livro'
                    className="bg-white rounded-md w-52 h-52"
                    />
            </div>
            <h1 className="flex justify-center items-center pt-1 pb-1">{props.title}</h1>
        </div>
    )
}