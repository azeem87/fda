import knex from './knex-pg';

const _ = require('lodash');

export default async function validateOrderHandler(req, res) {
    let order = req?.body?.event?.data?.new || req.body;
    const result = await validateOrder(order);
    res.json(result);
}

async function validateOrder(order) {
    var isValid = await performValidation(order);
    return await knex('orders')
        .where({id: order.id})
        .update({is_valid: isValid}, ['id', 'is_valid']);
}

async function performValidation(order) {
    const products = await knex('products')
        .whereIn('id', knex.select('product_id').from('orders')
            .join('order_items', 'orders.id', '=', 'order_items.order_id')
            .where('orders.id', order.id));

    return !_.find(products, function (product) {
        return product.stock_count <= 0;
    }) > 0;
}