import '@/app/globals.css'
import Link from 'next/link'

export default function ComputadoresHj(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <p className='pt-4 indent-8'>Agora, os computadores cabem na palma da mão, como os celulares! Eles são muito mais rápidos, têm telas coloridas, e podemos fazer quase tudo neles: ver filmes, jogar, estudar, falar com amigos. Usamos uma coisa chamada "internet", que conecta computadores do mundo inteiro. Hoje, os computadores estão em todos os lugares e ficaram muito mais fáceis de usar, sem precisar de fios por todo lado.</p>
            <img src="/computador-hj.jpg" className='h-2/3 mx-auto mt-4' alt='notebook e celular'/>
            <Link href='evolucao-linguagem-de-programacao' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}