import { FiInstagram, FiFacebook } from 'react-icons/fi'

export default function Footer(){
    return(
        <div className="grid grid-cols-2 bg-[#04042a]  p-8 justify-center items-center text-center">
            <div className='col-span-1'>
                <h1 className="pb-5">Fique por dentro</h1>
                <div className='pt-2'>
                    <button className='mr-4 hover:bg-blue-100 hover:rounded-md'>
                        <FiInstagram size={'1.5em'}/>
                    </button>                    
                    <button className='mr-4 hover:bg-blue-100 hover:rounded-md'>
                        <FiFacebook size={'1.5em'}/>
                    </button>
                </div>
            </div>
            <div className='col-span-1'>
                <h1>Sobre a Biblioteca</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in. Aliquam vestibulum morbi blandit cursus risus at ultrices mi.</p>
            </div>
            
        </div>
    )
}