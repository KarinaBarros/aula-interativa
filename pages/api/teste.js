import { authenticate } from "@/middlewares/authMiddleware";
import connectDB from "./connect";

const Teste = async (req, res) => {
    const { ra, resposta_1, resposta_2, resposta_3, resposta_4, resposta_5, resposta_6, resposta_7, resposta_8, resposta_9, resposta_10 } = req.body;
    const connect = await connectDB();
    const enviadas = [resposta_1, resposta_2, resposta_3, resposta_4, resposta_5, resposta_6, resposta_7, resposta_8, resposta_9, resposta_10];
    const certas = ['b', 'a', 'c', 'a', 'd', 'c', 'c', 'b', 'a', 'e'];
    let nota = 0;

    // Calcular a nota
    for (let i = 0; i < enviadas.length; i++) {
        if (enviadas[i] === certas[i]) {
            nota += 1; // Adiciona 1 ponto se a resposta estiver correta
        }
    }

    const transaction = async (sql) => {
        try {
            await sql.begin(async (sql) => {
                // Iniciar a transação
                await sql`
                    INSERT INTO respostas (ra, resposta_1, resposta_2, resposta_3, resposta_4, resposta_5, resposta_6, resposta_7, resposta_8, resposta_9, resposta_10)
                    VALUES (${ra}, ${resposta_1}, ${resposta_2}, ${resposta_3}, ${resposta_4}, ${resposta_5}, ${resposta_6}, ${resposta_7}, ${resposta_8}, ${resposta_9}, ${resposta_10});
                `;
                await sql`
                    INSERT INTO nota (ra_aluno, nota)
                    VALUES (${ra}, ${nota});
                `;
                // Transação confirmada se tudo estiver correto
                console.log('Transação concluída com sucesso!');
            });
            res.status(200).json({ message: 'Teste concluído com sucesso!' });
        } catch (error) {
            // Rollback em caso de erro
            console.error('Erro ao inserir dados:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    await transaction(connect);
};

export default authenticate(Teste);