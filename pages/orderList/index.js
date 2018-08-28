import React from 'react'
import Head from 'next/head'
import axios from '../../utils/axios'
import './index.less'
class OrderList extends React.Component {
    static async getInitialProps({req, res}) {
        const orderListData = await axios.get('http://localhost:4000/api/h5/order/list');
        return {orderListData: orderListData.data}
    }
    goDetails(order) {
        window.location.href = `./orderDetails?order=${order}`
    }
    render() {
        let {orderListData} = this.props;
        orderListData = orderListData.data;
        let orderListHtml = '';
        if (orderListData.length > 0) {
            orderListHtml = orderListData.map((item, index) => {
                return <div className="list-container" key={index}>
                    <div className="header">
                        <div className="time">{item.createTime}</div>
                        <div className="status">{item.status}</div>
                    </div>
                    <div className="body">
                        <div className="item-container">
                            {item.nameList.map((itemList, k) => {
                                return  <div className="item" key={k}>
                                    <div className="left">
                                        <img />
                                        <span>{itemList.name} </span>
                                        <span className="copies"> x {itemList.copies}</span>
                                    </div>
                                    <div className="right">￥{itemList.copies * itemList.price}</div>
                                </div>
                            })}

                        </div>
                        <div className="item more" onClick={this.goDetails.bind(this, item.order)}>查看更多</div>
                    </div>
                    <div className="footer">共{item.num}件商品，合计￥{item.price}</div>
                </div>
            })
        } else {
            orderListHtml = <div className="no-order-list">
                <div className="img-container">
                    <img src="../components/common/img/emptyState.png"/>
                    <div className="text">还没有订单哦</div>
                </div>
            </div>
        }

        return (
            <div className="order-list">
                <Head>
                    <title>订单列表</title>
                </Head>
                {orderListHtml}

            </div>
        )
    }
};

export default OrderList