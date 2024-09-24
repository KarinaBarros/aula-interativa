import '@/app/globals.css'
import Link from 'next/link'

export default function ComputadoresAntigamente(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <p className='pt-4 indent-8'>Com o tempo, os computadores foram ficando menores e mais rápidos. Nos anos 1980 e 1990, os computadores já tinham telas, mas não eram tão finos nem portáteis como os de hoje. Eles usavam disquetes para guardar informações e fazer jogos funcionarem. As imagens na tela eram mais simples, e os computadores eram pesados.</p>
            <div className='flex h-2/3 mt-8'>
                <img src="/computador-antigo.jpg" alt='Computador antigo' className='mx-auto'/>
                <img src="/disquete.png" alt='Disquete' className='mx-auto'/>
            </div>
            <Link href='/computadores-hj' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}