const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../model/image');

router.get('/', (request, response, next) =>{
  Product.find()
  .exec()
  .then(products =>{
  	response.status(200).json(products);
  })
  .catch(err =>{
  	console.log(err);
  	response.status(500).json({
  		error:err
  	});
  });
});

router.get('/:productId', (request, response, next) =>{
  const id = request.params.productId;
  Product.findById(id)
  .exec()
  .then( product =>{
  	console.log('single product', product);
  	if(product) {
  		response.status(200).json(product)
  	} 
    else{
    	response.status(400).json({
    		message:'not valid product id / cannot find product'
    	});
    }
  })
  .catch( err=>{
  	console.log(err);
  	response.status(500).json({
  		error:err
  	});
  });
});

router.post('/', (request, response, next) =>{
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		product:request.body.product,
		imageUrl: request.body.imageUrl
	});
	product.save()
	     .then(product =>{
	     	console.log(product);
	     	response.status(201).json({
	     		message:'successfully post productUrl',
	     		addedImgUrl:product
	     	});
	     })
	     .catch(err =>{
	     	console.log(err);
	     	response.status(500).json({
	     		error:err
	     	})
	     });
});

router.delete('/:productId', (request, response, next) =>{
	const id = request.params.productId;
    Product.remove({
    	_id:id
    })
    .exec()
    .then( productId =>{
    	console.log('Successfully delete');
    	response.status(200).json(productId);
    })
    .catch(err=>{
    	console.log(err);
    	response.status(500).json({
    		error:err
    	})
    });
});

router.delete('/:product', (request, response, next) =>{
  const product = request.params.product;
  Product.remove({
  	product:product
  })
  .exec()
  .then((product) =>{
  	console.log(`Successfully delete ${product}`);
  	response.status(200).json(product);
  })
  .catch(err =>{
  	console.log(err);
  	response.status(500).json({
  		error:err
  	})
  });
});

module.exports = router;