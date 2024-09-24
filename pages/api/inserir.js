import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const Inserir = async (req, res) => {
    const { ra, nome,idade } = req.body;
    const connect = await connectDB();

    try {
      await connect`
        INSERT INTO alunos(ra, nome, idade)
        VALUES (${ra}, ${nome}, ${idade});
      `;
      res.status(200).json({ message: 'Dados inseridos com sucesso!' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default authenticate(Inserir);