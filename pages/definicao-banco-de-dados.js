import '@/app/globals.css';
import Link from 'next/link';

export default function DefinicaoBancoDeDados(){
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <p className='pt-4 indent-8'>Assim como qualquer tecnologia, o banco de dados surgiu através de várias mudanças.</p>
            <p className='indent-8'>No início, os computadores eram usados basicamente para fazer cálculos matemáticos. Ao longo do tempo, o ser humano descobriu que os computadores também poderiam ser utilizados para manipular dados. Essa descoberta trouxe consigo uma grande dificuldade para gerenciar esses dados, já que eram armazenados em arquivos, o que tornava os sistemas pesados e lentos.</p>
            <p className='indent-8'>Então surgiu o banco de dados para facilitar a vida dos programadores e melhorar o desempenho dos computadores.</p>
            <p className='indent-8'>Afinal, o que é um banco de dados?</p>
            <img src="/flork-interrogacao.jpg" className='h-1/2 mx-auto mt-4' alt='flork com pontos de interrogação' />
            <p className='mx-auto mt-2 text-xl'>Um banco de dados é um programa que gerencia tabelas que guardam dados.</p>
            <Link href='/exemplo-banco-de-dados' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}