const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');

const imageRoutes = require('../route/image');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join('../public/dist')));
app.use(morgan('dev'));

app.use('/image', imageRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
