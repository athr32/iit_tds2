import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Define other routes and middleware here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});