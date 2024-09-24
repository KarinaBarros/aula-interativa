import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const Gabarito = async (req, res) => {
    const connect = await connectDB();
    const {ra} =req.body;
    const correcao = ['b', 'a', 'c', 'a', 'd', 'c', 'c', 'b', 'a', 'e'];

    try {
        console.log('ra:', ra)
      const gabarito = await connect`SELECT respostas.*, nota.nota
            FROM respostas
            LEFT JOIN nota ON respostas.ra = nota.ra_aluno
            WHERE respostas.ra = ${ra}`;
       const resultado = {
            gabarito: gabarito,
            correcao: correcao
        };
      res.json(resultado);
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(Gabarito);