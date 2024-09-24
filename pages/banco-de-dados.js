import '@/app/globals.css';
import { useState } from "react";
import Link from 'next/link';

export default function BancoDeDados() {
  const [show, setShow] = useState('hidden')
  return (
    <div className="flex flex-col p-8">
      <h1 className="mx-auto text-3xl font-poppins ">O que é um banco de dados?</h1>
      <p className='mx-auto'>Clique na imagem.</p>
      <button className="mx-auto mt-4 w-1/3" onClick={() => setShow('block')}><img src="/banco_feito_de_dados.jpg" alt="Banco constrúido com dados cúbicos" /></button>
      <p className={`mx-auto mt-4 ${show}`}>Não é um banco construído com dados!</p>
      <Link className={`mx-auto p-4 text-xl text-blue-800 ${show}`} href='/definicao-banco-de-dados'>Próximo &gt;&gt;</Link>
    </div>
  );
}