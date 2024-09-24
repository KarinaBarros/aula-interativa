import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import '@/app/globals.css';

export default function Autenticar() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [ra, setRa] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    if (tokenStorage) {
      setToken(tokenStorage);
    } else {
      router.push('/login');
    }
  }, [])

  const insertData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post('/api/inserir', { ra, nome, idade }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('ra', ra);
      alert(res.data.message);

    } catch (err) {
      if (err.response && err.response.status === 401) {
        router.push('/login');
      } else {
        alert('Erro ao inserir os dados');
      }
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col px-16 py-4 h-screen w-full">
      <h1 className="mx-auto text-5xl font-poppins">Inserindo Dados</h1>
      <p className="pt-4 mx-auto">A seguinte tabela foi criada no banco de dados, o nome da tabela é alunos:</p>
      <table className='w-64 m-auto border border-gray-500'>
        <thead>
          <tr className='divide-x divide-gray-500'>
            <th className='border-b border-gray-500 px-2'>Ra</th>
            <th className='border-b border-gray-500'>Nome</th>
            <th className='border-b border-gray-500'>Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr className='divide-x divide-gray-500'>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
          </tr>
          <tr className='divide-x divide-gray-500'>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
            <td className='pl-4 border-b border-gray-500 h-6'></td>
          </tr>
        </tbody>
      </table>
      <p className="mx-auto">Toda tabela precisa de uma chave. Ou seja, uma coluna com um número específico que nunca se repete. </p>
      <p className="mx-auto">No nosso caso a chave é o Ra.</p>
      <h2 className="mx-auto my-8 text-3xl font-poppins">Comando SQL para inserir os dados na tabela.</h2>
      <form onSubmit={insertData} className="flex flex-col">
        <div className="flex">
          <p className="ml-8">INSERT INTO alunos ( ra, nome, idade )</p>
          <p>VALUES (</p>
          <input
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            required
            placeholder="número do ra"
            className="border border-blue-800 mx-1 px-2 rounded"
          ></input>
          <p>,</p>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="seu nome"
            className="border border-blue-800 mx-1 px-2 rounded"
          ></input>
          <p>,</p>
          <input
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
            placeholder="sua idade"
            className="border border-blue-800 mx-1 px-2 rounded"
          ></input>
          <p>);</p>
        </div>
        <p className="ml-8">INSERIR EM alunos(ra, nome, idade) VALORES &nbsp;( &nbsp;&nbsp;número do ra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp; seu nome &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, &nbsp;&nbsp;sua idade &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</p>
        <button type='submit' className="bg-blue-800 text-white text-xl mx-auto py-1 px-4 rounded-lg mt-4" disabled={loading} >{loading ? 'Carregando...' : 'Executar comando'}</button>
      </form>
      <Link href='/consulta' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
    </div>
  )

}