import '@/app/globals.css'
import Link from 'next/link'

export default function Intuito() {
    return (
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins my-8'>Considerações finais</h1>
            <p className='mx-auto text-xl'>Parabéns por chegarem até aqui!</p>
            <p className='ml-8 text-lg indent-16'>Tanto a brincadeira do jogo da discórdia quanto a aplicação do teste e exibição do gabarito foram executadas inserindo e lendo dados do nosso banco de dados, utilizando principalmente a tabela &quot;alunos&quot;.</p>
            <p className='ml-8 text-lg indent-16'>Espero que este conteúdo tenha contribuído para seus conhecimentos e lhes proporcionado uma breve noção do que é um banco de dados e da sua importância para a tecnologia.</p>
            <img src="/flork-gratidao.jpg" className='h-1/2 mx-auto mt-4' alt='flork gratidão' />
        </div>
    )
}