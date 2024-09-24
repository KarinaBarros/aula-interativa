import '@/app/globals.css'
import Link from 'next/link'
export default function Home() {
    return (
        <div className="bg-[url('/circuito.jpg')] bg-cover bg-center h-screen w-full">
            <div className='absolute inset-0 w-full h-full bg-blue-900 opacity-80'></div>
            <div className="relative z-10 flex flex-col justify-center h-screen p-16">
                <h1 className='text-white  mx-auto text-8xl font-poppins'>Aula interativa</h1>
                <h2 className='text-white  mx-auto text-5xl font-poppins'>Banco de dados</h2>
                <p className='text-white mt-32 mr-0 ml-auto text-xl font-roboto'>Por: Karina Ariane de barros</p>
                <Link href='/evolucao-dos-computadores' className='text-white mx-auto mt-8 p-4 text-xl'>Acessar conteúdo &gt;&gt;</Link>
            </div>
        </div>
    )
}