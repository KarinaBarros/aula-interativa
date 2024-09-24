import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const ResultadoComunicativo = async (req, res) => {
    const connect = await connectDB();

    try {
      const consulta = await connect`SELECT a.nome, c.nome AS categoria, COUNT(v.votado_ra) AS total_votos
                                        FROM votacao v
                                        JOIN alunos a ON v.votado_ra = a.ra
                                        JOIN categoria c ON v.categoria_id = c.id
                                        WHERE c.id = 2
                                        GROUP BY a.nome, c.nome
                                        ORDER BY c.nome, total_votos DESC;
                                        `;
      res.json(consulta);
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(ResultadoComunicativo);