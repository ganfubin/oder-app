const express = require('express');
const router = express.Router();

router.get('/h5/order/list', (req, res) => {
    const list = {
        success: true,
        data: [
            {
                createTime: '2018-07-07',
                status: '已支付',
                order: 1,
                nameList: [
                    {
                        name: '小炒肉',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼1',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼2',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼3',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼4',
                        copies: 1,
                        price: 20,

                    }
                ],
                num: 5,
                price: 100
            },
            {
                createTime: '2018-07-07',
                status: '已支付',
                order: 2,
                nameList: [
                    {
                        name: '小炒肉',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼1',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼2',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼3',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼4',
                        copies: 1,
                        price: 20,

                    }
                ],
                num: 5,
                price: 100
            },
            {
                createTime: '2018-07-07',
                status: '已支付',
                order: 3,
                nameList: [
                    {
                        name: '小炒肉',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼1',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼2',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼3',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼4',
                        copies: 1,
                        price: 20,

                    }
                ],
                num: 5,
                price: 100
            },
            {
                createTime: '2018-07-07',
                status: '已支付',
                order: 4,
                nameList: [
                    {
                        name: '小炒肉',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼1',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼2',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼3',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼4',
                        copies: 1,
                        price: 20,

                    }
                ],
                num: 5,
                price: 100
            },
            {
                createTime: '2018-07-07',
                status: '已支付',
                order: 5,
                nameList: [
                    {
                        name: '小炒肉',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼1',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼2',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼3',
                        copies: 1,
                        price: 20,

                    },
                    {
                        name: '鲫鱼4',
                        copies: 1,
                        price: 20,

                    }
                ],
                num: 5,
                price: 100
            },
        ]
    };
    res.status(200).send(list);
});

module.exports = router;