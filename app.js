const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Minu lemmik toit: pannkoogid');
});

app.listen(port, () => {
    console.log(`Started server at http://localhost:${port}`);
});
