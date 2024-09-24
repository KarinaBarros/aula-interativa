import Ra from "@/components/ra";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import LottieAnimation from "@/components/lootie";

export default function Gabarito(){
    const [showRa, setShowRa] = useState('hidden');
    const [gabarito, setGabarito] = useState([]);
    const [correcao, setCorrrecao] = useState([]);
    const router = useRouter();
    
    useEffect(() => {
        const raStorage = localStorage.getItem('ra');
        if(!raStorage){
            setShowRa('absolute')
        }
    },[])

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        const ra = localStorage.getItem('ra');
        if (tokenStorage && ra) {
            const fetchData = async () => {
                try {
                    const res = await axios.post('/api/gabarito',{ra}, {
                        headers: {
                            Authorization: `Bearer ${tokenStorage}`,
                        },
                    });
                    setGabarito(res.data.gabarito);
                    setCorrrecao(res.data.correcao);
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
            <div className={`${showRa} top-1/3 left-1/3 w-1/3 h-32`}>
                <Ra/>
            </div>
            <h1 className='mx-auto text-3xl font-poppins'>Gabarito</h1>
            {gabarito.length>0 ? (
                <div className="flex flex-col gap-4">
                    <h2 className='mx-auto text-3xl font-poppins'>Nota: {gabarito[0].nota}</h2>
                    <div className={`${gabarito[0].resposta_1 === correcao[0] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">1- Qual era a principal característica dos primeiros computadores?</p>
                        <p className={(gabarito[0].resposta_1 === "a" && gabarito[0].resposta_1 === correcao[0]) ? 'text-green-500' : (gabarito[0].resposta_1 === "a" && gabarito[0].resposta_1 !== correcao[0]) ? 'text-red-500' : 'text-black'}>a) Eram todos coloridos.</p>
                        <p className={(gabarito[0].resposta_1 === "b" && gabarito[0].resposta_1 === correcao[0]) ? 'text-green-500' : (gabarito[0].resposta_1 === "b" && gabarito[0].resposta_1 !== correcao[0]) ? 'text-red-500' : 'text-black'}>b) Eram gigantes e usavam válvulas e muitos fios.</p>
                        <p className={(gabarito[0].resposta_1 === "c" && gabarito[0].resposta_1 === correcao[0]) ? 'text-green-500' : (gabarito[0].resposta_1 === "c" && gabarito[0].resposta_1 !== correcao[0]) ? 'text-red-500' : 'text-black'}>c) Tinham internet.</p>
                        <p className={(gabarito[0].resposta_1 === "d" && gabarito[0].resposta_1 === correcao[0]) ? 'text-green-500' : (gabarito[0].resposta_1 === "d" && gabarito[0].resposta_1 !== correcao[0]) ? 'text-red-500' : 'text-black'}>d) Eram muito rápidos.</p>
                        <p className={(gabarito[0].resposta_1 === "e" && gabarito[0].resposta_1 === correcao[0]) ? 'text-green-500' : (gabarito[0].resposta_1 === "e" && gabarito[0].resposta_1 !== correcao[0]) ? 'text-red-500' : 'text-black'}>e) Eram fáceis de usar.</p>
                        <p>Resposta certa: {correcao[0]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_2 === correcao[1] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">2- Quais foram as principais mudanças entre os computadores ao longo dos anos?</p>
                        <p className={(gabarito[0].resposta_2 === "a" && gabarito[0].resposta_2 === correcao[1]) ? 'text-green-500' : (gabarito[0].resposta_2 === "a" && gabarito[0].resposta_2 !== correcao[1]) ? 'text-red-500' : 'text-black'}>a) Ficaram menores, mais leves e mais rápidos.</p>
                        <p className={(gabarito[0].resposta_2 === "b" && gabarito[0].resposta_2 === correcao[1]) ? 'text-green-500' : (gabarito[0].resposta_2 === "b" && gabarito[0].resposta_2 !== correcao[1]) ? 'text-red-500' : 'text-black'}>b) Não evoluiram ao longo dos anos.</p>
                        <p className={(gabarito[0].resposta_2 === "c" && gabarito[0].resposta_2 === correcao[1]) ? 'text-green-500' : (gabarito[0].resposta_2 === "c" && gabarito[0].resposta_2 !== correcao[1]) ? 'text-red-500' : 'text-black'}>c) Ficaram mais lentos.</p>
                        <p className={(gabarito[0].resposta_2 === "d" && gabarito[0].resposta_2 === correcao[1]) ? 'text-green-500' : (gabarito[0].resposta_2 === "d" && gabarito[0].resposta_2 !== correcao[1]) ? 'text-red-500' : 'text-black'}>d) Ficaram maiores.</p>
                        <p className={(gabarito[0].resposta_2 === "e" && gabarito[0].resposta_2 === correcao[1]) ? 'text-green-500' : (gabarito[0].resposta_2 === "e" && gabarito[0].resposta_2 !== correcao[1]) ? 'text-red-500' : 'text-black'}>e) Todas as respostas anteriores estão certas.</p>
                        <p>Resposta certa: {correcao[1]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_3 === correcao[2] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">3- O que é uma linguagem de programação?</p>
                        <p className={(gabarito[0].resposta_3 === "a" && gabarito[0].resposta_3 === correcao[2]) ? 'text-green-500' : (gabarito[0].resposta_3 === "a" && gabarito[0].resposta_3 !== correcao[2]) ? 'text-red-500' : 'text-black'}>a) É uma linguagem muito complicada que não tem serventia nenhuma.</p>
                        <p className={(gabarito[0].resposta_3 === "b" && gabarito[0].resposta_3 === correcao[2]) ? 'text-green-500' : (gabarito[0].resposta_3 === "b" && gabarito[0].resposta_3 !== correcao[2]) ? 'text-red-500' : 'text-black'}>b) É uma linguagem usada em outro país.</p>
                        <p className={(gabarito[0].resposta_3 === "c" && gabarito[0].resposta_3 === correcao[2]) ? 'text-green-500' : (gabarito[0].resposta_3 === "c" && gabarito[0].resposta_3 !== correcao[2]) ? 'text-red-500' : 'text-black'}>c) É a linguagem que os programadores usam para se comunicar com os computadores.</p>
                        <p className={(gabarito[0].resposta_3 === "d" && gabarito[0].resposta_3 === correcao[2]) ? 'text-green-500' : (gabarito[0].resposta_3 === "d" && gabarito[0].resposta_3 !== correcao[2]) ? 'text-red-500' : 'text-black'}>d) É uma linguagem usada por pessoas com deficiência visual.</p>
                        <p className={(gabarito[0].resposta_3 === "e" && gabarito[0].resposta_3 === correcao[2]) ? 'text-green-500' : (gabarito[0].resposta_3 === "e" && gabarito[0].resposta_3 !== correcao[2]) ? 'text-red-500' : 'text-black'}>e) É uma linguagem usada para comunicação de telefones fixos.</p>
                        <p>Resposta certa: {correcao[2]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_4 === correcao[3] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">4- Qual linguagem os programadores usavam na época dos primeiros computadores?</p>
                        <p className={(gabarito[0].resposta_4 === "a" && gabarito[0].resposta_4 === correcao[3]) ? 'text-green-500' : (gabarito[0].resposta_4 === "a" && gabarito[0].resposta_4 !== correcao[3]) ? 'text-red-500' : 'text-black'}>a) Linguagem binária (0 e 1).</p>
                        <p className={(gabarito[0].resposta_4 === "b" && gabarito[0].resposta_4 === correcao[3]) ? 'text-green-500' : (gabarito[0].resposta_4 === "b" && gabarito[0].resposta_4 !== correcao[3]) ? 'text-red-500' : 'text-black'}>b) JavaScript.</p>
                        <p className={(gabarito[0].resposta_4 === "c" && gabarito[0].resposta_4 === correcao[3]) ? 'text-green-500' : (gabarito[0].resposta_4 === "c" && gabarito[0].resposta_4 !== correcao[3]) ? 'text-red-500' : 'text-black'}>c) Python.</p>
                        <p className={(gabarito[0].resposta_4 === "d" && gabarito[0].resposta_4 === correcao[3]) ? 'text-green-500' : (gabarito[0].resposta_4 === "d" && gabarito[0].resposta_4 !== correcao[3]) ? 'text-red-500' : 'text-black'}>d) HTML.</p>
                        <p className={(gabarito[0].resposta_4 === "e" && gabarito[0].resposta_4 === correcao[3]) ? 'text-green-500' : (gabarito[0].resposta_4 === "e" && gabarito[0].resposta_4 !== correcao[3]) ? 'text-red-500' : 'text-black'}>e) Linguagem simples baseada em palavras.</p>
                        <p>Resposta certa: {correcao[3]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_5 === correcao[4] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">5- O que é um banco de dados?</p>
                        <p className={(gabarito[0].resposta_5 === "a" && gabarito[0].resposta_5 === correcao[4]) ? 'text-green-500' : (gabarito[0].resposta_5 === "a" && gabarito[0].resposta_5 !== correcao[4]) ? 'text-red-500' : 'text-black'}>a) Um lugar para guardar dinheiro.</p>
                        <p className={(gabarito[0].resposta_5 === "b" && gabarito[0].resposta_5 === correcao[4]) ? 'text-green-500' : (gabarito[0].resposta_5 === "b" && gabarito[0].resposta_5 !== correcao[4]) ? 'text-red-500' : 'text-black'}>b) Uma linguagem de programação.</p>
                        <p className={(gabarito[0].resposta_5 === "c" && gabarito[0].resposta_5 === correcao[4]) ? 'text-green-500' : (gabarito[0].resposta_5 === "c" && gabarito[0].resposta_5 !== correcao[4]) ? 'text-red-500' : 'text-black'}>c) Uma calculadora avançada.</p>
                        <p className={(gabarito[0].resposta_5 === "d" && gabarito[0].resposta_5 === correcao[4]) ? 'text-green-500' : (gabarito[0].resposta_5 === "d" && gabarito[0].resposta_5 !== correcao[4]) ? 'text-red-500' : 'text-black'}>d) Um programa que gerencia tabelas de dados.</p>
                        <p className={(gabarito[0].resposta_5 === "e" && gabarito[0].resposta_5 === correcao[4]) ? 'text-green-500' : (gabarito[0].resposta_5 === "e" && gabarito[0].resposta_5 !== correcao[4]) ? 'text-red-500' : 'text-black'}>e) Um sistema de jogos.</p>
                        <p>Resposta certa: {correcao[4]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_6 === correcao[5] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">6-  Qual é o nome da linguagem de programação usada para gerenciar dados em um banco de dados?</p>
                        <p className={(gabarito[0].resposta_6 === "a" && gabarito[0].resposta_6 === correcao[5]) ? 'text-green-500' : (gabarito[0].resposta_6 === "a" && gabarito[0].resposta_6 !== correcao[5]) ? 'text-red-500' : 'text-black'}>a) JavaScript.</p>
                        <p className={(gabarito[0].resposta_6 === "b" && gabarito[0].resposta_6 === correcao[5]) ? 'text-green-500' : (gabarito[0].resposta_6 === "b" && gabarito[0].resposta_6 !== correcao[5]) ? 'text-red-500' : 'text-black'}>b) Python.</p>
                        <p className={(gabarito[0].resposta_6 === "c" && gabarito[0].resposta_6 === correcao[5]) ? 'text-green-500' : (gabarito[0].resposta_6 === "c" && gabarito[0].resposta_6 !== correcao[5]) ? 'text-red-500' : 'text-black'}>c) SQL.</p>
                        <p className={(gabarito[0].resposta_6 === "d" && gabarito[0].resposta_6 === correcao[5]) ? 'text-green-500' : (gabarito[0].resposta_6 === "d" && gabarito[0].resposta_6 !== correcao[5]) ? 'text-red-500' : 'text-black'}>d) HTML.</p>
                        <p className={(gabarito[0].resposta_6 === "e" && gabarito[0].resposta_6 === correcao[5]) ? 'text-green-500' : (gabarito[0].resposta_6 === "e" && gabarito[0].resposta_6 !== correcao[5]) ? 'text-red-500' : 'text-black'}>e) C++.</p>
                        <p>Resposta certa: {correcao[5]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_7 === correcao[6] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">7- Para que serve o comando &quot;INSERT INTO&quot; em SQL?</p>
                        <p className={(gabarito[0].resposta_7 === "a" && gabarito[0].resposta_7 === correcao[6]) ? 'text-green-500' : (gabarito[0].resposta_7 === "a" && gabarito[0].resposta_7 !== correcao[6]) ? 'text-red-500' : 'text-black'}>a) Para deletar dados de uma tabela.</p>
                        <p className={(gabarito[0].resposta_7 === "b" && gabarito[0].resposta_7 === correcao[6]) ? 'text-green-500' : (gabarito[0].resposta_7 === "b" && gabarito[0].resposta_7 !== correcao[6]) ? 'text-red-500' : 'text-black'}>b) Para criar uma nova tabela.</p>
                        <p className={(gabarito[0].resposta_7 === "c" && gabarito[0].resposta_7 === correcao[6]) ? 'text-green-500' : (gabarito[0].resposta_7 === "c" && gabarito[0].resposta_7 !== correcao[6]) ? 'text-red-500' : 'text-black'}>c) Para inserir dados em uma tabela.</p>
                        <p className={(gabarito[0].resposta_7 === "d" && gabarito[0].resposta_7 === correcao[6]) ? 'text-green-500' : (gabarito[0].resposta_7 === "d" && gabarito[0].resposta_7 !== correcao[6]) ? 'text-red-500' : 'text-black'}>d) Para buscar informações na tabela.</p>
                        <p className={(gabarito[0].resposta_7 === "e" && gabarito[0].resposta_7 === correcao[6]) ? 'text-green-500' : (gabarito[0].resposta_7 === "e" && gabarito[0].resposta_7 !== correcao[6]) ? 'text-red-500' : 'text-black'}>e) Para ordenar os dados em uma tabela.</p>
                        <p>Resposta certa: {correcao[6]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_8 === correcao[7] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">8- O que é uma chave em uma tabela de banco de dados?</p>
                        <p className={(gabarito[0].resposta_8 === "a" && gabarito[0].resposta_8 === correcao[7]) ? 'text-green-500' : (gabarito[0].resposta_8 === "a" && gabarito[0].resposta_8 !== correcao[7]) ? 'text-red-500' : 'text-black'}>a) Idade.</p>
                        <p className={(gabarito[0].resposta_8 === "b" && gabarito[0].resposta_8 === correcao[7]) ? 'text-green-500' : (gabarito[0].resposta_8 === "b" && gabarito[0].resposta_8 !== correcao[7]) ? 'text-red-500' : 'text-black'}>b) Ra.</p>
                        <p className={(gabarito[0].resposta_8 === "c" && gabarito[0].resposta_8 === correcao[7]) ? 'text-green-500' : (gabarito[0].resposta_8 === "c" && gabarito[0].resposta_8 !== correcao[7]) ? 'text-red-500' : 'text-black'}>c) Nome.</p>
                        <p className={(gabarito[0].resposta_8 === "d" && gabarito[0].resposta_8 === correcao[7]) ? 'text-green-500' : (gabarito[0].resposta_8 === "d" && gabarito[0].resposta_8 !== correcao[7]) ? 'text-red-500' : 'text-black'}>d) SQL</p>
                        <p className={(gabarito[0].resposta_8 === "e" && gabarito[0].resposta_8 === correcao[7]) ? 'text-green-500' : (gabarito[0].resposta_8 === "e" && gabarito[0].resposta_8 !== correcao[7]) ? 'text-red-500' : 'text-black'}>e) Dados.</p>
                        <p>Resposta certa: {correcao[7]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_9 === correcao[8] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">9- Como podemos consultar todos os dados da tabela &quot;alunos&quot; em SQL?</p>
                        <p className={(gabarito[0].resposta_9 === "a" && gabarito[0].resposta_9 === correcao[8]) ? 'text-green-500' : (gabarito[0].resposta_9 === "a" && gabarito[0].resposta_9 !== correcao[8]) ? 'text-red-500' : 'text-black'}>a) SELECT * FROM alunos;</p>
                        <p className={(gabarito[0].resposta_9 === "b" && gabarito[0].resposta_9 === correcao[8]) ? 'text-green-500' : (gabarito[0].resposta_9 === "b" && gabarito[0].resposta_9 !== correcao[8]) ? 'text-red-500' : 'text-black'}>b) INSERT INTO alunos;</p>
                        <p className={(gabarito[0].resposta_9 === "c" && gabarito[0].resposta_9 === correcao[8]) ? 'text-green-500' : (gabarito[0].resposta_9 === "c" && gabarito[0].resposta_9 !== correcao[8]) ? 'text-red-500' : 'text-black'}>c) DELETE FROM alunos;</p>
                        <p className={(gabarito[0].resposta_9 === "d" && gabarito[0].resposta_9 === correcao[8]) ? 'text-green-500' : (gabarito[0].resposta_9 === "d" && gabarito[0].resposta_9 !== correcao[8]) ? 'text-red-500' : 'text-black'}>d) UPDATE alunos;</p>
                        <p className={(gabarito[0].resposta_9 === "e" && gabarito[0].resposta_9 === correcao[8]) ? 'text-green-500' : (gabarito[0].resposta_9 === "e" && gabarito[0].resposta_9 !== correcao[8]) ? 'text-red-500' : 'text-black'}>e) CREATE TABLE alunos;</p>
                        <p>Resposta certa: {correcao[8]}</p>
                    </div>
                    <div className={`${gabarito[0].resposta_10 === correcao[9] ? 'border-green-500' : 'border-red-500'} flex flex-col bg-gray-100 p-4 rounded-lg border-4 `}>
                        <p className="mb-3">10- A internet é usada em computadores modernos para:</p>
                        <p className={(gabarito[0].resposta_10 === "a" && gabarito[0].resposta_10 === correcao[9]) ? 'text-green-500' : (gabarito[0].resposta_10 === "a" && gabarito[0].resposta_10 !== correcao[9]) ? 'text-red-500' : 'text-black'}>a) Jogar.</p>
                        <p className={(gabarito[0].resposta_10 === "b" && gabarito[0].resposta_10 === correcao[9]) ? 'text-green-500' : (gabarito[0].resposta_10 === "b" && gabarito[0].resposta_10 !== correcao[9]) ? 'text-red-500' : 'text-black'}>b) Falar com os amigos.</p>
                        <p className={(gabarito[0].resposta_10 === "c" && gabarito[0].resposta_10 === correcao[9]) ? 'text-green-500' : (gabarito[0].resposta_10 === "c" && gabarito[0].resposta_10 !== correcao[9]) ? 'text-red-500' : 'text-black'}>c) Ver filmes.</p>
                        <p className={(gabarito[0].resposta_10 === "d" && gabarito[0].resposta_10 === correcao[9]) ? 'text-green-500' : (gabarito[0].resposta_10 === "d" && gabarito[0].resposta_10 !== correcao[9]) ? 'text-red-500' : 'text-black'}>d) Estudar.</p>
                        <p className={(gabarito[0].resposta_10 === "e" && gabarito[0].resposta_10 === correcao[9]) ? 'text-green-500' : (gabarito[0].resposta_10 === "e" && gabarito[0].resposta_10 !== correcao[9]) ? 'text-red-500' : 'text-black'}>e) Todas as alternativas acima.</p>
                        <p>Resposta certa: {correcao[9]}</p>
                    </div>
                    <Link href='/vencedor-teste' className='mx-auto p-4 text-xl text-blue-800'>Próximo &gt;&gt;</Link>
                </div>
            ) : (
                <LottieAnimation/>
            )}
        </div>
    )
}