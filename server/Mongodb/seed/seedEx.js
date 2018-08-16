const Products = require('../image');
const db = require('../index');
const data = require('../../../mongoSeeds.csv')
// const data = [{
//   imageUrl: "https://loremflickr.com/g/600/800/paris,girl/all"
// }]

const seedDatabase = function() {
  Products.remove({})
  .then(Products.create(data))
  // .then(db.disconnect());
}

seedDatabase();