import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const Consultar = async (req, res) => {
    const connect = await connectDB();

    try {
      const consulta = await connect`SELECT * FROM alunos`;
      res.json(consulta);
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(Consultar);