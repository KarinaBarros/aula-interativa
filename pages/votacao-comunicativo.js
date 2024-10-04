import Ra from "@/components/ra";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import LottieAnimation from "@/components/lootie";

export default function Comunicativo(){
    const [showRa, setShowRa] = useState('hidden');
    const [votante_ra, setVotante_ra] = useState('');
    const [token, setToken] =useState('');
    const [loading, setLoading] = useState(false);
    const [alunos, setAlunos] = useState([]);
    const [votado_ra, setVotado_ra] = useState('');
    const router = useRouter();

    useEffect(() => {
        const raStorage = localStorage.getItem('ra');
        if (raStorage) {
            setVotante_ra(raStorage);
        }else{
            setShowRa('absolute');
        }
    },[])


    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage) {
            setToken(tokenStorage);
            const fetchData = async () => {
                try {
                    const res = await axios.get('/api/alunos', {
                        headers: {
                            Authorization: `Bearer ${tokenStorage}`,
                        },
                    });
                    console.log('Dados da API:', res.data); 
                console.log('Votante RA:', votante_ra); 
                    if (votante_ra) {
                        const filteredItems = res.data.filter(item => item.ra.trim() !== votante_ra);
                        setAlunos(filteredItems);
                    } 
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
    }, [votante_ra, token, router]);

    
      const insertData = async (e) => {
        e.preventDefault();
        try {
          setLoading(true)
          const res = await axios.post('/api/votar-comunicativo', { votante_ra, votado_ra }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          alert(res.data.message);
    
        } catch (err) {
          if (err.response && err.response.status === 401) {
            router.push('/login');
          } else {
            alert('Erro ao votar!');
          }
        }finally{
          setLoading(false)
        }
      };

    return(
        <div className="flex flex-col py-4 w-full">
            <div className={`${showRa} top-1/3 left-1/3 w-1/3 h-32 z-20`}>
                <Ra/>
            </div>
            <h1 className='mx-auto text-3xl font-poppins'>Aluno mais comunicativo</h1>
            <p className="mx-auto mt-2">Escolha o colega que você deseja votar.</p>
            {alunos.length>0 ? (
                <form onSubmit={insertData} className="mt-4 flex flex-col mx-auto">
                    {alunos.map((aluno, index) => (
                        <label key={index}>
                            <input type='radio'
                            name="voto"
                            value={aluno.ra.trim()}
                            onChange={(e) => setVotado_ra(e.target.value)}
                            checked={votado_ra === aluno.ra.trim()}
                            required
                            className="mr-4"
                            />
                        {aluno.nome}</label>
                    ))}
                    <button type='submit' className="bg-blue-800 text-white text-xl mx-auto py-1 px-4 rounded-lg mt-4" disabled={loading} >{loading ? 'Carregando...' : 'Votar'}</button>
                    <Link href='/resultado-votacao-comunicativo' className='mx-auto mt-8 p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
                </form>
            ) : 
                <LottieAnimation/>
            }
        </div>
    )
}