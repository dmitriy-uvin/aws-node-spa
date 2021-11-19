const express = require('express');
const app = express();
const path = require('path');

const port = 5555;

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({
        message: "I AM OK!"
    });
});

app.get('/api/items', (req, res) => {
    res.status(200).json({
        data: [
            {
                name: 'Item Name 1',
                id: 12314,
            },
            {
                name: 'Item Name 2',
                id: 643577,
            },
            {
                name: 'Item Name 3',
                id: 4546,
            },
        ]
    });
});

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist", 'index.html'));
});

app.listen(port, () => {
    console.log(`API server is launched on port ${port}`);
});
