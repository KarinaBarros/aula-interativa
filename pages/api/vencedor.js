import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const Vencedor = async (req, res) => {
    const connect = await connectDB();

    try {
      const gabarito = await connect`SELECT n.ra_aluno, a.nome, n.nota, n.horario
                                    FROM nota n
                                    JOIN alunos a ON n.ra_aluno = a.ra
                                    WHERE n.nota = (SELECT MAX(nota) FROM nota)
                                    ORDER BY n.nota 
                                    DESC, n.horario ASC
                                    LIMIT 1`;
      res.json(gabarito);
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(Vencedor);