import '@/app/globals.css'
import Link from 'next/link'

export default function Intuito(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Projeto banco de dados</h1>
            <p className='pt-4 mx-auto'>O intuito do projeto que desenvolvi especialmente para vocês é colocá-los para interagir com o meu banco de dados.</p>
            <p className='mx-auto'>Vocês conseguirão inserir e ler dados em tempo real com a execução de comandos SQL.</p>
            <img src="/flork-feliz.png" className='h-2/3 mt-8 mx-auto'/>
            <Link href='/inserir-dados' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}