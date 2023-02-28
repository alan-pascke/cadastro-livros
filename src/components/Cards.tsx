import Image from "next/image"

interface cardsProps{
    title: string
    imgSrc: any
}

export default function Cards(props: cardsProps){
    return(
        <div className="grid justify-center text-center">
            <div className="grid grid-cols-1 justify-center  mb-7 p-2 rounded-lg overflow-hidden hover:bg-[#14147c] hover:text-white hover:scale-110 transition">
                <Image src='https://firebasestorage.googleapis.com/v0/b/projeto-biblioteca-18cf0.appspot.com/o/images%2Fbook-logo1.png?alt=media&token=26056300-85d4-47cc-ae1a-dd41fdd053ab' 
                    width={200} 
                    height={200} 
                    alt='capa do livro'
                    className="bg-white rounded-md"
                    />
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}