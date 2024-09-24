import '@/app/globals.css'
import Link from 'next/link'

export default function Teste(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Teste de conhecimento</h1>
            <p className='pt-4 mx-auto'>Agora vamos testar nossos conhecimentos.</p>
            <p className='mx-auto'>O aluno que tiver mais acertos será o grande vencedor!</p>
            <p className='mx-auto'>Se houver empate o aluno que enviou o teste primeiro vence.</p>
            <img src="/flork-desespero.png" className='h-1/2 mt-8 mx-auto'/>
            <Link href='/fazer-teste' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}