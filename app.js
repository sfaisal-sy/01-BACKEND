import express from "express";
const app = express();
app.use(express.json());



app.get('/api', (req, res) => {
    res.status(200).send("WELCOME TO MY BACKEND API")
});

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API IS WORKING PROPERLY"
    });
});


export default app;