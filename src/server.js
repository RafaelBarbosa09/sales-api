import express from "express";

const app = express();
app.use(express.json());

const env = process.env;
const PORT = env.PORT || 3001;

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: 'SALES-API',
        status: 'up',
        httpStatus: 200
    });
});

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});