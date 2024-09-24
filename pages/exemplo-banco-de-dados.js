import '@/app/globals.css';
import Link from 'next/link';

export default function DExemploBancoDeDados() {
    return (
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Exemplo</h1>
            <p className='pt-8 mx-auto'>Um aluno criou uma tabela com o nome e a idade dos seus colegas de classe.</p>
            <table className='w-64 m-auto border border-gray-500'>
                <thead>
                    <tr className='divide-x divide-gray-500'>
                        <th className='border-b border-gray-500'>Nome</th>
                        <th className='border-b border-gray-500'>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>João</td>
                        <td className='pl-4 border-b border-gray-500'>12</td>
                    </tr>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>Maria</td>
                        <td className='pl-4 border-b border-gray-500'>14</td>
                    </tr>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>Pedro</td>
                        <td className='pl-4 border-b border-gray-500'>12</td>
                    </tr>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>Ana</td>
                        <td className='pl-4 border-b border-gray-500'>13</td>
                    </tr>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>Vitor</td>
                        <td className='pl-4 border-b border-gray-500'>13</td>
                    </tr>
                    <tr className='divide-x divide-gray-500'>
                        <td className='pl-4 border-b border-gray-500'>Mateus</td>
                        <td className='pl-4'>12</td>
                    </tr>
                </tbody>
            </table>
            <p className='mx-auto'>Agora quando ele quiser saber a idade de seus amigos é só procurar na tabela.</p>
            <p className='mx-auto'>No banco de dados, os dados (que no caso são os nomes e idades dos amigos) são organizados em tabelas.</p>
            <p className='mx-auto'>Essas tabelas são gerenciadas por um programa.</p>
            <p className='mx-auto'>E lembra que falamos de linguagem de programação?</p>
            <p className='mx-auto'>O programa que gerencia o banco de dados usa uma linguagem de programação para alterar ou ler os dados dessas tabelas.</p>
            <p className='mx-auto'>O nome dessa linguagem é SQL.</p>
            <Link href='/uso-de-banco-de-dados' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}