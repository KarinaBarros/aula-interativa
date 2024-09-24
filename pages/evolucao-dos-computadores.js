import '@/app/globals.css'
import Link from 'next/link'

export default function EvolucaoComputadores(){
    return(
        <div className="flex flex-col px-16 py-4">
            <h1 className='mx-auto text-5xl font-poppins'>A evolução dos computadores</h1>
            <p className='pt-4 indent-8'>Antigamente, os computadores eram bem diferentes do que são hoje. Nos primeiros dias, lá pelos anos 1940 e 1950, eles eram gigantescos, ocupavam salas inteiras e pareciam mais com máquinas do que com os computadores que conhecemos. Eles usavam muitas válvulas, que pareciam lâmpadas enormes, e tinham fios para todo lado. Não existiam telas coloridas, e você não podia simplesmente "clicar" nas coisas como fazemos hoje. Tudo era muito mais complicado e devagar.</p>
            <img src="/primeiro-computador.jpeg" className='w-1/3 mx-auto mt-4'/>
            <Link href='computadores-antigamente' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}