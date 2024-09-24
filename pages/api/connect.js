import postgres from "postgres";

export default async function connectDB() {
    try {
      const connection = postgres(process.env.NEON);
      console.log('Conexão bem-sucedida ao banco de dados PostgreSQL');
      return connection;
    } catch (err) {
      console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
      throw err;
    }
  }