const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://userid:userid@fgwweb2.tajnoer.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2', 
    { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.listen(port);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
})
console.log(`server started on port ${port}`);