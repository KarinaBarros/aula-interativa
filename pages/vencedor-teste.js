import { useEffect, useState } from "react";
import '@/app/globals.css';
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import LottieAnimation from "@/components/lootie";

export default function Vencedor(){
    const [vencedor, setVencedor] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage) {
            const fetchData = async () => {
                try {
                    const res = await axios.get('/api/vencedor', {
                        headers: {
                            Authorization: `Bearer ${tokenStorage}`,
                        },
                    });
                    setVencedor(res.data);
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
    }, [router]);

    return(
        <div className="flex flex-col p-16 py-4 w-full ">
            <h1 className='mx-auto text-5xl font-poppins mt-8'>Vencedor do teste</h1>
            {vencedor.length>0 ? (
                <div className="flex flex-col">
                    <p className="text-xl mx-auto my-8">{vencedor[0].nome}, nota {vencedor[0].nota}.</p>
                    <img src="/flork-vencedor.jpg" className='h-2/3 mx-auto mt-4' alt='flork vencedor' />
                </div>
            ) : (
                <LottieAnimation/>
            )}
            <Link href='/consideracoes' className='mx-auto mt-16 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
        </div>
    )
}