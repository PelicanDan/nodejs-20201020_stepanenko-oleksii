const Product = require('../models/Product');

module.exports.productsByQuery = async function productsByQuery(ctx, next) {
  let query = ctx.request.query.query;
  if (!query) return ctx.body = {products: []}

  let products = await Product.find({ $text: { $search: query } });

  ctx.body = {products: products};
};
