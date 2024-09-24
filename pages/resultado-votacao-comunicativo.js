import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import '@/app/globals.css';
import LottieAnimation from "@/components/lootie";

export default function ResultadoComunicativo() {
    const router = useRouter();
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage) {
            const fetchData = async () => {
                try {
                    const res = await axios.get('/api/resultado-comunicativo', {
                        headers: {
                            Authorization: `Bearer ${tokenStorage}`,
                        },
                    });
                    setAlunos(res.data);
                    console.log(res.data);
        
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        router.push('/login');
                    } else {
                        alert('Erro ao fazer a consulta');
                    }
                }
            };
            fetchData();
        } else {
            router.push('/login');
        }
    }, [])

    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <h1 className='mx-auto text-5xl font-poppins'>Resultado da votação</h1>
            <h2 className="mx-auto text-xl">Mais comunicativo</h2>
            {alunos.length>0 ? (
                <div className="mx-auto mt-8">
                    <div className="mb-8">
                    {alunos.map((aluno, index) => (
                        <p key={index} className="text-xl">{aluno.nome}, {aluno.total_votos} votos.</p>
                    ))}
                     </div>
                    <Link href='/votacao-engracado' className='mx-auto p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
                </div>
            ) : 
                <LottieAnimation/>
            }
        </div>
    )

}