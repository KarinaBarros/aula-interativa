import '@/app/globals.css'
import Link from 'next/link'

export default function UsoBD(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Uso do banco de dados</h1>
            <p className='pt-4 mx-auto'>Afinal. Onde é usado o banco de dados.</p>
            <p className='mx-auto'>O banco de dados hoje em dia é usado por qualquer sistema que precise armazenar algum tipo de informação.</p>
            <div className='flex h-1/2 m-auto'>
                <img src="/facebook.jpg" alt='Facebook' className='mx-auto'/>
                <img src="/banco.jpeg" alt='Banco caixa econômica federal' className='mx-auto'/>
            </div>
            <Link href='/intuito-do-projeto' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}