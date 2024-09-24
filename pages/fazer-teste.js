import '@/app/globals.css';
import { useState, useEffect } from 'react';
import Ra from '@/components/ra';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function FazerTeste() {
    const [showRa, setShowRa] = useState('hidden');
    const [ra, setRa] = useState('');
    const router = useRouter();
    const [token, setToken] = useState('');
    const [loading, setLoading] =useState(false);
    const [resposta_1, setResposta1] = useState('');
    const [resposta_2, setResposta2] = useState('');
    const [resposta_3, setResposta3] = useState('');
    const [resposta_4, setResposta4] = useState('');
    const [resposta_5, setResposta5] = useState('');
    const [resposta_6, setResposta6] = useState('');
    const [resposta_7, setResposta7] = useState('');
    const [resposta_8, setResposta8] = useState('');
    const [resposta_9, setResposta9] = useState('');
    const [resposta_10, setResposta10] = useState('');
    const [showLink, setShowLink] = useState('hidden');

    useEffect(() => {
        const raStorage = localStorage.getItem('ra');
        if (raStorage) {
            setRa(raStorage);
        } else {
            setShowRa('absolute');
        }
    }, [])

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
          const res = await axios.post('/api/teste', { ra, resposta_1, resposta_2, resposta_3, resposta_4, resposta_5, resposta_6, resposta_7, resposta_8, resposta_9, resposta_10}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          alert(res.data.message);
    
        } catch (err) {
          if (err.response && err.response.status === 401) {
            router.push('/login');
          } else {
            alert('Erro ao concluir o teste!');
          }
        }finally{
          setLoading(false)
          setShowLink('block');
        }
      };

    return (
        <div className="flex flex-col py-4 w-full p-16">
            <div className={`${showRa} top-1/3 left-1/3 w-1/3 h-32`}>
                <Ra />
            </div>
            <form onSubmit={insertData} className='flex flex-col gap-4'>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>1 - Qual era a principal característica dos primeiros computadores?</p>
                    <label>
                        <input type='radio'
                            name="1"
                            value={'a'}
                            onChange={(e) => setResposta1(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Eram todos coloridos.</label>
                    <label>
                        <input type='radio'
                            name="1"
                            value={'b'}
                            onChange={(e) => setResposta1(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Eram gigantes e usavam válvulas e muitos fios.</label>
                        <label>
                            <input type='radio'
                            name="1"
                            value={'c'}
                            onChange={(e) => setResposta1(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Tinham internet.</label>
                        <label>
                            <input type='radio'
                            name="1"
                            value={'d'}
                            onChange={(e) => setResposta1(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) Eram muito rápidos.</label>
                        <label>
                            <input type='radio'
                            name="1"
                            value={'e'}
                            onChange={(e) => setResposta1(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Eram fáceis de usar.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>2 - Quais foram as principais mudanças entre os computadores ao longo dos anos?</p>
                    <label>
                        <input type='radio'
                            name="2"
                            value={'a'}
                            onChange={(e) => setResposta2(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Ficaram menores, mais leves e mais rápidos.</label>
                    <label>
                        <input type='radio'
                            name="2"
                            value={'b'}
                            onChange={(e) => setResposta2(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Não evoluiram ao longo dos anos.</label>
                        <label>
                            <input type='radio'
                            name="2"
                            value={'c'}
                            onChange={(e) => setResposta2(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Ficaram mais lentos.</label>
                        <label>
                            <input type='radio'
                            name="2"
                            value={'d'}
                            onChange={(e) => setResposta2(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) Ficaram maiores.</label>
                        <label>
                            <input type='radio'
                            name="2"
                            value={'e'}
                            onChange={(e) => setResposta2(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Todas as respostas anteriores estão certas.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>3 - O que é uma linguagem de programação?</p>
                    <label>
                        <input type='radio'
                            name="3"
                            value={'a'}
                            onChange={(e) => setResposta3(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) É uma linguagem muito complicada que não tem serventia nenhuma.</label>
                    <label>
                        <input type='radio'
                            name="3"
                            value={'b'}
                            onChange={(e) => setResposta3(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) É uma linguagem usada em outro país.</label>
                        <label>
                            <input type='radio'
                            name="3"
                            value={'c'}
                            onChange={(e) => setResposta3(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) É a linguagem que os programadores usam para se comunicar com os computadores.</label>
                        <label>
                            <input type='radio'
                            name="3"
                            value={'d'}
                            onChange={(e) => setResposta3(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) É uma linguagem usada por pessoas com deficiência visual.</label>
                        <label>
                            <input type='radio'
                            name="3"
                            value={'e'}
                            onChange={(e) => setResposta3(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) É uma linguagem usada para comunicação de telefones fixos.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>4 - Qual linguagem os programadores usavam na época dos primeiros computadores?</p>
                    <label>
                        <input type='radio'
                            name="4"
                            value={'a'}
                            onChange={(e) => setResposta4(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Linguagem binária (0 e 1).</label>
                    <label>
                        <input type='radio'
                            name="4"
                            value={'b'}
                            onChange={(e) => setResposta4(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) JavaScript.</label>
                        <label>
                            <input type='radio'
                            name="4"
                            value={'c'}
                            onChange={(e) => setResposta4(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Python.</label>
                        <label>
                            <input type='radio'
                            name="4"
                            value={'d'}
                            onChange={(e) => setResposta4(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) HTML.</label>
                        <label>
                            <input type='radio'
                            name="4"
                            value={'e'}
                            onChange={(e) => setResposta4(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Linguagem simples baseada em palavras.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>5 - O que é um banco de dados?</p>
                    <label>
                        <input type='radio'
                            name="5"
                            value={'a'}
                            onChange={(e) => setResposta5(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Um lugar para guardar dinheiro.</label>
                    <label>
                        <input type='radio'
                            name="5"
                            value={'b'}
                            onChange={(e) => setResposta5(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Uma linguagem de programação.</label>
                        <label>
                            <input type='radio'
                            name="5"
                            value={'c'}
                            onChange={(e) => setResposta5(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Uma calculadora avançada.</label>
                        <label>
                            <input type='radio'
                            name="5"
                            value={'d'}
                            onChange={(e) => setResposta5(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) Um programa que gerencia tabelas de dados.</label>
                        <label>
                            <input type='radio'
                            name="5"
                            value={'e'}
                            onChange={(e) => setResposta5(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Um sistema de jogos.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>6 - Qual é o nome da linguagem de programação usada para gerenciar dados em um banco de dados?</p>
                    <label>
                        <input type='radio'
                            name="6"
                            value={'a'}
                            onChange={(e) => setResposta6(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) JavaScript.</label>
                    <label>
                        <input type='radio'
                            name="6"
                            value={'b'}
                            onChange={(e) => setResposta6(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Python.</label>
                        <label>
                            <input type='radio'
                            name="6"
                            value={'c'}
                            onChange={(e) => setResposta6(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) SQL.</label>
                        <label>
                            <input type='radio'
                            name="6"
                            value={'d'}
                            onChange={(e) => setResposta6(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) HTML.</label>
                        <label>
                            <input type='radio'
                            name="6"
                            value={'e'}
                            onChange={(e) => setResposta6(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) C++</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>7 - Para que serve o comando "INSERT INTO" em SQL?</p>
                    <label>
                        <input type='radio'
                            name="7"
                            value={'a'}
                            onChange={(e) => setResposta7(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Para deletar dados de uma tabela.</label>
                    <label>
                        <input type='radio'
                            name="7"
                            value={'b'}
                            onChange={(e) => setResposta7(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Para criar uma nova tabela.</label>
                        <label>
                            <input type='radio'
                            name="7"
                            value={'c'}
                            onChange={(e) => setResposta7(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Para inserir dados em uma tabela.</label>
                        <label>
                            <input type='radio'
                            name="7"
                            value={'d'}
                            onChange={(e) => setResposta7(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) Para buscar informações na tabela.</label>
                        <label>
                            <input type='radio'
                            name="7"
                            value={'e'}
                            onChange={(e) => setResposta7(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Para ordenar os dados em uma tabela.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>8 - O que é uma chave em uma tabela de banco de dados?</p>
                    <label>
                        <input type='radio'
                            name="8"
                            value={'a'}
                            onChange={(e) => setResposta8(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Idade.</label>
                    <label>
                        <input type='radio'
                            name="8"
                            value={'b'}
                            onChange={(e) => setResposta8(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Ra.</label>
                        <label>
                            <input type='radio'
                            name="8"
                            value={'c'}
                            onChange={(e) => setResposta8(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Nome.</label>
                        <label>
                            <input type='radio'
                            name="8"
                            value={'d'}
                            onChange={(e) => setResposta8(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) SQL.</label>
                        <label>
                            <input type='radio'
                            name="8"
                            value={'e'}
                            onChange={(e) => setResposta8(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Dados.</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>9 - Como podemos consultar todos os dados da tabela "alunos" em SQL?</p>
                    <label>
                        <input type='radio'
                            name="9"
                            value={'a'}
                            onChange={(e) => setResposta9(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) SELECT * FROM alunos;</label>
                    <label>
                        <input type='radio'
                            name="9"
                            value={'b'}
                            onChange={(e) => setResposta9(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b)  INSERT INTO alunos;</label>
                        <label>
                            <input type='radio'
                            name="9"
                            value={'c'}
                            onChange={(e) => setResposta9(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) DELETE FROM alunos;</label>
                        <label>
                            <input type='radio'
                            name="9"
                            value={'d'}
                            onChange={(e) => setResposta9(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d)  UPDATE alunos;</label>
                        <label>
                            <input type='radio'
                            name="9"
                            value={'e'}
                            onChange={(e) => setResposta9(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) CREATE TABLE alunos;</label>
                </div>
                <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
                    <p className='mb-3'>10 - A internet é usada em computadores modernos para:</p>
                    <label>
                        <input type='radio'
                            name="10"
                            value={'a'}
                            onChange={(e) => setResposta10(e.target.value)}
                            required
                            className="mr-4"
                        />
                        a) Jogar.</label>
                    <label>
                        <input type='radio'
                            name="10"
                            value={'b'}
                            onChange={(e) => setResposta10(e.target.value)}
                            required
                            className="mr-4"
                        />
                        b) Falar com os amigos.</label>
                        <label>
                            <input type='radio'
                            name="10"
                            value={'c'}
                            onChange={(e) => setResposta10(e.target.value)}
                            required
                            className="mr-4"
                            />
                        c) Ver filmes.</label>
                        <label>
                            <input type='radio'
                            name="10"
                            value={'d'}
                            onChange={(e) => setResposta10(e.target.value)}
                            required
                            className="mr-4"
                            />
                        d) Estudar.</label>
                        <label>
                            <input type='radio'
                            name="10"
                            value={'e'}
                            onChange={(e) => setResposta10(e.target.value)}
                            required
                            className="mr-4"
                            />
                        e) Todas as alternativas acima.</label>
                </div>
                <button type='submit' className="bg-blue-800 text-white text-xl mx-auto py-1 px-4 rounded-lg mt-4" disabled={loading} >{loading ? 'Carregando...' : 'Concluir teste'}</button>
            </form>
            <Link href='/gabarito' className={`${showLink} mx-auto p-4 text-xl text-blue-800`}>Próximo &gt;&gt;</Link>
        </div>
    )
}