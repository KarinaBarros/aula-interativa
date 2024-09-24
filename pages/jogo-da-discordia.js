import '@/app/globals.css';
import Link from 'next/link';

export default function JogoDiscordia(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Jogo da Discórdia</h1>
            <img src="/discordia.png" className='h-2/3 mx-auto mt-4' alt='flork marrento' />
            <p className='mx-auto mt-2 text-xl'>Agora vamos jogar usando como tabela principal a tabela que contém nossos dados.</p>
            <Link href='/votacao-amigo' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}