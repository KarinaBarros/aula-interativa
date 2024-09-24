import bcrypt from 'bcrypt'

export default async function Criptografar(req, res) {
    try {
        const password = '';
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword)
  
        return res.status(200).json({ hashedPassword });
      } catch (error) {
        return res.status(500).json({ message: 'Erro ao criptografar a senha' });
      }
}