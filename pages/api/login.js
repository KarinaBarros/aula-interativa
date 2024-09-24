import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function Login(req, res) {
    try{
        const { senha } = req.body;
    
        // Recuperar o hash armazenado na variável de ambiente
        const password = process.env.SENHA;
        // Comparar a senha fornecida com o hash
        const match = await bcrypt.compare(senha, password);
    
        if (match) {
          // Senha correta
          const token = jwt.sign(
            {},
            process.env.JWT_SECRET, // Chave secreta para assinar o token
            { expiresIn: '2h' } // Tempo de expiração
          );
          res.status(200).json({ success: true, message: 'Login bem sucedido!', token });
        } else {
          // Senha incorreta
          res.status(401).json({ success: false, message: 'Senha inválida!' });
        }
      } catch {
        console.error('Erro ao comparar senhas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }

}