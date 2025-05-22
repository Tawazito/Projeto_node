import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); // Adicione esta linha antes das rotas

app.get('/transactions', (req, res) => {
    console.log('Hello World!');
    res.json([
        {
            uid: '1',
            type: 'expense',
            date: new Date().toISOString(),
            money: { currency: 'BRL', value: 100 },
            transactionType: 'Outros',
            description: 'Teste'
        }
    ]);
});


app.listen(3000, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});