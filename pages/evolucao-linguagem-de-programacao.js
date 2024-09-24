import '@/app/globals.css'
import Link from 'next/link'

export default function EvolucaoLinguagem(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>A evolução da linguagem de programação.</h1>
            <p className='pt-4 indent-8'>Linguagem de programação é a linguagem que os programadores usam para se comunicar com os computadores.</p>
            <p className='indent-8'>A linguagem binária é como se o computador falasse. No início, programadores tinham que usar essa linguagem, que só tem dois números: 0 e 1. Cada &quot;0&quot; ou &quot;1&quot; era como uma instrução para o computador fazer algo simples, como ligar ou desligar uma luz. Para programar, você tinha que escrever muitas sequências de &quot;0&quot; e &quot;1&quot;, o que era super difícil e demorado.</p>
            <img src="/codigo.jpg" className='h-1/2 mx-auto mt-4' alt='código binário, sequencia de 0 e 1' />
            <Link href='/linguagem-hj' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}