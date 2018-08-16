const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/sdc_blake'

const db = mongoose.connect(mongoUri);

module.exports = db;