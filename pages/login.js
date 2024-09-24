import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import '@/app/globals.css'

export default function Login(){
    const router = useRouter();
    const [senha, setSenha] = useState('');

    const fazerLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/login', {senha});
            if(response.data.success){
                console.log('Login ok');
                const token = response.data.token;
                localStorage.setItem('token', token);
                router.push('/inserir-dados')
            }else{
                alert('Senha inválida!')
            }
        }catch(err){
            alert('Erro no servidor!');
        }
    }
    return(
        <div className="flex flex-col px-16 py-4 h-screen w-full">
            <form onSubmit={fazerLogin} className="m-auto flex flex-col">
                <label className="text-xl">Senha: <br/>
                    <input
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="border border-blue-800 px-2 rounded"
                    ></input>
                </label>
                <button type="submit" className="bg-blue-800 text-white text-xl mx-auto py-1 px-4 rounded-lg mt-4">Login</button>
            </form>
        </div>
    )
}