odoo.define('pos_custom_order_receipt.models', function (require) {
    "use strict";
    var models = require('point_of_sale.models');
    var _super_orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
        export_for_printing: function () {
            var result = _super_orderline.export_for_printing.call(this);
            var discount_product_id = this.pos.config.discount_product_id;
            result.product_default_code = this.get_product().default_code
            result.is_discount_line = this.product.id == discount_product_id[0]
            console.log(result)
            return result;
        }
    });
    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({

        get_discount_global_amount : function(){
            var discount_global_amount = 0
            var discount_product_id = this.pos.config.discount_product_id;
            this.orderlines.each(function(line){
                if (line.product.id == discount_product_id[0]){
                    discount_global_amount += (line.quantity * line.price)
                }

            })
            return discount_global_amount
        },
        export_for_printing: function () {
            var result = _super_order.export_for_printing.call(this);
            result.discount_global = this.get_discount_global_amount()
            result.total_without_discount = result.total_with_tax - result.discount_global
            return result;
        },

    })
})