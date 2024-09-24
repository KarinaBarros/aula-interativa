import axios from "axios"

export default function Criptografar(){
    const criptografar = async() => {
        try{
            const response = await axios.post('/api/criptografar');
            console.log(response.data.hashedPassword)
        } catch (error) {
            console.error('Erro ao criptografar a senha:', error);
          }
    };
    return(
        <div>
            <button onClick={criptografar}>Senha</button>
        </div>
    )
}