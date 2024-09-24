import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const VotarEngracado = async (req, res) => {
    const { votante_ra, votado_ra  } = req.body;
    const connect = await connectDB();

    try {
      await connect`
        INSERT INTO votacao (votante_ra, votado_ra, categoria_id) 
        VALUES (${votante_ra}, ${votado_ra}, 3);
      `;
      res.status(200).json({ message: 'Voto inserido com sucesso!' });
    } catch (error) {
      console.error('Error ao votar:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(VotarEngracado);