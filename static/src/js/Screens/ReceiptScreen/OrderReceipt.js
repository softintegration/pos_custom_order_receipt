odoo.define('pos_custom_order_receipt.OrderReceipt', function(require) {
    'use strict';

    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');

    OrderReceipt.template = 'CustomOrderReceipt';

    Registries.Component.add(OrderReceipt);

    return OrderReceipt;
});
