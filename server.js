const express = require('express');
const helmet = require('helmet');
const app = express ();
const port = 3000;

app.use(helmet());      

app.get('/', (req, res) => {
    res.send('Server berjalan dan siap menerima request.');
});

app.listen(port, () => {
    console.log('Server aktif di port ${port}');
});