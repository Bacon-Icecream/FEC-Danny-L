const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	// _id: Number,
	product:String,
	imageUrl:[String]
});

const product = mongoose.model('product', productSchema);

module.exports = product;