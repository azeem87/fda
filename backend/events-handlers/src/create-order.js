import knex from './knex-pg';

export default async function creeateOrderEventHandler(req, res) {
    let order = req?.body?.event?.data?.new || req.body;
    const isValidOrder = await isStockAvailable(order);
    let updatedOrder = await knex('orders')
        .where({id: order.id})
        .update({is_valid: isValidOrder}, ['id', 'is_valid']);
    res.json(updatedOrder);
}

async function isStockAvailable(order) {
    const products = await knex('products')
        .whereIn('id', knex.select('product_id').from('orders')
            .join('order_items', 'orders.id', '=', 'order_items.order_id')
            .where('orders.id', order.id))
        .and.where('products.stock_count', '>', 0);
    return products.length;
}