const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const externalServiceURL = 'http://www.raydelto.org/agenda.php/api/contacts';

app.get('/get', async (req, res) => {
    try {
        const response = await axios.get(externalServiceURL);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener contactos' });
    }
});

app.post('/post', async (req, res) => {
    try {
        await axios.post(externalServiceURL, req.body);
        res.status(201).json({ message: 'Contacto agregado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar contacto' });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
