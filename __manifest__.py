# -*- coding: utf-8 -*- 


{
    'name': 'Point of sale with custom OrderReceipt',
    'author': 'Soft-integration',
    'application': False,
    'installable': True,
    'auto_install': False,
    'qweb': [],
    'description': False,
    'images': [],
    'version': '1.0.1',
    'category': 'Sales/Point of Sale',
    'demo': [],
    'depends': ['point_of_sale','pos_discount'],
    'data': [
    ],
    'assets': {
            'web.assets_qweb': [
                'pos_custom_order_receipt/static/src/xml/Screens/ReceiptScreen/OrderReceipt.xml',
            ],
            'web.assets_backend': [
                'pos_custom_order_receipt/static/src/js/models.js',
                'pos_custom_order_receipt/static/src/js/Screens/ReceiptScreen/OrderReceipt.js'
            ],
        },
    'license': 'LGPL-3',
}
