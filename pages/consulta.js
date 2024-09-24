import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import '@/app/globals.css';
import LottieAnimation from "@/components/lootie";

export default function Consulta() {
    const router = useRouter();
    const [token, setToken] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage) {
            setToken(tokenStorage);
        } else {
            router.push('/login');
        }
    }, [router])

    useEffect(() => {
        const ra = localStorage.getItem('ra');
        if (ra) {
            console.log(ra)
        }
    }, [])

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/api/consultar', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAlunos(res.data);

        } catch (err) {
            if (err.response && err.response.status === 401) {
                router.push('/login');
            } else {
                alert('Erro ao fazer a consulta');
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col px-16 py-4 w-full">
            <h1 className="mx-auto text-5xl font-poppins">Consulta no banco de dados</h1>
            <p className="mx-auto mt-8">SELECT * FROM alunos;</p>
            <p className="mx-auto">SELECIONE todos DE alunos;</p>
            <button onClick={fetchData} className="bg-blue-800 text-white text-xl mx-auto py-1 px-4 rounded-lg my-4" disabled={loading} >{loading ? 'Carregando...' : 'Executar comando'}</button>
            {loading && 
                <LottieAnimation/>
            }
            {alunos.length > 0 && (
                <div className="flex flex-col">
                    <table className='m-auto border border-gray-500'>
                        <thead>
                            <tr className='divide-x divide-gray-500'>
                                <th className='border-b border-gray-500 px-2 bg-gray-200'>Ra</th>
                                <th className='border-b border-gray-500 bg-gray-200'>Nome</th>
                                <th className='border-b border-gray-500 px-4 bg-gray-200'>Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((aluno, index) => (
                                <tr key={index} className='divide-x divide-gray-500'>
                                    <td className='w-16 border-b border-gray-800 h-6 bg-gray-500'></td>
                                    <td className='px-4 border-b border-gray-500 h-6'>{aluno.nome}</td>
                                    <td className='px-4 border-b border-gray-500 h-6'>{aluno.idade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link href='/consulta-por-idade' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
                </div>
            )}
        </div>
    )
}