const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.use(express.json())
app.use('/acc',require('./routes/Createuser.jsx'))





app.use(bodyParser.json());
app.use(cors());

const uri = process.env.Mongo_uri;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const passwordSchema = new mongoose.Schema({
    url: String,
    username: String,
    pass: String,
    id: String,
});

const Password = mongoose.model('Password', passwordSchema);

app.post('/', async (req, res) => {
    try {
        const password = new Password(req.body);
        await password.save();
        res.status(201).send(password);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.get('/', async (req, res) => {
    try {
        const passwords = await Password.find();
        res.status(201).send(passwords);
    } catch (error) {
        res.status(405).send(error);
    }
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log('Received delete request for id:', id);
    try {
        const result = await Password.deleteOne({ id: id });
        console.log('Delete result:', result);

        if (result.deletedCount === 1) {
            res.send("Deleted successfully");
        } else {
            res.status(404).send("Document not found");
        }
    } catch (err) {
        console.error('Error deleting document:', err);
        res.status(500).send("Error deleting document: " + err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
