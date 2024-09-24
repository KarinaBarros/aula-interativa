import '@/app/globals.css'
import Link from 'next/link'

export default function LinguagemHj(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <p className='pt-4 indent-8'>Com o tempo, as linguagens de programação foram evoluindo. Hoje, usamos linguagens muito mais fáceis de entender, como Python ou JavaScript. Nessas linguagens, em vez de usar &quot;0&quot; e &quot;1&quot;, você escreve palavras e comandos que fazem mais sentido para nós. Isso permite que as pessoas programem mais rápido e façam coisas incríveis, como criar jogos, sites e aplicativos. O computador ainda entende o binário no final, mas ele traduz tudo automaticamente!</p>
            <img src="/javascript.jpg" className='h-2/3 mx-auto mt-4' alt='código binário, sequencia de 0 e 1' />
            <Link href='/banco-de-dados' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}